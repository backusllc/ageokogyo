import { graphql, useStaticQuery } from 'gatsby';
import gql from 'graphql-tag';
import { useQuery } from "@apollo/react-hooks";

export const useCollectionProductsSettings = (count : number) => useQuery(query,{ variables: { count: count } });

const query = gql`
query CollectionProducts($count:Int!) {
  collections(first: 100) {
    edges {
      node {
        id
        title
        description
        image {
          transformedSrc
        }
        products(first: $count) {
          edges {
            node {
              id
              title
              handle
              tags
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
        }
      }
    }
  }
}
`
