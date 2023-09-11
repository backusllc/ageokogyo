import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';

import { sprinkles } from '../../../styles/sprinkles.css';
import { wrapDiv, img, pCategory, p, price } from './CategoryProducts.css'
import ProductCard from '../../../components/organisms/Shopify/ProductCard';
import { useCollectionProductsSettings } from '../../../hooks/useCollectionProductsSettings';

interface Props {
    displayCount?: number,
    isDiaplayViewAll: boolean,
}

const CollectionSelection = ({ displayCount = 3, isDiaplayViewAll = false }: Props) => {
    const [hashId, setId] = useState<string>();

    const { loading: collectionProductLoading, data: collectionProductLists } = useCollectionProductsSettings(displayCount);

    useEffect(() => {
        setId(window.location.hash.replace("#", ""));
    }, []);

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
                {collectionProductLists.collections.edges.map((products, index) => {
                    if (products.node.products.edges.length === 0) return <></>

                    return <>
                        <ProductCard
                            isScroll={products.node.description === hashId}
                            isDiaplayViewAll={isDiaplayViewAll}
                            products={products} />
                    </>
                })}
            </div>
        </>
    );
};

export default CollectionSelection;
