import { Sprinkles } from '../../styles/sprinkles.css';

export interface TwoColumnHeroSettings {
  topType: 'twoColumn';
  props: TwoColumnHeroProps;
}

export interface TwoColumnHeroProps {
  imageUrl: string;
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

export const defaultTwoColumnHeroProps: TwoColumnHeroProps = {
  imageUrl: "https://magic-pod.com/themes/magic-pod/img/home/main_visual.png",
  aspectRatio: '16:9',
  text1: "あなたらしさ、もっと自由に",

  //スタイル
  fontFamily1: '',
  fontWeight1: 'medium',
  fontStyle1: 'italic',
  textDecoration1: 'line-through',
  justifyContent1: 'flex-end',
  alignItems1: 'flex-end',
  lineHeight1: 'xl',
  letterSpacing1: 'xl',
  backgroundColor1: 'transparent',
  color1: '#333',

  top: 50,
  left: 25,
  backgroundColor: 'transparent',
  mobileTextAlign: 'center',
  desktopTextAlign: 'left',
  mobileFontSize1: '16',
  desktopFontSize1: '16',

  text2: "Google Pixel 6a が仲間入り。",
  mobileFontSize2: '16',
  desktopFontSize2: '16',
  color2: '#ccc',
  fontWeight2: 'xxl',
  text3: "驚きの速さとセキュリティを実現した、お手頃価格の Google Pixel が近日発売します",
  mobileFontSize3: '16',
  desktopFontSize3: '16',
  color3: '#ccc',
  // lineHeight3,
  // letterSpacing3,
  // fontWeight3,
  buttonColor: '#fff',
  buttonBackgroundColor: '#636060',
  buttonBoxshadow: '0px 0px 0px rgb(0 0 0 / 0%)',
  buttonBorderRadius: '1x',
};
