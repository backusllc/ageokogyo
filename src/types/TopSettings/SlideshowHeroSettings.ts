import { Sprinkles } from "../../styles/sprinkles.css";

export interface SlideshowHeroSettings {
  topType: 'slideShow';
  props: SlideshowHeroProps;
}

export interface SlideshowHeroProps {
  square?: any;
  roundness?: any;
  maxWidth: Sprinkles['maxWidth'];
}

export const defaultSlideshowHeroProps: SlideshowHeroProps = {
  maxWidth: "full",
};
