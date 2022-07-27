import { Sprinkles } from "styles/sprinkles.css";

export interface NormalHeaderSettings {
  headerType: 'normalHeader';
  props: NormalHeaderProps;
}

export interface NormalHeaderProps {
  imageUrl: string;
  imageWidth: Sprinkles['width'];
  maxWidth?: Sprinkles['maxWidth'];
  mobileWrapJusifyContent: Sprinkles['justifyContent'];
  desktopWrapJustifyContent: Sprinkles['justifyContent'];

  mobileWrapPaddingTop: Sprinkles['paddingTop'];
  mobileWrapPaddingRight: Sprinkles['paddingRight'];
  mobileWrapPaddingBottom: Sprinkles['paddingBottom'];
  mobileWrapPaddingLeft: Sprinkles['paddingLeft'];
  desktopWrapPaddingTop: Sprinkles['paddingTop'];
  desktopWrapPaddingRight: Sprinkles['paddingRight'];
  desktopWrapPaddingBottom: Sprinkles['paddingBottom'];
  desktopWrapPaddingLeft: Sprinkles['paddingLeft'];
  mobileWrapMarginTop: Sprinkles['marginTop'];
  mobileWrapMarginRight: Sprinkles['marginRight'];
  mobileWrapMarginBottom: Sprinkles['marginBottom'];
  mobileWrapMarginLeft: Sprinkles['marginLeft'];
  desktopWrapMarginTop: Sprinkles['marginTop'];
  desktopWrapMarginRight: Sprinkles['marginRight'];
  desktopWrapMarginBottom: Sprinkles['marginBottom'];
  desktopWrapMarginLeft: Sprinkles['marginLeft'];
  mobileImageHeight: Sprinkles['height'];
  desktopImageHeight: Sprinkles['height'];
  mobileImagePaddingTop: Sprinkles['paddingTop'];
  mobileImagePaddingRight: Sprinkles['paddingRight'];
  mobileImagePaddingBottom: Sprinkles['paddingBottom'];
  mobileImagePaddingLeft: Sprinkles['paddingLeft'];
  desktopImagePaddingTop: Sprinkles['paddingTop'];
  desktopImagePaddingRight: Sprinkles['paddingRight'];
  desktopImagePaddingBottom: Sprinkles['paddingBottom'];
  desktopImagePaddingLeft: Sprinkles['paddingLeft'];
  mobileImageMarginTop: Sprinkles['marginTop'];
  mobileImageMarginRight: Sprinkles['marginRight'];
  mobileImageMarginBottom: Sprinkles['marginBottom'];
  mobileImageMarginLeft: Sprinkles['marginLeft'];
  desktopImageMarginTop: Sprinkles['marginTop'];
  desktopImageMarginRight: Sprinkles['marginRight'];
  desktopImageMarginBottom: Sprinkles['marginBottom'];
  desktopImageMarginLeft: Sprinkles['marginLeft'];
}

export const defaultNormalHeaderProps: NormalHeaderProps = {
  imageUrl: 'https://magic-pod.com/themes/magic-pod/img/logo.svg',
  imageWidth: '220',
  maxWidth: 'large',
  mobileWrapJusifyContent: 'space-between',
  desktopWrapJustifyContent: 'space-between',
  mobileWrapPaddingTop: '0',
  mobileWrapPaddingRight: '0',
  mobileWrapPaddingBottom: '0',
  mobileWrapPaddingLeft: '0',
  desktopWrapPaddingTop: '0',
  desktopWrapPaddingRight: '0',
  desktopWrapPaddingBottom: '0',
  desktopWrapPaddingLeft: '0',
  mobileWrapMarginTop: '0',
  mobileWrapMarginRight: '0',
  mobileWrapMarginBottom: '0',
  mobileWrapMarginLeft: '0',
  desktopWrapMarginTop: '0',
  desktopWrapMarginRight: '0',
  desktopWrapMarginBottom: '0',
  desktopWrapMarginLeft: '0',
  mobileImageHeight: '40',
  desktopImageHeight: '40',
  mobileImagePaddingTop: '0',
  mobileImagePaddingRight: '0',
  mobileImagePaddingBottom: '0',
  mobileImagePaddingLeft: '0',
  desktopImagePaddingTop: '0',
  desktopImagePaddingRight: '0',
  desktopImagePaddingBottom: '0',
  desktopImagePaddingLeft: '0',
  mobileImageMarginTop: '0',
  mobileImageMarginRight: '0',
  mobileImageMarginBottom: '0',
  mobileImageMarginLeft: '0',
  desktopImageMarginTop: '0',
  desktopImageMarginRight: '0',
  desktopImageMarginBottom: '0',
  desktopImageMarginLeft: '0',
};
