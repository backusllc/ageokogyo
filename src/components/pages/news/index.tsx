import React from "react";

import { OgGatsbyBanner } from "../../organisms";
import { McBreadcrumbs } from "../../molecules";
import { newsContainer } from "./index.css";
import NewsLists from "../../../components/organisms/Shopify/NewsLists";

interface Props {
  data: any;
}

const News = ({ data }: Props) => {
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
        ]}
      />
      <div className={newsContainer}>
        <NewsLists count={100} isDisplayMoreButton={false} />
      </div>
    </>
  );
};

export default News;
