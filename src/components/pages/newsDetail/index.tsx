import React from "react";

import { OgGatsbyBanner } from "../../organisms";
import { McBreadcrumbs } from "../../molecules";
import dateFormat from "dateformat";
import {
  newsContainer,
  labelContainer,
  label,
  date,
  titleContainer,
  title,
  contentContainer,
  buttonContainer,
} from "./index.css";
import { MoreButton } from "../../../components/molecules/MoreButton";

interface Props {
  data: any;
  pageData: any;
}

const NewsDetail = ({ data, pageData }: Props) => {
  return (
    <>
      <OgGatsbyBanner
        image={data.allFile.edges[0].node.childrenImageSharp[0]}
        alt={data.allFile.edges[0].node.name}
        titleJa={"お知らせ"}
        titleEn={"NEWS"}
        link=""
        maxWidth={"full"}
        marginBottom={"10"}
      />
      <McBreadcrumbs
        listItems={[
          { name: "HOME", url: "/" },
          { name: "NEWS", url: "/news" },
          { name: pageData.blogs.edges[0].node.articleByHandle?.title, url: "" },
        ]}
      />
      {pageData.blogs.edges.map((article: any) => {
        return article.node.articleByHandle ? (
          <div className={newsContainer}>
            <div className={labelContainer}>
              <label className={label}>{article.node.title}</label>
              <p className={date}>{dateFormat(article.node.articleByHandle.publishedAt, "yyyy.mm.dd")}</p>
            </div>
            <div className={titleContainer}>
              <h1 className={title}>{article.node.articleByHandle.title}</h1>
            </div>
            <div className={contentContainer}>
              <p className="description" dangerouslySetInnerHTML={{ __html: article.node.articleByHandle.contentHtml }} />
            </div>
          </div>
        ) : null;
      })}
      <div className={buttonContainer}>
        <MoreButton url={"/news"} buttonText={"BACK"} />
      </div>
    </>
  );
};

export default NewsDetail;
