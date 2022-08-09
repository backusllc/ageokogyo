import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import {
    OgGatsbyBanner,
} from '../components/organisms';
import { useSinglePageSettings } from '../hooks/useSinglePageSettings'
import { McBreadcrumbs } from '../components/molecules';

export default function company() {
    const id = "Z2lkOi8vc2hvcGlmeS9QYWdlLzg2MjU4NTQ4Nzgw";
    const { loading: pageLoading, data: pageData } = useSinglePageSettings(id);
    const data = useStaticQuery(query);
    console.log(data.allFile.edges[0].node.childrenImageSharp[0]);

    if (pageLoading) return <></>;
    return (
        <>
            <OgGatsbyBanner image={data.allFile.edges[0].node.childrenImageSharp[0]} alt={data.allFile.edges[0].node.name} link="" maxWidth={"full"} marginBottom={"10"} />
            <McBreadcrumbs listItem='会社概要' listUrl='/company' />
            <div className="inner company">
                <div className='description'
                    dangerouslySetInnerHTML={{ __html: pageData.page.body }}
                />
            </div>
        </>
    )
}

const query = graphql`
query {
  allFile (filter: {name:{eq:"img_company"}}){
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
