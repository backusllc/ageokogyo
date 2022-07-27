import { defaultFullWidthHeroProps, FullWidthHeroSettings, } from './FullWidthHeroSettings';
import { defaultMovieHeroProps, MovieHeroSettings } from './MovieHeroSettings';
import { defaultSlideshowHeroProps, SlideshowHeroSettings, } from './SlideshowHeroSettings';

import { defaultOneColumnHeroProps, OneColumnHeroSettings, } from './OneColumnHeroSettings';
import { defaultTwoColumnHeroProps, TwoColumnHeroSettings, } from './TwoColumnHeroSettings';

export type TopOgType = 'fullWidth' | 'movie' | 'slideShow' | 'oneColumn' | 'twoColumn';

export type TopSettings =
  | FullWidthHeroSettings
  | MovieHeroSettings
  | SlideshowHeroSettings
  | OneColumnHeroSettings
  | TwoColumnHeroSettings;

export interface TopDesignSettings {
  selectedOgType: TopOgType;
  settings: {
    fullWidth: FullWidthHeroSettings;
    movie: MovieHeroSettings;
    slideShow: SlideshowHeroSettings;
    oneColumn: OneColumnHeroSettings;
    twoColumn: TwoColumnHeroSettings;
  };
}

export const defaultTopSettings: TopDesignSettings = {
  selectedOgType: 'oneColumn',
  settings: {
    fullWidth: { topType: 'fullWidth', props: defaultFullWidthHeroProps },
    movie: { topType: 'movie', props: defaultMovieHeroProps },
    slideShow: { topType: 'slideShow', props: defaultSlideshowHeroProps },
    oneColumn: { topType: 'oneColumn', props: defaultOneColumnHeroProps },
    twoColumn: { topType: 'twoColumn', props: defaultTwoColumnHeroProps },
  },
};
