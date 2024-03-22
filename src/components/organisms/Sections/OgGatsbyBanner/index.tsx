import React from "react";
import { Link } from "gatsby";

import { GatsbyBannerSectionProps } from "../../../../types/ContentSettings/GatsbyBannerSettings";
import { AtImage } from "../../../../components/atoms";
import { bannerContainer, titleContainer } from "./index.css";
import { MainTitle } from "../../../../components/molecules/MainTitle";

export const OgGatsbyBanner = (props: GatsbyBannerSectionProps) => {
  return (
    <>
      {props.link ? (
        <Link to={props.link}>
          <AtImage image={props.image} alt={props.alt} />
        </Link>
      ) : (
        <div className={bannerContainer}>
          <AtImage image={props.image} alt={props.alt} />
          <div className={titleContainer}>
            <MainTitle titleEn={props.titleEn} titleJa={props.titleJa} />
          </div>
        </div>
      )}
    </>
  );
};
