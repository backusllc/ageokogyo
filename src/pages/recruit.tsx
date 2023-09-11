import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import {
  OgGatsbyBanner,
} from '../components/organisms';
import LinkButton from '../components/organisms/Shopify/LinkButton';
import { useSinglePageSettings } from '../hooks/useSinglePageSettings'
import { McBreadcrumbs } from '../components/molecules';
import SEO from '../utils/seo';

const title = "採用情報 | 上尾工業株式会社";
const description = "上尾工業株式会社の採用情報ページ。シティサイクル · スポーツサイクル · CTB自転車 · 幼児用自転車 · 子供用自転車 · 三輪車 · 折りたたみ自転車 · きかんしゃトーマスなどの自転車製品を販売しています。"
const image = `https://cdn.shopify.com/s/files/1/0582/1831/5820/files/logo_256x256.gif?v=1658329876`;
const isArticle = false;

export default function recruit() {
  const id = "Z2lkOi8vc2hvcGlmeS9QYWdlLzg2MDA0MjM2MzMy";
  const { loading: pageLoading, data: pageData } = useSinglePageSettings(id);
  const data = useStaticQuery(query);

  if (pageLoading) return <></>;

  return (
    <>
      <SEO title={title}
        description={description}
        image={image}
        article={isArticle}
      />
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
