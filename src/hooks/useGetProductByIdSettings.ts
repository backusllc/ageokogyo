import { graphql, useStaticQuery } from 'gatsby';
import gql from 'graphql-tag';
import { useQuery } from "@apollo/react-hooks";

export const useGetProductByIdSettings = (id: any) => useQuery(query, { variables: { id: id } });

const query = gql`
query ($id: ID) {
  product(id: $id) {
    id
    title
    variants(first: 100) {
      edges {
        node {
          title
          image {
            transformedSrc
            src
          }
          metafield(namespace: "custom", key: "color") {
            value
          }
        }
      }
    }
  }
}
`
