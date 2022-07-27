import React, { useState } from 'react';
import Img from "gatsby-image"
import { Flex, Box } from 'rebass';
import styled from 'styled-components';
import { sprinkles } from '../../../styles/sprinkles.css';
import { divGalleryWrap, divGalleryItem, divSubGalleryWrap, divSubGalleryItem } from './Gallery.css'

const Gallery = ({ product }) => {
    const [currentImage, setCurrentImage] = useState(product.images[0]);

    const divGallery = sprinkles({
        width: {
            mobile: "100%",
            tablet: "50%",
            desktop: "50%",
        },
    });

    const divSubGalleryItemWidth = sprinkles({
        width: {
            mobile: "30%",
            tablet: "20%",
            desktop: "20%",
        },
    });

    return (
        <>
            <div className={`${divGallery} ${divGalleryWrap}`}>
                <div className={divGalleryItem}>
                    <img src={currentImage.src} alt="" />
                </div>

                <div className={divSubGalleryWrap}>
                    {product.images.map((x, i) => (
                        currentImage === product.images[i] ?
                            <div className={`${divSubGalleryItem} ${divSubGalleryItemWidth}`}>
                                <img src={x.src} alt="" />
                            </div>
                            :
                            <div onMouseOver={e => setCurrentImage(product.images[i])}
                                className={`${divSubGalleryItem} ${divSubGalleryItemWidth}`}
                            >
                                <img src={x.src} alt="" />
                            </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Gallery;
