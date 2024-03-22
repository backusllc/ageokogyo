import React, { useEffect, useState } from "react";

import { wrapDiv } from "./CategoryProducts.css";
import ProductCards from "./ProductCards";
import { useCollectionProductsSettings } from "../../../hooks/useCollectionProductsSettings";

const CategoryProducts = ({ displayCount = 3, isDiaplayViewAll = false }) => {
  const [hashId, setId] = useState<string>();

  const { loading: collectionProductLoading, data: collectionProductLists } = useCollectionProductsSettings(displayCount);

  useEffect(() => {
    setId(window.location.hash.replace("#", ""));
  }, []);

  if (collectionProductLoading) {
    return <></>;
  }

  let customIndex = 1;

  return (
    <>
      <div className={`${wrapDiv}`}>
        {collectionProductLists.collections.edges.map((products: any) => {
          if (products.node.products.edges.length === 0) return null;

          const currentIndex = customIndex++;

          return (
            <ProductCards
              key={currentIndex}
              productIndex={currentIndex}
              isScroll={products.node.description === hashId}
              isDiaplayViewAll={isDiaplayViewAll}
              products={products}
            />
          );
        })}
      </div>
    </>
  );
};

export default CategoryProducts;
