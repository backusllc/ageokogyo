import React, { useContext, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { ShopifyContext } from "./../context/shopifyContext";
import { OgGatsbyBanner, OgTileSection } from "../components/organisms";
import CategoryProducts from "../components/organisms/Shopify/CategoryProducts";

import { useCollectionProductsSettings } from "../hooks/useCollectionProductsSettings";
import { McBreadcrumbs } from "../components/molecules";
import SEO from "../utils/seo";

const title = "オンラインストア | 上尾工業株式会社";
const description =
  "商品一覧ページ。シティサイクル · スポーツサイクル · CTB自転車 · 幼児用自転車 · 子供用自転車 · 三輪車 · 折りたたみ自転車 · きかんしゃトーマスなどの自転車製品を販売しています。";
const image = `https://cdn.shopify.com/s/files/1/0582/1831/5820/files/logo_256x256.gif?v=1658329876`;
const isArticle = false;

export default function product_category() {
  const { collections, fetchAllCollections } = useContext(ShopifyContext);
  const collectionDisplayCount = 9;
  const { loading: collectionProductLoading, data: collectionProductLists } =
    useCollectionProductsSettings(collectionDisplayCount);
  const data = useStaticQuery(query);

  useEffect(() => {
    asyncFetchAllCollections();
  }, [collectionProductLoading]);

  async function asyncFetchAllCollections() {
    try {
      await fetchAllCollections();
    } catch (error) {}
  }

  return collections && !collectionProductLoading ? (
    <>
      <SEO title={title} description={description} image={image} article={isArticle} />
      <OgGatsbyBanner
        image={data.allFile.edges[0].node.childrenImageSharp[0]}
        alt={data.allFile.edges[0].node.name}
        titleJa={"オンラインストア"}
        titleEn={"ONLINE STORE"}
        maxWidth="full"
        link=""
        marginBottom={"10"}
      />
      <div style={{ background: "#F7F6EF" }}>
        <McBreadcrumbs
          listItems={[
            { name: "HOME", url: "/" },
            { name: "ONLINE STORE", url: "/product_category" },
          ]}
        />
        <OgTileSection dataSrc={collectionProductLists.collections.edges} isSubMenu={true} />
      </div>

      <CategoryProducts displayCount={100} isDiaplayViewAll={false} />
    </>
  ) : null;
}

const query = graphql`
  query {
    allFile(filter: { name: { eq: "online_header" } }) {
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
`;
