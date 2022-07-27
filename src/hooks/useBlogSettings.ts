import { graphql, useStaticQuery } from 'gatsby';
import gql from 'graphql-tag';
import { useQuery } from "@apollo/react-hooks";

export const useBlogSettings = () => useQuery(query);

const query = gql`
query query {
  articles(first: 20) {
    edges {
      node {
        id
        handle
        title
        publishedAt
        blog {
          title
        }
      }
    }
  }
}
`
