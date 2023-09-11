import { McTitle } from '../../molecules';
import React, { useContext, useEffect } from 'react';
import ProductDetail from './ProductDetail';
import { ShopifyContext } from '../../../context/shopifyContext';

const Pickup = () => {
    const productId = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NDIzMjEwODI0MTI=';
    useEffect(() => {
        fetchProductWithId(productId)
    }, []);

    const { fetchProductWithId, product } = useContext(ShopifyContext);

    if (!product.title) return <div></div>

    return (
        <>
            <div style={{
                backgroundColor: '#E6E6E6',
                padding: "100px 0",
            }}>
                <div style={{
                    width: 'calc(100% - 2rem)',
                    maxWidth: "1080px", margin: "0px auto",
                    backgroundColor: "#fff",
                    padding: "2rem 0",
                }}>
                    < McTitle
                        mobileFontSize1="16"
                        desktopFontSize1="16"
                        fontFamily1=""
                        fontWeight1="medium"
                        fontStyle1="normal"
                        textDecoration1="none"
                        justifyContent1="center"
                        alignItems1="center"
                        lineHeight1="1"
                        letterSpacing1="4"
                        backgroundColor1="#00762D"
                        color1="#fff"
                        marginTop1="0"
                        marginRight1="0"
                        marginBottom1="33"
                        marginLeft1="0"
                        paddingTop1="8"
                        paddingRight1="70"
                        paddingBottom1="8"
                        paddingLeft1="70"
                        borderRadiou1="5x"
                        text1="ピックアップ商品"

                        imageSrc='https://cdn.shopify.com/s/files/1/0582/1831/5820/files/img_pickup_title.png?v=1658589799'
                        imageAlt='PICK UP'
                    />
                    <div className="inner" style={{ margin: '3rem auto 5rem' }}>
                        <ProductDetail product={product} productId={productId} isDispalyRecommend={false} />
                    </div>
                </div>
            </div >
        </>
    );
};

export default Pickup;
