import { graphql, useStaticQuery } from 'gatsby';
import gql from 'graphql-tag';
import { useQuery } from "@apollo/react-hooks";

export const useSinglePageSettings = (id: string) => useQuery(query, { variables: { id: id } });

const query = gql`
query ($id: ID) {
  page (id:$id){
    title
    body
    seo {
      description
      title
    }
  }
}
`
