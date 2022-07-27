import React from 'react'
import './index.css';
import type { FC } from 'react';

export const RootPrivider: FC = ({ children }) => {
    return <>
        <div className="root-wrap">{children}</div>
    </>
}
