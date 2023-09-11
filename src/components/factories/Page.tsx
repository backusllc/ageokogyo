import React, { useContext, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useLocation } from "@reach/router"

import { ShopifyContext } from '../../context/shopifyContext';
import { theme, whiteMode } from '../../styles/theme.css';
import { PageRuntimeSettings } from '../../types/PageSettings';
import { CommonRuntimeSettings } from '../../types/SiteSettings';
import { McTitle } from '../molecules';

import { useCollectionProductsSettings } from '../../hooks/useCollectionProductsSettings'
import SEO from '../../utils/seo'

import {
  OgTileSection,
  OgBanner,
} from '../organisms';
import Pickup from '../../components/organisms/Shopify/Pickup';
import CategoryProducts from '../../components/organisms/Shopify/CategoryProducts';
import NewsLists from '../../components/organisms/Shopify/NewsLists';
import Hero from './Hero';

interface Props {
  commonSettings: CommonRuntimeSettings;
  pageSettings: PageRuntimeSettings;
}

export const Page = (props: Props) => {
  const collectionDisplayCount = 128;
  const { loading: collectionProductLoading, data: collectionProductLists } = useCollectionProductsSettings(collectionDisplayCount);
  const [selectedTheme, setSelectedTheme] = React.useState<string>(whiteMode);
  const { fetchAllProducts, fetchAllCollections, products, collections } = useContext(ShopifyContext)
  const data = useStaticQuery(query);
  const location = useLocation();

  const title = "上尾工業株式会社";
  const description = "上尾工業株式会社の公式通販サイト。シティサイクル · スポーツサイクル · CTB自転車 · 幼児用自転車 · 子供用自転車 · 三輪車 · 折りたたみ自転車 · きかんしゃトーマスなどの自転車製品を販売しています。"
  const image = `${location.origin}${data.allFile.edges[0].node.childrenImageSharp[0].gatsbyImageData.images.fallback.src}`;
  const isArticle = false;

  useEffect(() => {
    async function asyncFetchAllProducts() {
      await fetchAllProducts();
    };
    asyncFetchAllProducts();
    asyncFetchAllCollections();
  }, [])

  async function asyncFetchAllCollections() {
    try {
      await fetchAllCollections();
    }
    catch (error) {
    }
  };

  if (!products) return <div></div>;
  if (!collections) return <div></div>;
  if (collectionProductLoading) { return <div></div>; }


  return (
    <>
      <SEO title={title}
        description={description}
        image={image}
        article={isArticle}
      />
      <div className={selectedTheme}>
        <div className={theme}>
          <Hero settings={props.pageSettings.top} />
          <McTitle
            mobileFontSize1="16"
            desktopFontSize1="16"
            fontFamily1=""
            fontWeight1="medium"
            fontStyle1="normal"
            textDecoration1="none"
            justifyContent1="center"
            alignItems1="center"
            lineHeight1="1"
            letterSpacing1="4"
            backgroundColor1="#00762D"
            color1="#fff"
            marginTop1="0"
            marginRight1="0"
            marginBottom1="33"
            marginLeft1="0"
            paddingTop1="8"
            paddingRight1="70"
            paddingBottom1="8"
            paddingLeft1="70"
            borderRadiou1="5x"
            text1="商品カテゴリ"

            imageSrc='https://cdn.shopify.com/s/files/1/0582/1831/5820/files/img_product_category_title.png?v=1658589799'
            imageAlt='PRODUCT CATEGORY'
          />
          <OgTileSection dataSrc={collectionProductLists.collections.edges} />
          <McTitle
            mobileFontSize1="16"
            desktopFontSize1="16"
            fontFamily1=""
            fontWeight1="medium"
            fontStyle1="normal"
            textDecoration1="none"
            justifyContent1="center"
            alignItems1="center"
            lineHeight1="1"
            letterSpacing1="4"
            backgroundColor1="#00762D"
            color1="#fff"
            marginTop1="0"
            marginRight1="0"
            marginBottom1="33"
            marginLeft1="0"
            paddingTop1="8"
            paddingRight1="70"
            paddingBottom1="8"
            paddingLeft1="70"
            borderRadiou1="5x"
            text1="お知らせ"

            imageSrc='https://cdn.shopify.com/s/files/1/0582/1831/5820/files/img_news_title.png?v=1658589799'
            imageAlt='NEWS'
          />
          <div className="inner" style={{ margin: "3rem auto 5rem auto" }}>
            <NewsLists count={3} />
          </div>
          <div className="inner" style={{ margin: "3rem auto 5rem auto" }}>
            <OgBanner imageUrl='https://cdn.shopify.com/s/files/1/0582/1831/5820/files/img_recruit.png?v=1658468501'
              maxWidth='small'
              marginBottom='0'
              marginRight='auto'
              marginLeft='auto'
              link='recruit' />
          </div>
          <Pickup />
          <CategoryProducts isDiaplayViewAll={true} />
        </div>
      </div>
    </>
  );
};

const query = graphql`
query {
  allFile (filter: {name:{eq:"thomastricycle"}}){
    edges {
      node {
        name
        childrenImageSharp {
          gatsbyImageData(placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
}
`
