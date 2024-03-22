import React from "react";
import { Link } from "gatsby";

import { productImageContainer, productImage, title, price, tax, productImageBorder } from "./ProductCard.css";

interface Props {
  productId: string;
  source: string;
  titleText: string;
  priceText: string;
  isBackgroundColored?: boolean;
}

const ProductCard = ({ productId, source, titleText, priceText, isBackgroundColored = false }: Props) => {
  return (
    <Link key={productId} to={`/products/${productId.slice(productId.lastIndexOf("/") + 1)}`}>
      <div className={`${productImageContainer} ${isBackgroundColored && productImageBorder}`}>
        <img className={productImage} src={source} alt="" />
      </div>
      <p className={title}>{titleText}</p>
      <p className={price}>
        {`¥${parseInt(priceText, 10).toLocaleString()}`}
        <span className={tax}>(税込)</span>
      </p>
    </Link>
  );
};

export default ProductCard;
