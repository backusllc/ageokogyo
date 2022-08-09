import React from 'react';
import { useShopSettings } from '../hooks/useShopSettings'

export default function informatino() {
    const { loading: shopLoading, data: shopData } = useShopSettings();

    if (shopLoading) return <></>

    return (
        <>
            <div className="inner term_page">
                <h1>個人情報保護方針</h1>
                <div>
                    <p style={{ textAlign: "right" }}>2013年 12月 6日</p>
                    <p style={{ textAlign: "right" }}>上尾工業株式会社</p>
                    <div className='description'
                        dangerouslySetInnerHTML={{ __html: shopData.shop.privacyPolicy.body }}
                    />
                </div>
            </div>
        </>
    )
}
