import React, { useContext, useEffect, useState } from 'react';
import { ShopifyContext } from './../../context/shopifyContext';

import {
    OgBanner,
} from '../../components/organisms';
import ProductDetail from '../../components/organisms/Shopify/ProductDetail';
import SEO from '../../utils/seo';

const ProductsPage = (props: any) => {
    const productId = `gid://shopify/Product/${props.params.name}`;
    const { fetchProductWithId, product } = useContext(ShopifyContext);

    const { fetchAllCollections } = useContext(ShopifyContext)

    useEffect(() => {
        fetchProductWithId(productId)
        asyncFetchAllCollections();
        return () => {
        };
    }, [productId]);

    async function asyncFetchAllCollections() {
        try {
            await fetchAllCollections();
        }
        catch (error) {
        }
    };

    if (!product.title) return <></>;

    return (
        <>
            <SEO title={product.title}
                description={product.description}
                image={product.images[0].src}
            />
            <OgBanner imageUrl='https://cdn.shopify.com/s/files/1/0582/1831/5820/files/online_header.png?v=1658494910' link="" marginBottom='80' maxWidth="full" />
            <div className="inner">
                {
                    <ProductDetail product={product} isDispalyRecommend={true} productId={productId} />
                }
            </div>
        </>
    )
}

export default ProductsPage;
