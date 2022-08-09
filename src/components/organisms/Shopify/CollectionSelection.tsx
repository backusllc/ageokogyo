import React, { useContext, useEffect } from 'react';
import { Link } from 'gatsby';
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
                        <Link key={index} to={`/${collection.description}`} style={{ color: "#fff" }}>
                            {collection.title}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CollectionSelection;
