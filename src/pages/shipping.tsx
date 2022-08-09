import React from 'react';
import { useShopSettings } from '../hooks/useShopSettings'

export default function shipping() {
    const { loading: shopLoading, data: shopData } = useShopSettings();

    if (shopLoading) return <></>

    return (
        <>
            <div className="inner term_page">
                <h1>配送ポリシー</h1>
                <div className='description'
                    dangerouslySetInnerHTML={{ __html: shopData.shop.shippingPolicy.body }}
                />
            </div>
        </>
    )
}
