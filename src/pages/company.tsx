import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { useSinglePageSettings } from "../hooks/useSinglePageSettings";
import SEO from "../utils/seo";
import Company from "../components/pages/company";

const title = "会社概要 | 上尾工業株式会社";
const description =
  "会社概要ページ。シティサイクル · スポーツサイクル · CTB自転車 · 幼児用自転車 · 子供用自転車 · 三輪車 · 折りたたみ自転車 · きかんしゃトーマスなどの自転車製品を販売しています。";
const image = `https://ageokogyo.com/logo.jpg`;
const isArticle = false;

export default function company() {
  const id = "Z2lkOi8vc2hvcGlmeS9QYWdlLzg2MjU4NTQ4Nzgw";
  const { loading: pageLoading, data: pageData } = useSinglePageSettings(id);
  const data = useStaticQuery(query);

  if (pageLoading) return <></>;
  return (
    <>
      <SEO title={title} description={description} image={image} article={isArticle} />
      <Company data={data} pageData={pageData} />
    </>
  );
}

const query = graphql`
  query {
    allFile(filter: { name: { eq: "img_company" } }) {
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
