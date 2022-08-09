import React from 'react';
import { Link } from 'gatsby';
import { div, a } from './LinkButton.css'

interface Props {
    link: string,
    text: string
}

const LinkButton = ({ link, text }: Props) => {

    return (
        <div className={div}>
            <Link to={`/${link}`}
                className={a}>
                {text}
            </Link>
        </div>
    );
};

export default LinkButton;
