import React from 'react';
import { Sprinkles, sprinkles } from '../../../../styles/sprinkles.css';
import { div } from './index.css';

interface Props {
    Tag: 'p' | 'span' | 'div',
    mobileFontSize: Sprinkles['fontSize'],
    desktopFontSize: Sprinkles['fontSize'],
    fontFamily: string;
    fontWeight: Sprinkles['fontWeight'];
    fontStyle: Sprinkles['fontStyle'];
    textDecoration: Sprinkles['textDecoration'];
    justifyContent: Sprinkles['justifyContent'];
    alignItems: Sprinkles['alignItems'];
    lineHeight: Sprinkles['lineHeight'];
    letterSpacing: Sprinkles['letterSpacing'];
    backgroundColor: string;
    color: string;
    children?: React.ReactNode,
}

export const AtText = ({
    Tag = 'p',
    mobileFontSize,
    desktopFontSize,

    fontFamily,
    fontWeight,
    fontStyle,
    textDecoration,
    justifyContent,
    alignItems,
    lineHeight,
    letterSpacing,
    backgroundColor,
    color,
    children,
    ...props
}: Props) => {

    const alignDiv = sprinkles({ justifyContent: justifyContent, alignItems: alignItems })

    return (
        <div className={`${div} ${alignDiv}`}>
            <Tag className={
                sprinkles({
                    fontSize: {
                        mobile: mobileFontSize,
                        desktop: desktopFontSize,
                    },
                    fontWeight: fontWeight,
                    fontStyle: fontStyle,
                    textDecoration: textDecoration,
                })}
                style={{
                    fontFamily: fontFamily,
                    color: color,
                    backgroundColor: backgroundColor,
                    letterSpacing: letterSpacing,
                    lineHeight: lineHeight,
                }}
            >{children}</Tag>
        </div >
    )
};
