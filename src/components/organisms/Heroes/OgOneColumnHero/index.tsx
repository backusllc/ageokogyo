import React from 'react';
import { section, gridDiv } from './index.css'

import { AtText, AtButton } from '../../../atoms';
import { sprinkles } from '../../../../styles/sprinkles.css';
import { OneColumnHeroProps } from '../../../../types/TopSettings/OneColumnHeroSettings';
import { AtImage } from '../../../atoms';
import { graphql, Link, useStaticQuery } from 'gatsby';


export const OgOneColumnHero = (props: OneColumnHeroProps) => {
  const data = useStaticQuery(query);

  const sectionDiv = sprinkles({
    marginBottom: {
      mobile: '33',
      tablet: '33',
      desktop: '50',
    }
  })


  const wrapperDiv = sprinkles({ maxWidth: props.maxWidth })

  return (
    <>
      <section className={`${section} ${sectionDiv}`}>
        <div className={wrapperDiv} style={{ margin: '0 auto' }}>
          <AtImage
            image={data.allFile.edges[0].node.childrenImageSharp[0]}
            alt={data.allFile.edges[0].node.name}
          />
          <div className={gridDiv}>
            <div>
              <AtText
                Tag='div'
                mobileFontSize={props.mobileFontSize1}
                desktopFontSize={props.desktopFontSize1}
                fontFamily={props.fontFamily1}
                fontWeight={props.fontWeight1}
                fontStyle={props.fontStyle1}
                textDecoration={props.textDecoration1}
                justifyContent={props.justifyContent1}
                alignItems={props.alignItems1}
                lineHeight={props.lineHeight1}
                letterSpacing={props.letterSpacing1}
                backgroundColor={props.backgroundColor1}
                color={props.color1}
              >{props.text1}
              </AtText>
              <AtText
                Tag='div'
                mobileFontSize={props.mobileFontSize2}
                desktopFontSize={props.desktopFontSize2}
                fontFamily={props.fontFamily2}
                fontWeight={props.fontWeight2}
                fontStyle={props.fontStyle2}
                textDecoration={props.textDecoration2}
                justifyContent={props.justifyContent2}
                alignItems={props.alignItems2}
                lineHeight={props.lineHeight2}
                letterSpacing={props.letterSpacing2}
                backgroundColor={props.backgroundColor2}
                color={props.color2}
              >{props.text2}
              </AtText>
              <AtButton
                color={props.buttonColor}
                backgroundColor={props.buttonBackgroundColor}
                borderRadius={props.buttonBorderRadius}
              ></AtButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const query = graphql`
query {
  allFile (filter: {name:{eq:"thomastricycle"}}){
    edges {
      node {
        name
        childrenImageSharp {
          gatsbyImageData(placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
}
`
