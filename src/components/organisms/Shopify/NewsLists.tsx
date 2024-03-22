import React, { useContext, useEffect } from "react";
import { Link } from "gatsby";

// @ts-ignore
import dateFormat from "dateformat";
import { useBlogSettings } from "../../../hooks/useBlogSettings";

import { ShopifyContext } from "../../../context/shopifyContext";
import { newsSection, labelContainer, date, label, newsLink, newsList, newsLists, title } from "./NewsLists.css";
import { MoreButton } from "../../../components/molecules/MoreButton";

interface Props {
  count: number;
  isDisplayMoreButton?: boolean;
}

const NewsLists = ({ count, isDisplayMoreButton = true }: Props) => {
  const { loading: articleLoading, data: articleLists } = useBlogSettings(count);

  const { fetchAllCollections, collections } = useContext(ShopifyContext);

  useEffect(() => {
    asyncFetchAllCollections();
    return () => {};
  }, []);

  async function asyncFetchAllCollections() {
    try {
      await fetchAllCollections();
    } catch (error) {}
  }

  if (!collections) return <div></div>;
  if (articleLoading) return <div></div>;

  return (
    <>
      <section className={newsSection}>
        <ul className={newsLists}>
          {articleLists.articles.edges.map((item: any, index: number) => {
            return (
              <li key={item.node.handle} className={newsList}>
                <Link to={`/news/${item.node.handle}`} className={newsLink}>
                  <div className={labelContainer}>
                    <p className={date}>{dateFormat(item.node.publishedAt, "yyyy.mm.dd")}</p>
                    <label className={label}>{item.node.blog.title}</label>
                  </div>
                  <p className={title}>{item.node.title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
        {isDisplayMoreButton && <MoreButton url={"/news"} buttonText={"READ MORE"} />}
      </section>
    </>
  );
};

export default NewsLists;
