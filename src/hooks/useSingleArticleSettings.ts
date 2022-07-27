import { graphql, useStaticQuery } from 'gatsby';
import gql from 'graphql-tag';
import { useQuery } from "@apollo/react-hooks";

export const useSingleArticleSettings = (handle: string) => useQuery(query, { variables: { handle: handle } });

const query = gql`
query ($handle: String!) {
  blogs(first: 100) {
    edges {
      node {
        title
        articleByHandle(handle: $handle) {
          title
          contentHtml
          publishedAt
        }
      }
    }
  }
}

`
