import React from 'react'

import { AtHeading } from '../../atoms'
import { div, image } from './index.css'
import { sprinkles, Sprinkles } from '../../../styles/sprinkles.css';

interface Props {
  mobileFontSize1: Sprinkles["fontSize"],
  desktopFontSize1: Sprinkles["fontSize"],
  fontFamily1: Sprinkles["fontFamily"],
  fontWeight1: Sprinkles["fontWeight"],
  fontStyle1: Sprinkles["fontStyle"],
  textDecoration1: Sprinkles["textDecoration"],
  justifyContent1: Sprinkles["justifyContent"],
  alignItems1: Sprinkles["alignItems"],
  lineHeight1: Sprinkles["lineHeight"],
  letterSpacing1: Sprinkles["letterSpacing"],
  backgroundColor1: any,
  color1: any,
  text1: string,
  marginTop1: Sprinkles["marginTop"],
  marginRight1: Sprinkles["marginRight"],
  marginBottom1: Sprinkles["marginBottom"],
  marginLeft1: Sprinkles["marginLeft"],
  paddingTop1: Sprinkles["paddingTop"],
  paddingRight1: Sprinkles["paddingRight"],
  paddingBottom1: Sprinkles["paddingBottom"],
  paddingLeft1: Sprinkles["paddingLeft"],
  borderRadiou1: Sprinkles["borderRadius"],

  mobileFontSize2: Sprinkles["fontSize"],
  desktopFontSize2: Sprinkles["fontSize"],
  fontFamily2: Sprinkles["fontFamily"],
  fontWeight2: Sprinkles["fontWeight"],
  fontStyle2: Sprinkles["fontStyle"],
  textDecoration2: Sprinkles["textDecoration"],
  justifyContent2: Sprinkles["justifyContent"],
  alignItems2: Sprinkles["alignItems"],
  lineHeight2: Sprinkles["lineHeight"],
  letterSpacing2: Sprinkles["letterSpacing"],
  backgroundColor2: any,
  color2: any,
  text2: string,
  marginTop2: Sprinkles["marginTop"],
  marginRight2: Sprinkles["marginRight"],
  marginBottom2: Sprinkles["marginBottom"],
  marginLeft2: Sprinkles["marginLeft"],
  paddingTop2: Sprinkles["paddingTop"],
  paddingRight2: Sprinkles["paddingRight"],
  paddingBottom2: Sprinkles["paddingBottom"],
  paddingLeft2: Sprinkles["paddingLeft"],
  borderRadiou2: Sprinkles["borderRadius"],

  imageSrc: string,
  imageAlt: string,
}

export const McTitle = ({
  mobileFontSize1,
  desktopFontSize1,
  fontFamily1,
  fontWeight1,
  fontStyle1,
  textDecoration1,
  justifyContent1,
  alignItems1,
  lineHeight1,
  letterSpacing1,
  backgroundColor1,
  color1,
  marginTop1,
  marginRight1,
  marginBottom1,
  marginLeft1,
  paddingTop1,
  paddingRight1,
  paddingBottom1,
  paddingLeft1,
  borderRadiou1,
  text1,
  imageSrc,
  imageAlt,

  mobileFontSize2,
  desktopFontSize2,
  fontFamily2,
  fontWeight2,
  fontStyle2,
  textDecoration2,
  justifyContent2,
  alignItems2,
  lineHeight2,
  letterSpacing2,
  backgroundColor2,
  color2,
  marginTop2,
  marginRight2,
  marginBottom2,
  marginLeft2,
  paddingTop2,
  paddingRight2,
  paddingBottom2,
  paddingLeft2,
  borderRadiou2,
  text2,
}: Props) => {

  return (
    <div className="inner">
      <AtHeading
        Tag='h2'
        mobileFontSize={mobileFontSize1}
        desktopFontSize={desktopFontSize1}
        fontFamily={fontFamily1}
        fontWeight={fontWeight1}
        fontStyle={fontStyle1}
        textDecoration={textDecoration1}
        justifyContent={justifyContent1}
        alignItems={alignItems1}
        lineHeight={lineHeight1}
        letterSpacing={letterSpacing1}
        backgroundColor={backgroundColor1}
        color={color1}
        marginTop={marginTop1}
        marginRight={marginRight1}
        marginBottom={marginBottom1}
        marginLeft={marginLeft1}
        paddingTop={paddingTop1}
        paddingRight={paddingRight1}
        paddingBottom={paddingBottom1}
        paddingLeft={paddingLeft1}
        borderRadiou={borderRadiou1}

      >{text1}
      </AtHeading>
      <div className={div}>
        <img src={imageSrc} alt={imageAlt} className={image} />
      </div>
      <hr />
    </div >
  )
}
