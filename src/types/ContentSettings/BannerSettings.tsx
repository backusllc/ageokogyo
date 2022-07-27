import { Sprinkles } from '../../styles/sprinkles.css';

export interface BannerSectionSettings {
  contentType: 'banner';
  props: BannerSectionProps;
}

export interface BannerSectionProps {
  imageUrl: string;
  link: string;
  maxWidth: Sprinkles['maxWidth'];
  marginTop?: Sprinkles['marginTop'];
  marginRight?: Sprinkles['marginRight'];
  marginBottom?: Sprinkles['marginBottom'];
  marginLeft?: Sprinkles['marginLeft'];
}

export const defaultBannerSectionProps: BannerSectionProps = {
  imageUrl: "https://snidel.mash-cdn.com/Contents/ImagesPkg/snidel/top/SN220610coupon_pc.jpg",
  link: "https://snidel.com/Form/Product/ProductList.aspx?shop=0&cat=&cicon=&disp=col&pgi=SNDH220610coupon&bid=SND01&plan=SN220610coupon&advc=SN220610coupon",
  maxWidth: 'large',
  marginTop: '0',
  marginRight: 'auto',
  marginBottom: '0',
  marginLeft: 'auto',
};
