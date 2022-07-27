import React from 'react';
import { ShopifyContext } from './../context/shopifyContext';
import {
    OgBanner,
    OgMegaHeader,
} from '../components/organisms';
import NewsLists from '../components/organisms/Shopify/NewsLists';
import Footer from '../components/organisms/Shopify/Footer';
import { useCollectionProductsSettings } from '../hooks/useCollectionProductsSettings';

export default function informatino() {

    return (
        <>
            <OgBanner imageUrl='https://cdn.shopify.com/s/files/1/0582/1831/5820/files/img_news.png?v=1658567232' link="" maxWidth={"full"} marginBottom={"80"} />
            <div className="inner">
                <NewsLists />
            </div>
        </>
    )
}
