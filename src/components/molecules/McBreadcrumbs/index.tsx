import React from "react";
import { Link } from "gatsby";
import { breadcrumb, li, item } from "./index.css";

interface Props {
  listItems: { name: string; url: string }[];
}

export const McBreadcrumbs = ({ listItems }: Props) => {
  return (
    <ol className={`${breadcrumb} inner breadcrumbs`} itemScope itemType="https://schema.org/BreadcrumbList">
      {listItems.map((listItem, index) => (
        <li className={li} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" key={index}>
          {listItem.url ? (
            <Link itemProp="item" to={listItem.url}>
              <span className={item} itemProp="name">
                {listItem.name}
              </span>
            </Link>
          ) : (
            <span className={item} itemProp="name">
              {listItem.name}
            </span>
          )}
          <meta itemProp="position" content={`${index + 1}`} />
        </li>
      ))}
    </ol>
  );
};
