import React, { useContext, useEffect } from 'react';
import { Link } from 'gatsby';
import { sprinkles } from '../../../styles/sprinkles.css';
import { useProductRecommendationSettings } from '../../../hooks/useProductRecommendationSettings'
import { divFlex, img, p, price } from './Recommend.css'

interface Props {
    productId: string
}

const Recommend = ({ productId }: Props) => {

    const { loading: productRecommendationLoading, data: productRecommendationLists } = useProductRecommendationSettings(productId);

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
                        productRecommendationLists.productRecommendations?.map((recommendationProduct, index) => (
                            index < 5 ? (
                                <div key={index} className={itemDiv}>
                                    <Link key={recommendationProduct.id} to={`/products/${recommendationProduct.id.slice(recommendationProduct.id.lastIndexOf('/') + 1)}`}>
                                        <img className={img} src={recommendationProduct.images.edges[0]?.node.transformedSrc} alt="" />
                                        <p className={p}>{recommendationProduct.title}</p>
                                        <p className={price}>{`${parseInt(recommendationProduct.priceRange.minVariantPrice.amount, 10).toLocaleString()}円 (税込)`}</p>
                                    </Link>
                                </div>
                            )
                                : null))}
                </div>
            </div>
        </>
    );
};

export default Recommend;
