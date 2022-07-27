import { Sprinkles } from '../../styles/sprinkles.css';

export interface OneColumnHeroSettings {
  topType: 'oneColumn';
  props: OneColumnHeroProps;
}

export interface OneColumnHeroProps {
  imageUrl: string;
  imageBackgroundColor: string;
  maxWidth: Sprinkles['maxWidth'];
  //トップ画像の配置
  height?: Sprinkles['height'];
  aspectRatio: Sprinkles['paddingTop'];
  //画像内文言用
  top: number;
  left: number;
  backgroundColor: string;
  borderRadius?: Sprinkles['borderRadius'];
  mobileTextAlign?: Sprinkles['textAlign'];
  desktopTextAlign?: Sprinkles['textAlign'];

  //画像内文言(1行目)
  text1: string;
  mobileFontSize1?: Sprinkles['fontSize'];
  desktopFontSize1?: Sprinkles['fontSize'];
  fontFamily1: string;
  fontWeight1: Sprinkles['fontWeight'];
  fontStyle1: Sprinkles['fontStyle'];
  textDecoration1: Sprinkles['textDecoration'];
  justifyContent1: Sprinkles['justifyContent'];
  alignItems1: Sprinkles['alignItems'];
  lineHeight1: string;
  letterSpacing1: string;
  backgroundColor1: string;
  color1: string;

  //画像内文言(2行目)
  text2: string;
  mobileFontSize2?: Sprinkles['fontSize'];
  desktopFontSize2?: Sprinkles['fontSize'];
  fontFamily2: string;
  fontWeight2: Sprinkles['fontWeight'];
  fontStyle2: Sprinkles['fontStyle'];
  textDecoration2: Sprinkles['textDecoration'];
  justifyContent2: Sprinkles['justifyContent'];
  alignItems2: Sprinkles['alignItems'];
  lineHeight2: string;
  letterSpacing2: string;
  backgroundColor2: string;
  color2: string;

  //ボタン
  buttonColor: string;
  buttonBackgroundColor: string;
  buttonBoxshadow: string;
  // border: Sprinkles['borderRadius'];
  buttonBorderRadius: Sprinkles['borderRadius'];
}

export const defaultOneColumnHeroProps: OneColumnHeroProps = {
  imageUrl: "http://www.ageokogyo.com/wp/wp-content/themes/ageo/img/top/thomastricycle.jpg",
  imageBackgroundColor: '',
  maxWidth: 'full',
  text1: "",

  //スタイル
  fontFamily1: '',
  fontWeight1: 'xxl',
  fontStyle1: 'normal',
  textDecoration1: 'none',
  justifyContent1: 'center',
  alignItems1: 'center',
  lineHeight1: 'xl',
  letterSpacing1: 'xl',
  backgroundColor1: 'transparent',
  color1: '#333',

  backgroundColor: 'transparent',
  mobileTextAlign: 'center',
  desktopTextAlign: 'left',
  mobileFontSize1: '16',
  desktopFontSize1: '16',

  text2: "",
  mobileFontSize2: '16',
  desktopFontSize2: '16',
  color2: '#333',
  fontWeight2: 'medium',
  buttonColor: '#fff',
  buttonBackgroundColor: '#636060',
  buttonBoxshadow: '0px 0px 0px rgb(0 0 0 / 0%)',
  buttonBorderRadius: '1x',
};
