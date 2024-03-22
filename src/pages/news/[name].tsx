import React, { useContext, useEffect, useState } from "react";

import SEO from "../../utils/seo";
import { useSingleArticleSettings } from "../../hooks/useSingleArticleSettings";
import NewsDetail from "../../components/pages/newsDetail";
import { graphql, useStaticQuery } from "gatsby";

const extractTextForSEO = (htmlString: string) => {
  return htmlString.replace(/<[^>]*>?/gm, "");
};

const NewsPage = (props: any) => {
  const data = useStaticQuery(query);
  const name = props.params.name;
  const { loading: articleLoading, data: articleData } = useSingleArticleSettings(name);

  if (articleLoading) return <div></div>;

  const description =
    articleData &&
    articleData.blogs.edges[0].node.articleByHandle &&
    extractTextForSEO(articleData.blogs.edges[0].node.articleByHandle.contentHtml);

  return (
    <>
      <SEO title={articleData.blogs.edges[0].node.articleByHandle?.title} description={description} image={""} />
      <NewsDetail data={data} pageData={articleData} />
    </>
  );
};

export default NewsPage;

const query = graphql`
  query {
    allFile(filter: { name: { eq: "img_news" } }) {
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
