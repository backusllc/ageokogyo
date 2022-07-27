import React, { useState, useContext, FC } from 'react';

import { AtLogo, AtHumbergerButton } from '../../../atoms'
import { McMenu, McBigMenu } from '../../../molecules'
import { GatsbyContext } from "../../../../context/context"
import { header, headerBar } from './index.css'

export const OgFloatHeader: FC = () => {
    const { isSidebarOpen, showSidebar } = useContext(GatsbyContext)

    return <>
        <header className={header}>
            <div className={headerBar}>
                <AtLogo />
                <div >
                    <McMenu />
                </div>
                {!isSidebarOpen && <AtHumbergerButton onClick={showSidebar} />}
            </div>
        </header>
    </>
};
