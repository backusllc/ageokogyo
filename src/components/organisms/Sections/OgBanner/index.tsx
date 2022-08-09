import React from 'react';
import { Link } from 'gatsby';

import { BannerSectionProps } from '../../../../types/ContentSettings/BannerSettings';
import { sprinkles } from '../../../../styles/sprinkles.css';
import { div } from './index.css';

export const OgBanner = (props: BannerSectionProps) => {
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
              <img src={props.imageUrl} />
            </Link>
          ) : <img src={props.imageUrl} />
        }
      </div>
    </>
  );
};
