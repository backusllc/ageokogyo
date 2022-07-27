import React from 'react';
import { p, ja } from './index.css';
import { AtHeading } from '../../../atoms';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

export const OgThreeLineTextSection = () => {
  // const { contentfulOgThreeLineTextSection: threeLineTexts } = usePageSettings();

  // const { title, subTitle, description, subTitleEnglish, descriptionEnglish } = threeLineTexts;

  //Richテキストの改行のために必要なoption

  return (
    <></>
    // <section>
    //   <div className="inner">
    //     <AtHeading Tag="h2">{title}</AtHeading>
    //     <div className={ja}>
    //       <AtHeading Tag="h3">{subTitle}</AtHeading>
    //       {/* <p className={p}> */}
    //       {renderRichText(description, options)}
    //       {/* </p> */}
    //     </div>
    //     <div>
    //       <AtHeading Tag="h3">{subTitleEnglish}</AtHeading>
    //       {/* <p className={p}> */}
    //       {renderRichText(descriptionEnglish, options)}
    //       {/* </p> */}
    //     </div>
    //   </div>
    // </section>
  );
};
