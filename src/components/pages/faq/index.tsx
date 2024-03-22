import React from "react";

import { OgGatsbyBanner } from "../../organisms";
import { McBreadcrumbs } from "../../molecules";
import { faqContainer } from "./index.css";

interface Props {
  pageData: any;
  data: any;
}

const Faq = ({ pageData, data }: Props) => {
  return (
    <div>
      <OgGatsbyBanner
        image={data.allFile.edges[0].node.childrenImageSharp[0]}
        alt={data.allFile.edges[0].node.name}
        titleJa={"よくある質問"}
        titleEn={"FAQ"}
        link=""
        maxWidth={"full"}
        marginBottom={"10"}
      />
      <McBreadcrumbs
        listItems={[
          { name: "HOME", url: "/" },
          { name: "FAQ", url: "/faq" },
        ]}
      />
      <div className={faqContainer}>
        <div className="faq" dangerouslySetInnerHTML={{ __html: pageData.page.body }} />
      </div>
    </div>
  );
};

export default Faq;
