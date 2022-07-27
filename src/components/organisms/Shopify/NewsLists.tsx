import React, { useContext, useEffect } from 'react';
import dateFormat from "dateformat";
import { useBlogSettings } from '../../../hooks/useBlogSettings'


import { ShopifyContext } from '../../../context/shopifyContext';

const NewsLists = () => {
    const { loading: articleLoading, data: articleLists } = useBlogSettings();

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
    if (articleLoading) { return <div></div>; }

    return (
        <>
            <ul >
                {articleLists.articles.edges.map((item, index) => {
                    return <>
                        <div key={item.node.handle} style={{ maxWidth: "768px", margin: "0 auto 1rem auto" }}>
                            <a href={`news/${item.node.handle}`} style={{ display: "flex", justifyContent: "flex-start", gap: "1rem", flexWrap: 'wrap' }}>
                                <label style={{
                                    fontSize: "15px",
                                    verticalAlign: "middle",
                                    alignSelf: "center",
                                    backgroundColor: "#555555",
                                    color: "#fff",
                                    padding: "0.25rem 1.5rem",
                                    width: "110px"
                                }}>{item.node.blog.title}</label>
                                <p style={{
                                    fontSize: "15px",
                                    margin: "0",
                                    alignSelf: "center",
                                    width: "100px",
                                    fontWeight: "700",
                                }}>{dateFormat(item.node.publishedAt, "yyyy/mm/dd")}</p>
                                <p style={{
                                    margin: "0",
                                    alignSelf: "center",
                                    display: "block",
                                    width: '100%',
                                }}>{item.node.title}</p>
                            </a>
                            <hr />
                        </div>
                    </>
                })
                }
            </ul>
        </>
    );
};

export default NewsLists;
