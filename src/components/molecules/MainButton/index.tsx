import { Link } from "gatsby";
import React from "react";
import { button, buttonWrap } from "./index.css";

interface Props {
  buttonText: string;
}

export const MainButton = ({ buttonText }: Props) => {
  return (
    <div className={buttonWrap}>
      <button className={button} type="submit">
        {buttonText}
      </button>
    </div>
  );
};
