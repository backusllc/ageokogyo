const awsmobile = {
  aws_project_region: process.env.GATSBY_AWS_REGION,
  aws_appsync_graphqlEndpoint: process.env.GATSBY_AWS_URL,
  aws_appsync_region: process.env.GATSBY_AWS_REGION,
  aws_cognito_identity_pool_id: process.env.GATSBY_AWS_IDENTITY_POOL_ID,
  aws_cognito_region: process.env.GATSBY_AWS_REGION,
  aws_user_pools_id: process.env.GATSBY_AWS_POOLS_ID,
  aws_user_pools_web_client_id: process.env.GATSBY_AWS_POOLS_WEB_CLIENT_ID,
  aws_user_files_s3_bucket: process.env.GATSBY_APP_S3_BUCKET,
  aws_user_files_s3_bucket_region: process.env.GATSBY_AWS_REGION,

  Auth: {
    identityPoolId: process.env.GATSBY_AWS_IDENTITY_POOL_ID,
    region: process.env.GATSBY_AWS_REGION,
    userPoolId: process.env.GATSBY_AWS_POOLS_ID,
    userPoolWebClientId: process.env.GATSBY_AWS_POOLS_WEB_CLIENT_ID,
    mandatorySignIn: false,
  },
  cookieStorage: {
    domain: process.env.GATSBY_APP_AUTH_COOKIE_STORAGE_DOMAIN,
    path: '/',
    expires: 365,
    sameSite: "strict",
    secure: true
  },
  authenticationFlowType: 'USER_SRP_AUTH',
}

export default awsmobile;
