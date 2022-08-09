import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import {
  OgGatsbyBanner,
} from '../components/organisms';
import { useSinglePageSettings } from '../hooks/useSinglePageSettings'
import { McBreadcrumbs } from '../components/molecules';

export default function faq() {
  const id = "Z2lkOi8vc2hvcGlmeS9QYWdlLzg2Mjk1NDQ1NTQ4";
  const { loading: pageLoading, data: pageData } = useSinglePageSettings(id);
  const data = useStaticQuery(query);

  if (pageLoading) return <></>;

  return (
    <div className="page">
      <OgGatsbyBanner image={data.allFile.edges[0].node.childrenImageSharp[0]} alt={data.allFile.edges[0].node.name} link="" maxWidth={"full"} marginBottom={"10"} />
      <McBreadcrumbs listItem='よくある質問' listUrl='/contact' />
      <div className="inner">
        <div className='faq'
          dangerouslySetInnerHTML={{ __html: pageData.page.body }}
        />
      </div>
    </div>
  )
}

const query = graphql`
query {
  allFile (filter: {name:{eq:"img_faq"}}){
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
