import React, { createContext, useContext, useEffect, useState } from 'react';

import { Auth, Amplify } from 'aws-amplify';
import awsConfig from '../utils/awsAuth';
Amplify.configure({ awsConfig });

interface UseAuth {
    isLoading: boolean;
    isAuthenticated: boolean;
    username: string;
    tenantId: string;
    signUp: (username: string, password: string, subdomain: string) => Promise<Result>;
    confirmSignUp: (username: string, password: string, verificationCode: string) => Promise<Result>;
    signIn: (username: string, password: string) => Promise<Result>;
    signOut: () => void;
}

interface Result {
    success: boolean;
    message: string;
}

const AuthContext = createContext({} as UseAuth);

export const ProvideAuth: React.FC = ({ children }) => {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};

const useProvideAuth = (): UseAuth => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [tenantId, setTenantId] = useState('');
    const [password, setPassword] = useState('');
    const [subdomain, setSubdomain] = useState('');

    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then((result) => {
                setUsername(result.username);
                setIsAuthenticated(true);
                setIsLoading(false);
                setTenantId(result.attributes["custom:tenantId"]);
                Amplify.configure({
                    aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
                    API: {
                        graphql_headers: async () => {
                            const session = await Auth.currentSession();
                            return {
                                Authorization: session.getIdToken().getJwtToken(),
                            };
                        },
                    },
                });
            })
            .catch(() => {
                setUsername('');
                setIsAuthenticated(false);
                setIsLoading(false);
                setTenantId('');
                Amplify.configure({
                    aws_appsync_authenticationType: "AWS_IAM",
                });
            });
    }, []);

    const signUp = async (username: string, password: string, subdomain: string) => {
        const email = username;
        const tenantId = subdomain;

        try {
            await Auth.signUp({
                username, password, attributes: {
                    email,
                    'custom:tenantId': tenantId,
                }
            });
            setUsername(username);
            setPassword(password);
            setSubdomain(subdomain);
            return { success: true, message: '' };
        } catch (error) {
            console.log(error)
            return {
                success: false,
                message: 'メールアドレスは既に登録済みです',
            };
        }
    };

    const confirmSignUp = async (username: string, password: string, verificationCode: string) => {
        try {
            await Auth.confirmSignUp(username, verificationCode);
            const result = await signIn(username, password);
            setPassword('');
            return result;
        } catch (error) {
            return {
                success: false,
                message: '認証に失敗しました。',
            };
        }
    };

    const signIn = async (username: string, password: string) => {
        try {
            const result = await Auth.signIn(username, password);
            setUsername(result.username);
            setIsAuthenticated(true);
            return { success: true, message: '' };
        } catch (error) {
            return {
                success: false,
                message: '認証に失敗しました。',
            };
        }
    };

    const signOut = async () => {
        try {
            await Auth.signOut();
            setUsername('');
            setIsAuthenticated(false);
            return { success: true, message: '' };
        } catch (error) {
            return {
                success: false,
                message: 'ログアウトに失敗しました。',
            };
        }
    };

    return {
        isLoading,
        isAuthenticated,
        username,
        tenantId,
        signUp,
        confirmSignUp,
        signIn,
        signOut,
    };
};
