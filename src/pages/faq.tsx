import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { useSinglePageSettings } from "../hooks/useSinglePageSettings";
import SEO from "../utils/seo";
import Faq from "../components/pages/faq";

const title = "よくある質問 | 上尾工業株式会社";
const description =
  "よくある質問ページ。シティサイクル · スポーツサイクル · CTB自転車 · 幼児用自転車 · 子供用自転車 · 三輪車 · 折りたたみ自転車 · きかんしゃトーマスなどの自転車製品を販売しています。";
const image = `https://cdn.shopify.com/s/files/1/0582/1831/5820/files/logo_256x256.gif?v=1658329876`;
const isArticle = false;

export default function faq() {
  const id = "Z2lkOi8vc2hvcGlmeS9QYWdlLzg2Mjk1NDQ1NTQ4";
  const { loading: pageLoading, data: pageData } = useSinglePageSettings(id);
  const data = useStaticQuery(query);

  if (pageLoading) return <></>;

  return (
    <>
      <SEO title={title} description={description} image={image} article={isArticle} />
      <Faq data={data} pageData={pageData} />
    </>
  );
}

const query = graphql`
  query {
    allFile(filter: { name: { eq: "img_faq" } }) {
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
