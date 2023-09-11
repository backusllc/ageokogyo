import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { Link } from 'gatsby';

import { sprinkles } from '../../../styles/sprinkles.css';
import { imgWrap, img, pCategory, p, price } from './ProductCard.css'
import { useScrollToHash } from '../../../hooks/useScrollToHash';

interface Props {
    isScroll: boolean;
    isDiaplayViewAll: boolean;
    products: any;
}

const ProductCard = ({ isScroll, isDiaplayViewAll, products }: Props) => {
    const [ref, moveTo] = useScrollToHash();

    useEffect(() => {
    }, []);
    useLayoutEffect(() => {
        if (isScroll) {
            moveTo();
        }
    }, [isScroll]);


    const flexDiv = sprinkles({
        display: {
            mobile: 'block',
            tablet: 'flex',
            desktop: 'flex',
        },
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        gap: '10',
    })

    const itemDiv = sprinkles({
        width: {
            mobile: '100%',
            tablet: '50%',
            desktop: '30%',
        },
    })

    return (
        <>
            <div key={products.node.id}
                style={{

                }}
            >
                <div id={products.node.description}
                    ref={ref}
                    style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        paddingTop: '100px',
                        marginTop: '-100px'
                    }}>
                    <p className={pCategory} > {products.node.title}</p>
                    {isDiaplayViewAll && <div><Link to={`/product_category`} style={{ fontWeight: '700' }}>VIEW ALL ＞</Link></div>}
                </div>

                <div className={flexDiv}>
                    {products.node.products.edges.map((product, index) => {
                        return (
                            <div key={index} className={itemDiv}>
                                <Link to={`/products/${product.node.id.slice(product.node.id.lastIndexOf('/') + 1)}`}>
                                    <div className={imgWrap}>
                                        <img className={img} src={product.node.images.edges[0]?.node.transformedSrc} alt={product.node.title} />
                                    </div>
                                    <p className={p}>{product.node.title}</p>
                                    <p className={price}>{`${parseInt(product.node.priceRange.minVariantPrice.amount, 10).toLocaleString()}円 (税込)`}</p>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default ProductCard;
