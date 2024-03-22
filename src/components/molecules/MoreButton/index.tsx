import { Link } from "gatsby";
import React from "react";
import { buttonWrap, primaryButton, secondaryButton } from "./index.css";

interface Props {
  buttonText: string;
  url: string;
  isPrimary?: boolean;
}

export const MoreButton = ({ url, buttonText, isPrimary = false }: Props) => {
  const buttonClass = isPrimary ? `${buttonWrap} ${primaryButton}` : `${buttonWrap} ${secondaryButton}`;

  return (
    <Link to={url} className={buttonClass}>
      {buttonText}
    </Link>
  );
};
