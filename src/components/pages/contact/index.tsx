import React from "react";

import { OgGatsbyBanner } from "../../../components/organisms";
import { McBreadcrumbs } from "../../../components/molecules";
import Form from "../../../components/organisms/Shopify/Form";
import { contentContainer } from "./index.css";

interface Props {
  data: any;
}

const Contact = ({ data }: Props) => {
  return (
    <>
      <OgGatsbyBanner
        image={data.allFile.edges[0].node.childrenImageSharp[0]}
        alt={data.allFile.edges[0].node.name}
        titleJa={"お問い合わせ"}
        titleEn={"CONTACT"}
        link=""
        maxWidth={"full"}
        marginBottom={"10"}
      />
      <McBreadcrumbs
        listItems={[
          { name: "HOME", url: "/" },
          { name: "CONTACT", url: "/contact" },
        ]}
      />
      <div className={contentContainer}>
        <Form />
      </div>
    </>
  );
};

export default Contact;
