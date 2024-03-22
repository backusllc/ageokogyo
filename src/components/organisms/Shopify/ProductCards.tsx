import React, { useEffect, useLayoutEffect } from "react";

import { sprinkles } from "../../../styles/sprinkles.css";
import {
  productsContainer,
  productContainer,
  titleContainer,
  backgroundStripe,
  buttonContainer,
  productCardsContainer,
} from "./ProductCards.css";
import { useScrollToHash } from "../../../hooks/useScrollToHash";
import { MoreButton } from "../../molecules/MoreButton";
import { SubTitle } from "../../molecules/SubTitle";
import ProductCard from "./ProductCard";

interface Props {
  productIndex: number;
  isScroll: boolean;
  isDiaplayViewAll: boolean;
  products: any;
}

const ProductCards = ({ productIndex, isScroll, isDiaplayViewAll, products }: Props) => {
  const [ref, moveTo] = useScrollToHash();

  useEffect(() => {}, []);
  useLayoutEffect(() => {
    if (isScroll) {
      moveTo();
    }
  }, [isScroll]);

  const isBackgroundColored = productIndex % 2 !== 0;

  return (
    <div key={products.node.id} className={`${isBackgroundColored ? "" : backgroundStripe} ${productCardsContainer}`}>
      <div id={products.node.description} ref={ref} className={`${titleContainer} inner`}>
        <SubTitle titleEn={products.node.description} titleJa={products.node.title} />
      </div>
      <div className={`${productsContainer} inner`}>
        {products.node.products.edges.map((product: any, index: number) => {
          return (
            <div key={index} className={productContainer}>
              <ProductCard
                productId={product.node.id}
                source={product.node.images.edges[0]?.node.transformedSrc}
                titleText={product.node.title}
                priceText={product.node.priceRange.minVariantPrice.amount}
                isBackgroundColored={isBackgroundColored}
              />
            </div>
          );
        })}
      </div>
      {isDiaplayViewAll && products.node.products.edges?.length > 2 && (
        <div className={`${buttonContainer} inner`}>
          <MoreButton url={`/product_category#${products.node.description}`} buttonText={"VIEW ALL"} />
        </div>
      )}
    </div>
  );
};

export default ProductCards;
