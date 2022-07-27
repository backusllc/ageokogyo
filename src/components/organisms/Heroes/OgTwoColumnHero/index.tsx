import React from 'react';
import { section, gridDiv, image, imageDiv, textDiv, overlayDiv } from './index.css'

import { AtImage, AtText, AtButton } from '../../../atoms';
import { sprinkles, Sprinkles } from '../../../../styles/sprinkles.css';
import { TwoColumnHeroProps } from '../../../../types/TopSettings/TwoColumnHeroSettings';

export const OgTwoColumnHero = (props: TwoColumnHeroProps) => {

  //css
  const textDivStyle = sprinkles({ textAlign: { mobile: props.mobileTextAlign, desktop: props.desktopTextAlign, } })
  const wrapperDiv = sprinkles({ paddingTop: props.aspectRatio })

  return (
    <>
      <section className={section} >
        <div className={overlayDiv} ></div>
        <div className={wrapperDiv}>
          <img className={image} src={props.imageUrl}></img>
        </div>
        <div className={gridDiv}>
          <div className={`${textDiv} ${textDivStyle}`} style={{ top: props.top + '%', left: props.left + '%', transform: `translate(-${props.left}%, -${props.top}%)` }} >
            <div style={{ padding: '20px' }}>
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
              <AtText
                Tag='div'
                mobileFontSize={props.mobileFontSize3}
                desktopFontSize={props.desktopFontSize3}
                fontFamily={props.fontFamily3}
                fontWeight={props.fontWeight3}
                fontStyle={props.fontStyle3}
                textDecoration={props.textDecoration3}
                justifyContent={props.justifyContent3}
                alignItems={props.alignItems3}
                lineHeight={props.lineHeight3}
                letterSpacing={props.letterSpacing3}
                backgroundColor={props.backgroundColor3}
                color={props.color3}
              >{props.text3}
              </AtText>

              <div style={{ backgroundColor: 'white' }}>
                <AtButton
                  color={props.buttonColor}
                  backgroundColor={props.buttonBackgroundColor}
                  borderRadius={props.buttonBorderRadius}
                ></AtButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
