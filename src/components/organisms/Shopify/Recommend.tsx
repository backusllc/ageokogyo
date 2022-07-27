import React, { useContext, useEffect } from 'react';
import { sprinkles } from '../../../styles/sprinkles.css';
import { useProductRecommendationSettings } from '../../../hooks/useProductRecommendationSettings'
import { divFlex, img, p, price } from './Recommend.css'

const Recommend = () => {

    const { loading: productRecommendationLoading, data: productRecommendationLists } = useProductRecommendationSettings("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4OTg4MjYyMTU0Njg=");

    if (productRecommendationLoading) return <div></div>;

    const itemDiv = sprinkles({
        width: {
            mobile: '100%',
            tablet: '50%',
            desktop: '20%',
        },
    })

    return (
        <>
            <div className="inner">
                <h2 className="product-recommendation">おすすめ商品</h2>
                <div className={divFlex}>
                    {
                        productRecommendationLists.productRecommendations.map((recommendationProduct, index) => (
                            index < 5 ? (
                                <div key={index} className={itemDiv}>
                                    < a key={recommendationProduct.id} href={recommendationProduct.id}>
                                        <img className={img} src={recommendationProduct.images.edges[0].node.transformedSrc} alt="" />
                                        <p className={p}>{recommendationProduct.title}</p>
                                        <p className={price}>{`${parseInt(recommendationProduct.priceRange.minVariantPrice.amount,10)}円 (税込)`}</p>
                                    </a>
                                </div>
                            )
                                : null))}
                </div>
            </div>
        </>
    );
};

export default Recommend;
