import React, { useContext, useEffect } from "react";
import ProductDetail from "./ProductDetail";
import { ShopifyContext } from "../../../context/shopifyContext";
import { Title } from "../../../components/molecules/Title";
import { itemWrapper, pickupInner, pickupContainer } from "./Pickup.css";

const Pickup = () => {
  const productId = "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NDIzMjEwODI0MTI=";
  useEffect(() => {
    fetchProductWithId(productId);
  }, []);

  const { fetchProductWithId, product } = useContext(ShopifyContext);

  if (!product.title) return <div></div>;

  return (
    <div className={pickupContainer}>
      <div className={pickupInner}>
        <Title titleEn={"PICK UP"} titleJa={"ピックアップ商品"} />
        <div className={itemWrapper}>
          <ProductDetail product={product} productId={productId} isDispalyRecommend={false} />
        </div>
      </div>
    </div>
  );
};

export default Pickup;
