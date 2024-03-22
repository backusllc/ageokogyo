import React from "react";
import { GatsbyImage, getImage, IGatsbyImageData, ImageDataLike, Layout, StaticImage } from "gatsby-plugin-image";
import { img } from "./index.css";

type Props = {
  image: ImageDataLike;
  alt: string;
  className?: string;
  roundness?: string;
  square?: string;
};

export const AtImage = ({ ...props }: Props) => {
  return (
    <>
      <GatsbyImage
        image={getImage(props.image) as IGatsbyImageData}
        alt={props.alt}
        className={props.className || img}
      ></GatsbyImage>
    </>
  );
};
