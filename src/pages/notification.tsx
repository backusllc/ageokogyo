import React from "react";

import { useShopSettings } from "../hooks/useShopSettings";
import SEO from "../utils/seo";

const title = "利用規約 | 上尾工業株式会社";
const description =
  "利用規約一覧ページ。シティサイクル · スポーツサイクル · CTB自転車 · 幼児用自転車 · 子供用自転車 · 三輪車 · 折りたたみ自転車 · きかんしゃトーマスなどの自転車製品を販売しています。";
const image = `https://ageokogyo.com/logo.jpg`;
const isArticle = false;

export default function notification() {
  const { loading: shopLoading, data: shopData } = useShopSettings();

  if (shopLoading) return <></>;

  return (
    <>
      <SEO title={title} description={description} image={image} article={isArticle} />
      <div className="term_page">
        <h1>利用規約</h1>
        <div className="description" dangerouslySetInnerHTML={{ __html: shopData.shop.termsOfService.body }} />
      </div>
    </>
  );
}
