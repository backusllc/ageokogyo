import React from "react";
import { Link } from "gatsby";

import { grid, title, imgWrap, img, bordered } from "./index.css";
import { sprinkles } from "../../../../styles/sprinkles.css";
import { Title } from "../../../../components/molecules/Title";

interface Props {
  dataSrc: any;
  isSubMenu?: boolean;
}

export const OgTileSection = ({ dataSrc, isSubMenu = false }: Props) => {
  return (
    <>
      <div className="inner">
        <Title titleEn={"PRODUCT CATEGORY"} titleJa={"商品カテゴリー"} />

        <div
          className={`${grid} ${sprinkles({
            gridTemplateColumns: {
              mobile: "2x",
              tablet: "3x",
              desktop: "3x",
            },
          })}`}
        >
          {dataSrc.map((item: any, index: number) => {
            if (item.node.products.edges.length === 0) return <></>;
            return (
              <Link key={item.node.id} to={`/product_category#${item.node.description}`}>
                <div key={index}>
                  <div className={`${imgWrap} ${isSubMenu ? "" : bordered}`}>
                    <img src={item.node.image?.transformedSrc} alt={item.node.title} className={img}></img>
                  </div>

                  <p className={title}>{item.node.title}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
