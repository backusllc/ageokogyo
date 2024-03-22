import React from "react";
import { titleWrap, titleEnglish, titleJapanese } from "./index.css";

interface Props {
  titleEn?: string;
  titleJa?: String;
}

export const MainTitle = ({ titleEn, titleJa }: Props) => {
  return (
    <div className={titleWrap}>
      <p className={titleEnglish}>{titleEn}</p>
      <h1 className={titleJapanese}>{titleJa}</h1>
    </div>
  );
};
