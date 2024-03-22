import React, { useContext, useEffect } from "react";

import SEO from "../../utils/seo";
import ProductDetail from "../../components/organisms/Shopify/ProductDetail";
import { ShopifyContext } from "./../../context/shopifyContext";
import { McBreadcrumbs } from "../../components/molecules";

const ProductsPage = (props: any) => {
  const productId = `gid://shopify/Product/${props.params.name}`;
  const { fetchProductWithId, product } = useContext(ShopifyContext);

  const { fetchAllCollections } = useContext(ShopifyContext);

  useEffect(() => {
    fetchProductWithId(productId);
    asyncFetchAllCollections();
    return () => {};
  }, [productId]);

  async function asyncFetchAllCollections() {
    try {
      await fetchAllCollections();
    } catch (error) {}
  }

  if (!product.title) return <></>;

  return (
    <>
      <SEO title={product.title} description={product.description} image={product.images[0].src} />
      <McBreadcrumbs
        listItems={[
          { name: "HOME", url: "/" },
          { name: "ONLINE STORE", url: "/product_category" },
          { name: product.title, url: "" },
        ]}
      />
      {<ProductDetail product={product} isDispalyRecommend={true} productId={productId} />}
    </>
  );
};

export default ProductsPage;
