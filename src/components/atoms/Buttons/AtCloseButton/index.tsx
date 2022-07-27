import React, { FC } from 'react'
import { MdClose } from 'react-icons/md'
import { button, icon } from './index.css'


interface Props {
    onClick: () => void;
}

export const AtCloseButton: FC<Props> = ({ onClick }) => {

    return (
        <button className={button}>
            <MdClose className={icon} onClick={onClick} />
        </button>
    )
}
