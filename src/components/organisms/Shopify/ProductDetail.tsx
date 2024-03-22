import React, { useContext, useState } from "react";
import Gallery from "./../../organisms/Shopify/Gallery";
import Buttons from "./../../organisms/Shopify/Buttons";
import ContactButtons from "./../../organisms/Shopify/ContactButtons";
import QuantityButton from "./../../organisms//Shopify/QuantityButton";
import VariantSelectors from "./../../organisms//Shopify/VariantSelectors";
import { ShopifyContext } from "./../../../context/shopifyContext";
import Recommend from "./Recommend";
import {
  productContainer,
  productDetailContainer,
  titleSp,
  titlePc,
  description,
  optionContainer,
  quantityContainer,
  price,
  tax,
  priceContainer,
  addCartButtonContainer,
  buttonContainer,
} from "./ProductDetail.css";
import { MoreButton } from "../../../components/molecules/MoreButton";

interface Props {
  product: any;
  isDispalyRecommend: boolean;
  productId?: string;
}

const ProductDetail = ({ product, isDispalyRecommend = true, productId = "" }: Props) => {
  const [variant, setVariant] = useState(product.variants ? product.variants[0] : null);
  const { fetchProductWithId, client } = useContext(ShopifyContext);
  const productVariant = variant ? client.product.helpers.variantForOptions(product, variant) || variant : variant;
  const [quantity, setQuantity] = useState(1);

  const context = useContext(ShopifyContext);

  if (!product.title) return <div></div>;

  const handleOptionChange = (event: any) => {
    const { target } = event;
    setVariant((prevState: any) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const removeImageTags = (htmlContent: string) => {
    return htmlContent.replace(/<img[^>]*>/g, "");
  };

  return (
    <>
      <div className={`${productContainer}`}>
        <p className={titleSp}>{product.title}</p>
        <Gallery product={product} />
        <div className={productDetailContainer}>
          <p className={titlePc}>{product.title}</p>
          {isDispalyRecommend ? (
            <div className={description} dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
          ) : (
            <div className={description} dangerouslySetInnerHTML={{ __html: removeImageTags(product.descriptionHtml) }} />
          )}
          <div className={optionContainer}>
            {product.options[0].name != "Title"
              ? product.options.map((options: any) => (
                  <VariantSelectors key={options.id.toString()} onChange={handleOptionChange} options={options} />
                ))
              : null}
            <div className={quantityContainer}>
              <QuantityButton quantity={quantity} setQuantity={setQuantity} />
            </div>
          </div>
          <div className={priceContainer}>
            <p className={price}>
              ¥{parseInt(product.variants[0].price.amount, 10).toLocaleString()} <div className={tax}>(税込)</div>
            </p>
            <div className={addCartButtonContainer}>
              <Buttons
                context={context}
                available={productVariant.available}
                quantity={quantity}
                productVariant={productVariant}
              />
            </div>
          </div>

          {!productVariant.available ? <ContactButtons /> : null}
        </div>
      </div>
      {isDispalyRecommend && <Recommend productId={productId} />}
      {isDispalyRecommend && (
        <div className={buttonContainer}>
          <MoreButton url={"/product_category"} buttonText={"BACK"} />
        </div>
      )}
    </>
  );
};

export default ProductDetail;
