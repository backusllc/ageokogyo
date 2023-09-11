import React from 'react';
import { useShopSettings } from '../hooks/useShopSettings'
import SEO from '../utils/seo';

const title = "個人情報保護方針 | 上尾工業株式会社";
const description = "個人情報保護方針一覧ページ。シティサイクル · スポーツサイクル · CTB自転車 · 幼児用自転車 · 子供用自転車 · 三輪車 · 折りたたみ自転車 · きかんしゃトーマスなどの自転車製品を販売しています。"
const image = `https://cdn.shopify.com/s/files/1/0582/1831/5820/files/logo_256x256.gif?v=1658329876`;
const isArticle = false;

export default function informatino() {
    const { loading: shopLoading, data: shopData } = useShopSettings();

    if (shopLoading) return <></>

    return (
        <>
            <SEO title={title}
                description={description}
                image={image}
                article={isArticle}
            />
            <div className="inner term_page">
                <h1>個人情報保護方針</h1>
                <div>
                    <div className='description'
                        dangerouslySetInnerHTML={{ __html: shopData.shop.privacyPolicy.body }}
                    />
                </div>
            </div>
        </>
    )
}
