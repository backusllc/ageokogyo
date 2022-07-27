import React, { FC } from 'react'
import { MdClose } from 'react-icons/md'
import { Sprinkles, sprinkles } from '../../../../styles/sprinkles.css';
import * as styles from './index.css'

interface Props {
    onClick?: () => void;
    children?: React.ReactNode;
    backgroundColor?: string;
    borderBottom?: string;
    borderRadius?: Sprinkles['borderRadius'];
    color?: string,
    background?: string,
    boxShadow?: string,
    border?: string,
    component?: any;
}

export const AtButton = ({
    onClick,
    backgroundColor,
    borderBottom,
    borderRadius,
    color,
    background,
    boxShadow,
    border,
    children,
    component,
    ...props }: Props) => {

    return (
        <>
            <button className={sprinkles({
                borderRadius: borderRadius,
            })}
                style={{
                    backgroundColor: backgroundColor,
                    boxShadow: boxShadow,
                    border: 'none',
                }}
            >
                <a href="" className={`${styles[`${component}`]}`}
                    style={{
                        color: color,
                    }}>{children}</a>
            </button>
        </>
    )
}
