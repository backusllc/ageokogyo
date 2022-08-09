import React from 'react';
import { useShopSettings } from '../hooks/useShopSettings'


export default function refund() {
    const { loading: shopLoading, data: shopData } = useShopSettings();

    if (shopLoading) return <></>

    return (
        <>
            <div className="inner term_page">
                <h1>利用規約</h1>
                <div className='description'
                    dangerouslySetInnerHTML={{ __html: shopData.shop.refundPolicy.body }}
                />
            </div>
        </>
    )
}
