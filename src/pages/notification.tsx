import React from 'react';
import { useShopSettings } from '../hooks/useShopSettings'


export default function notification() {
    const { loading: shopLoading, data: shopData } = useShopSettings();

    if (shopLoading) return <></>

    console.log(shopData.shop.termsOfService.body);

    return (
        <>
            <div className="inner term_page">
                <h1>利用規約</h1>
                <div className='description'
                    dangerouslySetInnerHTML={{ __html: shopData.shop.termsOfService.body }}
                />
            </div>
        </>
    )
}
