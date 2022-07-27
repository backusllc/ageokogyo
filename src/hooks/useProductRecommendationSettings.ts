import { graphql, useStaticQuery } from 'gatsby';
import gql from 'graphql-tag';
import { useQuery } from "@apollo/react-hooks";

export const useProductRecommendationSettings = (id: any) => useQuery(query, { variables: { id: id } });

const query = gql`
query ($id: ID!) {
  productRecommendations(productId: $id) {
    id
    title
    description
    priceRange {
      minVariantPrice {
        amount
      }
    }
    images(first: 1) {
      edges {
        node {
          transformedSrc
        }
      }
    }
  }
}
`
