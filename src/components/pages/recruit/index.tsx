import React from "react";

import { OgGatsbyBanner } from "../../organisms";
import { McBreadcrumbs } from "../../molecules";
import { recruitContainer, recruitPage, recruitInner } from "./index.css";
import LinkButton from "../../../components/organisms/Shopify/LinkButton";
import { Title } from "../../../components/molecules/Title";
import { MoreButton } from "../../../components/molecules/MoreButton";

interface Props {
  pageData: any;
  data: any;
}

const Recruit = ({ pageData, data }: Props) => {
  return (
    <div className={`${recruitPage} recruit`}>
      <OgGatsbyBanner
        image={data.allFile.edges[0].node.childrenImageSharp[0]}
        alt={data.allFile.edges[0].node.name}
        titleJa={"採用情報"}
        titleEn={"RECRUIT"}
        link=""
        maxWidth={"full"}
        marginBottom={"10"}
      />
      <McBreadcrumbs
        listItems={[
          { name: "HOME", url: "/" },
          { name: "RECRUIT", url: "/recruit" },
        ]}
      />
      <div className={recruitContainer}>
        <Title titleEn={"JOB DESCRIPTION"} titleJa={"募集要項"} />
        <div className={recruitInner}>
          <div className="description" dangerouslySetInnerHTML={{ __html: pageData.page.body }} />
          <MoreButton buttonText="お問い合わせフォームへ" url="/contact" isPrimary={true} />
        </div>
      </div>
    </div>
  );
};

export default Recruit;
