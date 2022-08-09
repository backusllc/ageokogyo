import React, { useContext, useEffect, useState } from 'react';
import SEO from '../../utils/seo';
import { ShopifyContext } from './../../context/shopifyContext';

import {
    OgBanner,
} from '../../components/organisms';
import { sprinkles } from '../../styles/sprinkles.css';
import ProductDetail from '../../components/organisms/Shopify/ProductDetail';

const ProductsPage = (props: any) => {
    const name = props.params.name;
    const { fetchProductWithId, product } = useContext(ShopifyContext);

    const { fetchAllCollections } = useContext(ShopifyContext)

    useEffect(() => {
        fetchProductWithId(name)
        asyncFetchAllCollections();
        return () => {
        };
    }, [name]);

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
            <OgBanner imageUrl='https://cdn.shopify.com/s/files/1/0582/1831/5820/files/online_header.png?v=1658494910' link="" marginBottom='80' maxWidth="full" />
            <div className="inner">
                {
                    <ProductDetail product={product} isDispalyRecommend={true} />
                }
            </div>
        </>
    )
}

export default ProductsPage;
