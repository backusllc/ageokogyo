import React, { useContext } from 'react';
import { GatsbyContext } from "../../../../context/context";
import { Sprinkles, sprinkles } from '../../../../styles/sprinkles.css';
import { AtHumbergerButton } from '../../../atoms';
import { McMenu } from '../../../molecules';
import { div, nav, navCenter, navHeader } from './index.css';

import { NormalHeaderProps } from '../../../../types/HeaderSettings/NormalHeaderSettings';

export const OgNormalHeader = (props: NormalHeaderProps) => {
    const { isSidebarOpen, showSidebar } = useContext(GatsbyContext)

    const wrap = sprinkles({
        maxWidth: props.maxWidth,
        paddingTop: { mobile: props.mobileWrapPaddingTop, desktop: props.desktopWrapPaddingTop },
        paddingRight: { mobile: props.mobileWrapPaddingRight, desktop: props.desktopWrapPaddingRight },
        paddingBottom: { mobile: props.mobileWrapPaddingBottom, desktop: props.desktopWrapPaddingBottom },
        paddingLeft: { mobile: props.mobileWrapPaddingLeft, desktop: props.desktopWrapPaddingLeft },
        marginTop: { mobile: props.mobileWrapMarginTop, desktop: props.desktopWrapMarginTop },
        marginRight: { mobile: props.mobileWrapMarginRight, desktop: props.desktopWrapMarginRight },
        marginBottom: { mobile: props.mobileWrapMarginBottom, desktop: props.desktopWrapMarginBottom },
        marginLeft: { mobile: props.mobileWrapMarginLeft, desktop: props.desktopWrapMarginLeft }
    });

    const nav = sprinkles({
        justifyContent: { mobile: props.mobileWrapJusifyContent, desktop: props.desktopWrapJustifyContent },
    })

    const image = sprinkles({
        width: props.imageWidth,
        height: { mobile: props.mobileImageHeight, desktop: props.desktopImageHeight },
        paddingTop: { mobile: props.mobileImagePaddingTop, desktop: props.desktopImagePaddingTop },
        paddingRight: { mobile: props.mobileImagePaddingRight, desktop: props.desktopImagePaddingRight },
        paddingBottom: { mobile: props.mobileImagePaddingBottom, desktop: props.desktopImagePaddingBottom },
        paddingLeft: { mobile: props.mobileImagePaddingLeft, desktop: props.desktopImagePaddingLeft },
        marginTop: { mobile: props.mobileImageMarginTop, desktop: props.desktopImageMarginTop },
        marginRight: { mobile: props.mobileImageMarginRight, desktop: props.desktopImageMarginRight },
        marginBottom: { mobile: props.mobileImageMarginBottom, desktop: props.desktopImageMarginBottom },
        marginLeft: { mobile: props.mobileImageMarginLeft, desktop: props.desktopImageMarginLeft }
    });

    return <>
        <header >
            <div className={`${div} ${wrap}`}>
                {/* <div className={nav} > */}
                <div className={`${navCenter} ${nav}`}>
                    <h1 style={{ margin: 0, padding: 0 }}>
                        <a href="#"><img className={image} src={props.imageUrl} alt="" /></a>
                    </h1>
                    {!isSidebarOpen && <AtHumbergerButton onClick={showSidebar} />}
                    <McMenu />
                </div>
                {/* </div> */}
            </div>
        </header >
    </>
};
