import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import {
    OgGatsbyBanner,
} from '../components/organisms';
import NewsLists from '../components/organisms/Shopify/NewsLists';
import { McBreadcrumbs } from '../components/molecules';

export default function informatino() {
    const data = useStaticQuery(query);

    return (
        <>
            <OgGatsbyBanner image={data.allFile.edges[0].node.childrenImageSharp[0]} alt={data.allFile.edges[0].node.name} link="" maxWidth={"full"} marginBottom={"10"} />
            <McBreadcrumbs listItem='お知らせ' listUrl='/news' />
            <div className="inner">
                <NewsLists count={100} />
            </div>
        </>
    )
}

const query = graphql`
query {
  allFile (filter: {name:{eq:"img_news"}}){
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
