import React from 'react';
import { Link } from 'gatsby';

import { GatsbyBannerSectionProps } from '../../../../types/ContentSettings/GatsbyBannerSettings';
import { sprinkles } from '../../../../styles/sprinkles.css';
import { AtImage } from '../../../../components/atoms';

export const OgGatsbyBanner = (props: GatsbyBannerSectionProps) => {
  const wrapperDiv = sprinkles({
    maxWidth: props.maxWidth,
    marginBottom: props.marginBottom,
    marginRight: props.marginRight,
    marginLeft: props.marginLeft,
  });

  return (
    <>
      <div className={`${wrapperDiv}`}>
        {
          props.link ? (
            <Link to={props.link}>
              <AtImage
                image={props.image}
                alt={props.alt}
              />
            </Link>
          ) : <AtImage
            image={props.image}
            alt={props.alt}
          />
        }
      </div>
    </>
  );
};
