import React, { useContext } from "react";
import { Link } from "gatsby";
import { ShopifyContext } from "../../../context/shopifyContext";
import CartProduct from "../../organisms/Shopify/CartProduct";
import {
  cartContainer,
  tableContainer,
  thead,
  tbody,
  h1,
  tr,
  th,
  totalWrap,
  totalPriceContainer,
  h2,
  p,
  tax,
  attentionSmall,
  small,
  a,
  empltyProductWrap,
  empltyProductText,
} from "./index.css";

const Cart = () => {
  const { checkout } = useContext(ShopifyContext);

  if (!checkout) return <div></div>;

  return (
    <div className={cartContainer}>
      {checkout.lineItems[0] ? (
        <>
          <h1 className={h1}>あなたのカート</h1>
          <table className={tableContainer}>
            <thead className={thead}>
              <tr className={tr}>
                <th className={th}>商品</th>
                <th className={th}> </th>
                <th className={th}>数量</th>
                <th className={th}>合計</th>
              </tr>
            </thead>
            <tbody className={tbody}>
              {checkout.lineItems.map((line_item: any) => {
                return <CartProduct key={line_item.id} line_item={line_item} />;
              })}
            </tbody>
          </table>
          <div className={totalWrap}>
            <div>
              <div className={totalPriceContainer}>
                <h2 className={h2}>小計</h2>
                <p className={p}>¥{parseInt(checkout.subtotalPrice.amount).toLocaleString()}</p>
                <span className={tax}>(税込)</span>
              </div>
              <small className={small}>配送料は購入手続き時に計算されます</small>
              <small className={attentionSmall}>※離島・一部地域は追加送料がかかる場合があります。</small>
            </div>
            <a className={a} href={checkout.webUrl}>
              ご購入手続きへ
            </a>
          </div>
        </>
      ) : (
        <>
          <div className={empltyProductWrap}>
            <div className={empltyProductText}>カートは空です</div>
            <Link className={a} to="/product_category" style={{ alignSelf: "center" }}>
              買い物を続ける
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
