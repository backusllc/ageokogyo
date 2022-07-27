import React from 'react';
import { sprinkles } from '../../../../styles/sprinkles.css';
import { SlideshowHeroProps } from '../../../../types/TopSettings/SlideshowHeroSettings';
import { McSlider } from '../../../molecules';
import { div } from './index.css';

export const OgSlideshowHero = (props: SlideshowHeroProps) => {

  return (
    <section>
      <div className={`${div} ${sprinkles({
        maxWidth: props.maxWidth
      })}`}>
        {/* <McSlider dataSrc={slideShowHeroes} /> */}
      </div>
    </section >
  );
};
