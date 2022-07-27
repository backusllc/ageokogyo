import React, { useContext, useEffect } from 'react';
import dateFormat from "dateformat";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

import { ShopifyContext } from '../../context/shopifyContext';
import { darkMode, theme, whiteMode } from '../../styles/theme.css';
import { PageRuntimeSettings } from '../../types/PageSettings';
import { CommonRuntimeSettings } from '../../types/SiteSettings';
import { McTitle } from '../molecules';
import { useBlogSettings } from '../../hooks/useBlogSettings'

import { useCollectionProductsSettings } from '../../hooks/useCollectionProductsSettings'


import {
  OgNormalHeader,
  OgThreeLineTextSection,
  OgTileSection,
  OgTableLayoutSection,
  OgNavigation,
  OgFloatHeader,
  OgMegaHeader,
  OgFullWidthHero,
  OgTwoDevidedSection,
  OgBanner,
} from '../organisms';
import Pickup from '../../components/organisms/Shopify/Pickup';
import CategoryProducts from '../../components/organisms/Shopify/CategoryProducts';
import NewsLists from '../../components/organisms/Shopify/NewsLists';
import Header from './Header';
import Hero from './Hero';
import Content from './Content';
import Footer from './Footer';

import { wrapDiv } from './Page.css'

interface Props {
  commonSettings: CommonRuntimeSettings;
  pageSettings: PageRuntimeSettings;
}

export const Page = (props: Props) => {
  const collectionDisplayCount = 128;
  const { loading: articleLoading, data: articleLists } = useBlogSettings();
  const { loading: collectionProductLoading, data: collectionProductLists } = useCollectionProductsSettings(collectionDisplayCount);

  const [selectedTheme, setSelectedTheme] = React.useState<string>(whiteMode);
  const toggleTheme = () => {
    if (selectedTheme === whiteMode) {
      setSelectedTheme(darkMode);
    } else {
      setSelectedTheme(whiteMode);
    }
  };

  const { fetchAllProducts, fetchAllCollections, products, collections } = useContext(ShopifyContext)

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
  if (articleLoading) { return <div>Loading ...</div>; }

  return (
    <>
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
            <NewsLists />
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
