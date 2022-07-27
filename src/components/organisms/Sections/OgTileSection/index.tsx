import React, { FC } from 'react'

import { AtHeading, AtImage } from '../../../atoms'
import { svg, grid, itemDiv, titleDiv, title } from './index.css'
import { sprinkles } from '../../../../styles/sprinkles.css';
import { TileSectionProps } from 'types/ContentSettings/TileSectionSettings';
import Arrow from '../../../../assets/images/arrow.svg'

export const OgTileSection = (props: TileSectionProps) => {

  const image = sprinkles({
    width: {
      mobile: '100%',
      tablet: '100%',
      desktop: '50%',
    }
  })

  return (
    <>
      <section>
        <div className="inner">
          <div className={`${grid} ${sprinkles({
            gridTemplateColumns: {
              mobile: "2x",
              tablet: "2x",
              desktop: "2x",
            }
          })}`}>
            {props.dataSrc.map((item, index) => {
              return (
                <a key={item.node.id} href={`/product_category#${item.node.description}`}>
                  <div key={index} className={`${itemDiv} ${sprinkles({
                    display: {
                      mobile: "block",
                      tablet: "block",
                      desktop: "flex",
                    }
                  })}`} >

                    <img
                      src={item.node.image?.transformedSrc}
                      alt={item.node.title}
                      className={image}
                    ></img>
                    <div className={titleDiv}>
                      <p className={title}>{item.node.title}</p>
                      <Arrow className={svg} />
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
