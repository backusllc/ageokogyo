import React from 'react';
import { TopSettings } from '../../types/TopSettings';
import { OgSlideshowHero, OgFullWidthHero, OgMovieHero, OgOneColumnHero, OgTwoColumnHero } from '../organisms';

interface Props {
  settings: TopSettings;
}

const Hero = (props: Props) => {
  const heroType = props.settings.topType;

  switch (heroType) {
    case 'fullWidth':
      return <OgFullWidthHero {...props.settings.props} />;
    case 'movie':
      return <OgMovieHero {...props.settings.props} />;
    case 'slideShow':
      return <OgSlideshowHero {...props.settings.props} />;
    case 'oneColumn':
      return <OgOneColumnHero {...props.settings.props} />;
    case 'twoColumn':
      return <OgTwoColumnHero {...props.settings.props} />;
    default:
      throw new Error(`${heroType} の HeroFactory が未実装です。`);
  }
};

export default React.memo(Hero, (x, y) => x.settings === y.settings);
