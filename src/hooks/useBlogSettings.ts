import { graphql, useStaticQuery } from 'gatsby';
import gql from 'graphql-tag';
import { useQuery } from "@apollo/react-hooks";

export const useBlogSettings = (count: number) => useQuery(query, { variables: { count: count } });

const query = gql`
query($count:Int){
  articles(first: $count, sortKey: UPDATED_AT, reverse: true) {
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
