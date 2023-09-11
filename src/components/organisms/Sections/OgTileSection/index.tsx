import React, { FC } from 'react'
import { Link } from 'gatsby';

import { svg, grid, itemDiv, titleDiv, title, imgWrap, img } from './index.css'
import { sprinkles } from '../../../../styles/sprinkles.css';
import { TileSectionProps } from 'types/ContentSettings/TileSectionSettings';
import Arrow from '../../../../assets/images/arrow.svg'

export const OgTileSection = (props: TileSectionProps) => {

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
              if (item.node.products.edges.length === 0) return <></>
              return (
                <Link key={item.node.id} to={`/product_category#${item.node.description}`}>
                  <div key={index} className={`${itemDiv} ${sprinkles({
                    display: {
                      mobile: "block",
                      tablet: "block",
                      desktop: "flex",
                    }
                  })}`} >
                    <div className={imgWrap}>
                      <img
                        src={item.node.image?.transformedSrc}
                        alt={item.node.title}
                        className={img}
                      ></img>
                    </div>

                    <div className={titleDiv}>
                      <p className={title}>{item.node.title}</p>
                      <Arrow className={svg} />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
