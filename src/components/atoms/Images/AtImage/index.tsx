import React from 'react';
import { GatsbyImage, getImage, IGatsbyImageData, ImageDataLike, Layout, StaticImage } from 'gatsby-plugin-image';
// import { ImageRecipe, ImageVariants } from "./index.css";

import { sprinkles } from '../../../../styles/sprinkles.css'
import { img } from './index.css';

type Props = {
    image: ImageDataLike,
    alt: string,
    className?: string,
    roundness?: string,
    square?: string,
};

export const AtImage = ({ ...props }: Props) => {
    return (
        <>
            <GatsbyImage
                image={getImage(props.image) as IGatsbyImageData}
                alt={props.alt}
                className={props.className || `${img} ${sprinkles({
                    borderRadius: props.roundness,
                    square: props.square,
                })}`}
            ></GatsbyImage>
        </>
    );
};
