import { TopOgType } from './TopSettings/index';
import { HeaderOgType } from './HeaderSettings/index';
import { ContentOgType } from './ContentSettings/index';
import { FooterOgType } from './FooterSettings/index';

export type ActiveOrganism =
  | ActiveHeader
  | ActiveTop
  | ActiveContent
  | ActiveFooter;

export interface ActiveHeader {
  type: 'header';
  organismType: HeaderOgType;
}

export interface ActiveTop {
  type: 'top';
  organismType: TopOgType;
}

export interface ActiveContent {
  type: 'content';
  organismType: ContentOgType;
}

export interface ActiveFooter {
  type: 'footer';
  organismType: FooterOgType;
}
