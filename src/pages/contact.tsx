import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import SEO from "../utils/seo";
import Contact from "../components/pages/contact";

const title = "お問合せ | 上尾工業株式会社";
const description =
  "お問合せページ。シティサイクル · スポーツサイクル · CTB自転車 · 幼児用自転車 · 子供用自転車 · 三輪車 · 折りたたみ自転車 · きかんしゃトーマスなどの自転車製品を販売しています。";
const image = `https://ageokogyo.com/logo.jpg`;
const isArticle = false;

export default function contact() {
  const data = useStaticQuery(query);

  return (
    <>
      <SEO title={title} description={description} image={image} article={isArticle} />
      <Contact data={data} />
    </>
  );
}

const query = graphql`
  query {
    allFile(filter: { name: { eq: "img_contact" } }) {
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
