import React from 'react';
import { ShopifyContext } from './../context/shopifyContext';
import {
    OgBanner,
    OgMegaHeader,
} from '../components/organisms';
import Footer from '../components/organisms/Shopify/Footer';
import { useCollectionProductsSettings } from '../hooks/useCollectionProductsSettings';

export default function faq() {

    return (
        <div className="page">
            <OgBanner imageUrl='https://cdn.shopify.com/s/files/1/0582/1831/5820/files/img_faq.png?v=1658567232' link="" maxWidth={"full"} marginBottom={"80"} />
            <div className="inner">
                <h2>自転車について</h2>
                <h3>「シティサイクル」と「クロスバイク」の違いって？</h3>
                <p>
                    シティサイクルは、いわゆるママチャリ。かごやライトがついていて便利な半面、鉄製の為重くて錆びやすい弱点も。クロスバイクは変速機を備え長距離移動に適した自転車。かごやライトは無いが、アルミなどの軽く錆びにくい材質でできているので長く乗れる。用途に合わせて選ぼう。
                </p>
                <h2>部品に付いて</h2>
                <h3>スペアキーは取り寄せ出来ますか？</h3>
                <p>
                    一部を除き（お問合せ下さい）、自転車本体ではなく、キー自体に刻印されている番号が分れば、お取り寄せ可能です。
                </p>
            </div>
        </div>
    )
}
