import React, { useContext, useEffect } from 'react';
import { ShopifyContext } from '../../../context/shopifyContext';

const CollectionSelection = () => {

    const { fetchAllCollections, collections } = useContext(ShopifyContext)

    useEffect(() => {
        asyncFetchAllCollections();
        return () => {
        };
    }, []);

    async function asyncFetchAllCollections() {
        try {
            await fetchAllCollections();
        }
        catch (error) {
        }
    };


    if (!collections) return <div></div>;

    return (
        <>
            <div style={{ backgroundColor: "#555555", marginBottom: "4rem" }}>
                <div style={{ display: "flex", gap: "1rem", justifyContent: "space-between", padding: "1rem 0" }} className="inner">
                    {collections.map((collection, index) => (
                        < a key={index} href={collection.description} style={{ color: "#fff" }}>
                            {collection.title}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CollectionSelection;
