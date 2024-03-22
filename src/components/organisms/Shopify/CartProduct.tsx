import { ShopifyContext } from "../../../context/shopifyContext";
import React, { useContext } from "react";

import Trash from "../../../assets/images/trash.svg";
import {
  tr,
  productName,
  quantity,
  tax,
  totalTd,
  trashTd,
  ammount,
  ammountTd,
  nameTd,
  imageTd,
  productTd,
  productImageContainer,
  productImageBorder,
  productImage,
} from "./CartProduct.css";

const CartProduct = ({ key, line_item }: any) => {
  const { checkout, removeCheckoutItem } = useContext(ShopifyContext);

  const imageItem = line_item.variant.image && (
    <figure className={`${productImageContainer}  ${productImageBorder}`}>
      <img className={productImage} src={line_item.variant.image.src} alt={line_item.variant.image.altText} />
    </figure>
  );

  const removeItem = () => {
    removeCheckoutItem(checkout.id, line_item.id);
  };

  return (
    <>
      <tr className={tr}>
        <td className={imageTd}>{imageItem}</td>
        <td className={nameTd}>
          <p className={productName}>
            {line_item.title}
            {line_item.variant.title != "Default Title" ? `(${line_item.variant.title})` : null}
          </p>
        </td>
        <td className={ammountTd}>
          <div className={quantity}>{line_item.quantity}</div>
        </td>
        <td className={totalTd}>
          <div className={ammount}>{`￥${parseInt(
            line_item.quantity * line_item.variant.price.amount,
            10
          ).toLocaleString()}`}</div>
        </td>
        <td className={productTd}>
          <p className={productName}>
            {line_item.title}
            {line_item.variant.title != "Default Title" ? `(${line_item.variant.title})` : null}
          </p>
          <div className={ammount}>
            {`￥${parseInt(line_item.quantity * line_item.variant.price.amount, 10).toLocaleString()}`}
            <span className={tax}>(税込)</span>
          </div>
          <div className={quantity}>数量：{line_item.quantity}</div>
        </td>
        <td className={trashTd} onClick={removeItem}>
          <Trash />
        </td>
      </tr>
    </>
  );
};

export default CartProduct;
