import React, { useContext, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { ShopifyContext } from './../context/shopifyContext';
import {
    OgGatsbyBanner,
    OgTileSection,
} from '../components/organisms';
import { McTitle } from '../components/molecules';
import CategoryProducts from '../components/organisms/Shopify/CategoryProducts';
import { useCollectionProductsSettings } from '../hooks/useCollectionProductsSettings';
import { McBreadcrumbs } from '../components/molecules';

export default function product_category() {
    const { collections, fetchAllCollections } = useContext(ShopifyContext)
    const collectionDisplayCount = 9;
    const { loading: collectionProductLoading, data: collectionProductLists } = useCollectionProductsSettings(collectionDisplayCount);
    const data = useStaticQuery(query);

    useEffect(() => {
        asyncFetchAllCollections();
    }, [])

    async function asyncFetchAllCollections() {
        try {
            await fetchAllCollections();
        }
        catch (error) {
        }
    };

    if (!collections) return <div></div>;
    if (collectionProductLoading) return <div></div>;
    return (
        <>
            <OgGatsbyBanner image={data.allFile.edges[0].node.childrenImageSharp[0]} alt={data.allFile.edges[0].node.name} maxWidth="full" link="" marginBottom={"10"} />
            <McBreadcrumbs listItem='オンラインストア' listUrl='/product_category' />
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

            <CategoryProducts displayCount={100} isDiaplayViewAll={false} />
        </>
    )
}

const query = graphql`
query {
  allFile (filter: {name:{eq:"online_header"}}){
    edges {
      node {
        name
        childrenImageSharp {
            gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
}
`
