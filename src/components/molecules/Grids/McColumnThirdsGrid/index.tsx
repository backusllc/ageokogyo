import React from 'react';
import { GatsbyImage, getImage, Layout, StaticImage } from 'gatsby-plugin-image';

import { AtImage } from '../../../atoms';
import { ul } from './index.css';


interface Props {
    dataSrc: any,
}

export const McColumnThirdsGrid = ({ dataSrc }: Props) => {
    return (
        <>
            <ul className={ul}>
                {dataSrc.map((item, index) => {
                    const { id } = item
                    const { name, image } = item.node

                    return (
                        <li key={id} ><AtImage
                            image={getImage(image)}
                            alt={name}
                            roundness="circle"
                            square="3x"
                        ></AtImage>
                        </li>
                    )
                })}
            </ul>
        </>
    );
};
