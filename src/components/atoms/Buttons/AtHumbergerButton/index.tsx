import React, { FC } from 'react'
import { GoThreeBars } from 'react-icons/go'
import { toggleBtn, svg } from './index.css'


interface Props {
    onClick: () => void;
}

export const AtHumbergerButton = (props: Props) => {

    return (
        <button className={toggleBtn} onClick={props.onClick}>
            <GoThreeBars className={svg} />
        </button>
    )
}
