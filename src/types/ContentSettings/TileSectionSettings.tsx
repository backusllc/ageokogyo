import { Sprinkles } from '../../styles/sprinkles.css';

export interface TileSectionSettings {
  contentType: 'tile';
  props: TileSectionProps;
}

export interface TileSectionProps {
  dataSrc : any,
}

export const defaultTileSectionProps: TileSectionProps = {

};
