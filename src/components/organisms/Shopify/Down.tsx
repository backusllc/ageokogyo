import React from "react";
import cx from "classnames";
import { icon, open } from "./Down.css";

const Down = ({ isOpen }: any) => {
  const openStyle = isOpen ? open : null;

  return (
    <svg className={`${icon} ${openStyle}`} width="16" height="16" fill="#3E3E3E" viewBox="0 0 16 16">
      <path d="M14.8 4L8 9.6 1.2 4 0 5.333 8 12l8-6.667z" />
    </svg>
  );
};

export default Down;
