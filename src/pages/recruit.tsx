import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import { useSinglePageSettings } from "../hooks/useSinglePageSettings";
import SEO from "../utils/seo";
import Recruit from "../components/pages/recruit";

const title = "採用情報 | 上尾工業株式会社";
const description =
  "上尾工業株式会社の採用情報ページ。シティサイクル · スポーツサイクル · CTB自転車 · 幼児用自転車 · 子供用自転車 · 三輪車 · 折りたたみ自転車 · きかんしゃトーマスなどの自転車製品を販売しています。";
const image = `https://cdn.shopify.com/s/files/1/0582/1831/5820/files/logo_256x256.gif?v=1658329876`;
const isArticle = false;

export default function recruit() {
  const id = "Z2lkOi8vc2hvcGlmeS9QYWdlLzg2MDA0MjM2MzMy";
  const { loading: pageLoading, data: pageData } = useSinglePageSettings(id);
  const data = useStaticQuery(query);

  if (pageLoading) return <></>;

  return (
    <>
      <SEO title={title} description={description} image={image} article={isArticle} />
      <Recruit data={data} pageData={pageData} />
    </>
  );
}

const query = graphql`
  query {
    allFile(filter: { name: { eq: "img_recruit_header" } }) {
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
