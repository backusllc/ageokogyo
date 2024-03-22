import React from "react";
import SEO from "../utils/seo";

const title = "特定商取引法に基づく表記 | 上尾工業株式会社";
const description =
  "特定商取引法に基づく表記一覧ページ。シティサイクル · スポーツサイクル · CTB自転車 · 幼児用自転車 · 子供用自転車 · 三輪車 · 折りたたみ自転車 · きかんしゃトーマスなどの自転車製品を販売しています。";
const image = `https://cdn.shopify.com/s/files/1/0582/1831/5820/files/logo_256x256.gif?v=1658329876`;
const isArticle = false;

export default function tokushohou() {
  return (
    <>
      <SEO title={title} description={description} image={image} article={isArticle} />
      <div className="term_page">
        <h1>特定商取引法に基づく表記</h1>
        <div id="main_contents">
          <table>
            <tbody>
              <tr>
                <th>販売業者</th>
                <td>上尾工業株式会社</td>
              </tr>
              <tr>
                <th>代表責任者</th>
                <td>前田泰世</td>
              </tr>
              <tr>
                <th>所在地</th>
                <td>
                  <p>〒362-0806, 埼玉県 北足立郡 伊奈町小室９９７３, 日本</p>
                </td>
              </tr>
              <tr>
                <th>電話番号</th>
                <td>048-721-0318</td>
              </tr>
              <tr>
                <th>メールアドレス</th>
                <td>toiawase@ageokogyo.com</td>
              </tr>
              <tr>
                <th>商品代金以外の必要料金</th>
                <td>
                  <ul>
                    <li>送料別途の注釈がある商品の送料</li>
                    <li>外税表記の場合の消費税</li>
                    <li>支払い方法種別による手数料等（代金引換手数料、振込手数料、支払分割手数料、利息等）</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>支払方法および支払の時期</th>
                <td>
                  <ul>
                    <li>銀行振込（前払い）</li>
                    <li>クレジットカード</li>
                    <li>代金引換</li>
                    <li>コンビニ決済（前払い）</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>商品の引渡時期</th>
                <td>決済が完了した日から起算して、14日以内の出荷</td>
              </tr>
              <tr>
                <th>商品の引渡方法</th>
                <td>配送業者による配送、自社配送のいずれか（業者・配送種別の指定はお受けしておりません。）</td>
              </tr>
              <tr>
                <th>返品・不良品・キャンセルについて</th>
                <td>利用規約、返金ポリシー、配送ポリシーに準じます。</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
