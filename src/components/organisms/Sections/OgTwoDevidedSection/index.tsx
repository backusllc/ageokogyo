import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby';

import { inner, flex, details, } from './index.css'
import { AtHeading, AtImage } from '../../../atoms'
import { McColumnThirdsGrid } from '../../../molecules'
import { TwoDevidedSectionProps } from '../../../../types/ContentSettings/TwoDevidedSectionSettings';


interface Props {
  rightDataSrc: any,
  rightComponent: JSX.Element,
  leftDataSrc: any,
  leftComponent: JSX.Element,
}

export const OgTwoDevidedSection = (props: TwoDevidedSectionProps) => {

  return (
    <section>
      <div className={inner}>
        <div className={flex}>
          <div>
            <img src={props.imageUrl} />
          </div>
          <div >
            <AtHeading Tag='h3'>{props.title}</AtHeading>
            <AtHeading Tag='p'>{props.description}</AtHeading>
          </div>
        </div>
      </div>
    </section >
  )
}
