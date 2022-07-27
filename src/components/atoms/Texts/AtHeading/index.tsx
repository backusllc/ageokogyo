import React from 'react';
import { Sprinkles, sprinkles } from '../../../../styles/sprinkles.css';

import { div } from './index.css'

interface Props {
    Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
    mobileFontSize: Sprinkles['fontSize'],
    desktopFontSize: Sprinkles['fontSize'],
    fontFamily: string;
    fontWeight: Sprinkles['fontWeight'];
    fontStyle: Sprinkles['fontStyle'];
    textDecoration: Sprinkles['textDecoration'];
    justifyContent: Sprinkles['justifyContent'];
    alignItems: Sprinkles['alignItems'];
    lineHeight: string;
    letterSpacing: string;
    backgroundColor: string;
    color: string;
    marginTop: Sprinkles["marginTop"],
    marginRight: Sprinkles["marginRight"],
    marginBottom: Sprinkles["marginBottom"],
    marginLeft: Sprinkles["marginLeft"],
    paddingTop: Sprinkles["paddingTop"],
    paddingRight: Sprinkles["paddingRight"],
    paddingBottom: Sprinkles["paddingBottom"],
    paddingLeft: Sprinkles["paddingLeft"],
    borderRadiou: Sprinkles["borderRadius"],
    children?: React.ReactNode,
}

export const AtHeading = ({
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
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    borderRadiou,
    children,
    ...props
}: Props) => {

    const alignDiv = sprinkles({ justifyContent: justifyContent, alignItems: alignItems })

    return (
        <div className={`${div} ${alignDiv}`}>
            <div className={sprinkles({
                marginTop: marginTop,
                marginRight: marginRight,
                marginBottom: marginBottom,
                marginLeft: marginLeft,
                paddingTop: paddingTop,
                paddingRight: paddingRight,
                paddingBottom: paddingBottom,
                paddingLeft: paddingLeft,
                borderRadius: borderRadiou,
            })} style={{
                backgroundColor: backgroundColor,
            }}>

                <Tag className={
                    sprinkles({
                        fontSize: {
                            mobile: mobileFontSize,
                            desktop: desktopFontSize,
                        },
                        letterSpacing: letterSpacing,
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
            </div>
        </div>
    )
};
