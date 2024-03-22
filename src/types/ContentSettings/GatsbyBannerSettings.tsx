import { ImageDataLike } from "gatsby-plugin-image";
import { Sprinkles } from "../../styles/sprinkles.css";

export interface GatsbyBannerSettings {
  contentType: "gatsbyBanner";
  props: GatsbyBannerSectionProps;
}

export interface GatsbyBannerSectionProps {
  image: ImageDataLike;
  alt: string;
  link: string;
  titleEn?: string;
  titleJa?: string;
  maxWidth: Sprinkles["maxWidth"];
  marginTop?: Sprinkles["marginTop"];
  marginRight?: Sprinkles["marginRight"];
  marginBottom?: Sprinkles["marginBottom"];
  marginLeft?: Sprinkles["marginLeft"];
}

export const defaultGatsbyBannerSectionProps: GatsbyBannerSectionProps = {
  alt: "",
  link: "https://snidel.com/Form/Product/ProductList.aspx?shop=0&cat=&cicon=&disp=col&pgi=SNDH220610coupon&bid=SND01&plan=SN220610coupon&advc=SN220610coupon",
  maxWidth: "large",
  marginTop: "0",
  marginRight: "auto",
  marginBottom: "0",
  marginLeft: "auto",
};
