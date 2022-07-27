import React, { useState, useContext, FC } from 'react';

import { McMenu } from '../../../molecules'

import { nav, navCenter, navHeader } from './index.css'

interface Props {
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
    maxWidth?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
}

export const OgNormalFooter = ({ justifyContent = "center", maxWidth = "xlarge" }: Props) => {

    return <>
        <footer >
            <div style={{ position: 'absolute', bottom: '0' }}>
                <McMenu />
            </div>
        </footer >
    </>
};
