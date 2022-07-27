import React, { useContext, useEffect, useState } from 'react';
import { Flex, Box } from 'rebass';
import SEO from '../../utils/seo';
import Gallery from './../../components/organisms/Shopify/Gallery';
import Buttons from './../../components/organisms/Shopify/Buttons';
import QuantityButton from './../../components/organisms/Shopify/QuantityButton';
import VariantSelectors from './../../components/organisms/Shopify/VariantSelectors';
import { ShopifyContext } from './../../context/shopifyContext';

import {
    OgBanner,
    OgMegaHeader,
} from '../../components/organisms';
import Footer from '../../components/organisms/Shopify/Footer';
import CollectionSelection from '../../components/organisms/Shopify/CollectionSelection';
import { sprinkles } from '../../styles/sprinkles.css';
import Recommend from '../../components/organisms/Shopify/Recommend';
import ProductDetail from '../../components/organisms/Shopify/ProductDetail';

const ProductsPage = (props: any) => {
    const name = props.params.name;

    const { fetchProductWithId, product } = useContext(ShopifyContext);
    const context = useContext(ShopifyContext);
    const [quantity, setQuantity] = useState(1);

    const { fetchAllCollections, addItemToCheckout, collections, apolloClient, checkout } = useContext(ShopifyContext)

    useEffect(() => {
        fetchProductWithId(name)
        asyncFetchAllCollections();
        return () => {
        };
    }, []);

    async function asyncFetchAllCollections() {
        try {
            await fetchAllCollections();
        }
        catch (error) {
        }
    };

    if (!product.title) return <div></div>

    const divProduct = sprinkles({
        display: {
            mobile: "block",
            tablet: "flex",
            desktop: "flex",
        },
        gap: "30",
    });

    return (
        <>
            <OgBanner imageUrl='https://cdn.shopify.com/s/files/1/0582/1831/5820/files/online_header.png?v=1658494910' link="" marginBottom='80' maxWidth="full" />
            <div className="inner">
                <ProductDetail productId={name} isDispalyRecommend={true} />
            </div>
        </>
    )
}

export default ProductsPage;
