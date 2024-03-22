import React from 'react';
import { titleWrap, titleEnglish, titleJapanese } from './index.css';

interface Props {
  titleEn: string;
  titleJa: String;
}

export const Title = ({ titleEn, titleJa }: Props) => {
  return (
    <div className={titleWrap}>
      <p className={titleEnglish}>{titleEn}</p>
      <h2 className={titleJapanese}>{titleJa}</h2>
    </div>
  );
};
