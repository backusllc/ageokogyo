import React, { useContext, useEffect, useState } from 'react';
import dateFormat from "dateformat";

import SEO from '../../utils/seo';
import LinkButton from '../../components/organisms/Shopify/LinkButton';
import {
    OgBanner,
    OgMegaHeader,
} from '../../components/organisms';
import { useSingleArticleSettings } from '../../hooks/useSingleArticleSettings'

const NewsPage = (props: any) => {
    const name = props.params.name;
    const { loading: articleLoading, data: articleData } = useSingleArticleSettings(name);

    if (articleLoading) return <div></div>;

    return (
        <>
            <OgBanner imageUrl='https://cdn.shopify.com/s/files/1/0582/1831/5820/files/img_news.png?v=1658567232' link="" maxWidth={"full"} marginBottom={'80'} />
            {articleData.blogs.edges.map(article => {
                return (
                    article.node.articleByHandle ?
                        (
                            <div className="inner">
                                <div style={{ display: "flex", justifyContent: "flex-start", gap: "2rem", height: "3rem", marginBottom: "1.8rem" }}>
                                    <label style={{
                                        fontSize: "15px",
                                        verticalAlign: "middle",
                                        alignSelf: "center",
                                        backgroundColor: "#555555",
                                        color: "#fff",
                                        padding: "0.25rem 1.5rem",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        width: "110px"
                                    }}>{article.node.title}</label>
                                    <p style={{
                                        fontSize: "15px",
                                        margin: "0",
                                        alignSelf: "center",
                                        whiteSpace: "nowrap",
                                        width: "100px",
                                        overflow: "hidden",
                                        fontWeight: "700",
                                    }}>{dateFormat(article.node.articleByHandle.publishedAt, "yyyy/mm/dd")}</p>
                                </div>
                                <div style={{ marginBottom: "1.25rem" }}>
                                    <h2 style={{ fontSize: "1.5rem", fontWeight: "700" }}>{article.node.articleByHandle.title}</h2>
                                </div>
                                <div style={{
                                    marginBottom: "7rem",
                                    padding: "1.5rem 0 4.5rem 0",
                                    borderTop: "solid 1px #D9D9D9",
                                    borderBottom: "solid 1px #D9D9D9",
                                }}>
                                    <p className='description'
                                        dangerouslySetInnerHTML={{ __html: article.node.articleByHandle.contentHtml }}
                                    />
                                </div>
                            </div>
                        ) : null
                )
            })
            }
            <LinkButton link="news" text="← お知らせ一覧に戻る" />
        </>
    )
}

export default NewsPage;
