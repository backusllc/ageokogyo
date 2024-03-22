import React, { FC } from "react";
import { toggleBtn, bar } from "./index.css";

interface Props {
  onClick: () => void;
}

export const AtHumbergerButton = (props: Props) => {
  return (
    <div className={toggleBtn} onClick={props.onClick}>
      <span className={bar}></span>
      <span className={bar}></span>
      <span className={bar}></span>
    </div>
  );
};
