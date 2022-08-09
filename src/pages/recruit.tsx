import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import {
    OgGatsbyBanner,
} from '../components/organisms';
import LinkButton from '../components/organisms/Shopify/LinkButton';
import { useSinglePageSettings } from '../hooks/useSinglePageSettings'
import { McBreadcrumbs } from '../components/molecules';

export default function recruit() {
    const id = "Z2lkOi8vc2hvcGlmeS9QYWdlLzg2MDA0MjM2MzMy";
    const { loading: pageLoading, data: pageData } = useSinglePageSettings(id);
    const data = useStaticQuery(query);

    if (pageLoading) return <></>;

    return (
        <>
            <div className="page">
                <OgGatsbyBanner image={data.allFile.edges[0].node.childrenImageSharp[0]} alt={data.allFile.edges[0].node.name} link="" maxWidth={"full"} marginBottom={"10"} />
                <McBreadcrumbs listItem='採用情報' listUrl='/recruit' />
                <div className="inner">
                    <div className='description'
                        dangerouslySetInnerHTML={{ __html: pageData.page.body }}
                    />
                </div>
                <LinkButton link="contact" text="お問合せフォームへ" />
            </div>
        </>
    )
}

const query = graphql`
query {
  allFile (filter: {name:{eq:"img_recruit_header"}}){
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
