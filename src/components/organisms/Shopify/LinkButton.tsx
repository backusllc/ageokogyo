import React from 'react';
import { div, a } from './LinkButton.css'

interface Props {
    link: string,
    text: string
}

const LinkButton = ({ link, text }: Props) => {

    return (
        <div className={div}>
            <a href={link}
                className={a}>
                {text}
            </a>
        </div>
    );
};

export default LinkButton;
