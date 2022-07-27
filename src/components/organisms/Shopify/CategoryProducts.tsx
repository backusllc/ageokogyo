import React, { useContext, useEffect } from 'react';
import { sprinkles } from '../../../styles/sprinkles.css';
import { wrapDiv, img, pCategory, p, price } from './CategoryProducts.css'
import { useCollectionProductsSettings } from '../../../hooks/useCollectionProductsSettings';

interface Props {
    displayCount?: number,
    isDiaplayViewAll: boolean,
}

const CollectionSelection = ({ displayCount = 3, isDiaplayViewAll = false }: Props) => {

    const { loading: collectionProductLoading, data: collectionProductLists } = useCollectionProductsSettings(displayCount);

    if (collectionProductLoading) { return <div></div>; }

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
            <div className={`inner ${wrapDiv}`}>
                {collectionProductLists.collections.edges.map((item, index) => {

                    return <>
                        <div key={item.node.id}>
                            <div id={item.node.description} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <p className={pCategory} > {item.node.title}</p>
                                {isDiaplayViewAll && <div><a href={`./#${item.node.description}`} style={{ fontWeight: '700' }}>VIEW ALL ＞</a></div>}
                            </div>

                            <div className={flexDiv}>
                                {item.node.products.edges.map((product, index) => {
                                    return (
                                        <div key={index} className={itemDiv}>
                                            <a href={`/products/${product.node.id}`}>
                                                <img className={img} src={product.node.images.edges[0].node.transformedSrc} alt={product.node.title} />
                                                <p className={p}>{product.node.title}</p>
                                                <p className={price}>{`${parseInt(product.node.priceRange.minVariantPrice.amount, 10)}円 (税込)`}</p>
                                            </a>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </>
                })}
            </div>
        </>
    );
};

export default CollectionSelection;
