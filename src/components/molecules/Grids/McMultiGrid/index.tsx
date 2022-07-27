import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import { AtHeading, AtImage } from '../../../atoms'
import { tileLayout, img } from './index.css'

interface Props {
  dataSrc: any,
}

export const McMultiGrid = ({ dataSrc }: Props) => {

  return (
    <>
      <section>
        <div className="inner">
          <AtHeading Tag='h2'>Project</AtHeading>
          <div className={tileLayout}>

            {/* {multiGrids.map((item, index) => {
              const { id } = item
              const { name, image } = item.node
              return (
                <div key={index} className={`div${index}`}>
                  <AtImage image={image} alt={name} className={img} ></AtImage>
                  <div className="info">
                    <p>- 画像1 -</p>
                    <h3>{name}</h3>
                  </div>
                </div>
              )
            })} */}
          </div>
        </div>
      </section>
    </>
  )
}
