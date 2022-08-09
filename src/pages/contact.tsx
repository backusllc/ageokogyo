import React from 'react';
import {
  OgGatsbyBanner,
} from '../components/organisms';
import Form from '../components/organisms/Shopify/Form';
import { graphql, useStaticQuery } from 'gatsby';
import { McBreadcrumbs } from '../components/molecules';

export default function contact() {
  const data = useStaticQuery(query);

  return (
    <div className="page">
      <OgGatsbyBanner image={data.allFile.edges[0].node.childrenImageSharp[0]} alt={data.allFile.edges[0].node.name} link="" maxWidth={"full"} marginBottom={"10"} />
      <McBreadcrumbs listItem='お問合せ' listUrl='/contact' />
      <Form />
    </div>
  )
}

const query = graphql`
query {
  allFile (filter: {name:{eq:"img_contact"}}){
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
`
