import React from "react";

import { OgGatsbyBanner } from "../../organisms";
import { McBreadcrumbs } from "../../molecules";
import { companyContainer } from "./index.css";

interface Props {
  pageData: any;
  data: any;
}

const Company = ({ pageData, data }: Props) => {
  return (
    <div className="company">
      <OgGatsbyBanner
        image={data.allFile.edges[0].node.childrenImageSharp[0]}
        alt={data.allFile.edges[0].node.name}
        titleJa={"会社概要"}
        titleEn={"COMPANY"}
        link=""
        maxWidth={"full"}
        marginBottom={"10"}
      />
      <McBreadcrumbs
        listItems={[
          { name: "HOME", url: "/" },
          { name: "COMPANY", url: "/company" },
        ]}
      />
      <div className={`${companyContainer} description`}>
        <p className="titleEn">DETAIL</p>
        <h2 className="titleJa">企業情報</h2>
        <table>
          <tbody>
            <tr>
              <th>社名</th>
              <td>上尾工業株式会社</td>
            </tr>
            <tr>
              <th>英字</th>
              <td>ＡＧＥＯＫＯＧＹＯ　ＣＯ.,ＬＴＤ．</td>
            </tr>
            <tr>
              <th>設立年月日</th>
              <td>昭和３９年４月２５日</td>
            </tr>
            <tr>
              <th>資本金</th>
              <td>￥8,000万</td>
            </tr>
            <tr>
              <th>代表者名</th>
              <td>
                <p>前田　和一</p>
                <p>前田　泰世</p>
              </td>
            </tr>
            <tr>
              <th>従業員数</th>
              <td>１０名</td>
            </tr>
            <tr>
              <th>事業内容</th>
              <td>
                自転車、幼児用乗物及び遊戯用品の製造販売
                <br /> 上記に付帯関連する一切の業務
              </td>
            </tr>
            <tr>
              <th>住所</th>
              <td>埼玉県北足立郡伊奈町小室９９７３番地</td>
            </tr>
            <tr>
              <th>取引銀行</th>
              <td>
                <p>三井住友銀行　　　　　桶川支店</p>
                <p>三菱東京ＵＦＪ銀行　　上尾支店</p>
                <p>埼玉りそな銀行　　　　上尾支店</p>
                <p>群馬銀行　　　　　　　大宮支店　　他</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="titleEn">MAP</p>
        <h2 className="titleJa map">本社周辺マップ</h2>
        {/* <iframe loading="lazy" height="450" width="600" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25937.19376882076!2d140.111233!3d35.648695!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018c8ac8dfb9fb3%3A0xd42bc8504d780cb!2z5LiK5bC-5bel5qWtKOagqik!5e0!3m2!1sja!2sjp!4v1658800756773!5m2!1sja!2sjp" marginbottom:="" border:=""></iframe> */}
        <p className="titleEn">CUSTOMER</p>
        <h2 className="titleJa">主な取引先 【販売先】敬称略</h2>
        <ul>
          <li>株式会社　西友</li>
          <li>日本トイザらス株式会社</li>
          <li>株式会社　良品計画</li>
          <li>アークランズ株式会社</li>
          <li>株式会社　スーパーバリュー</li>
          <li>株式会社　あさひ</li>
          <li>株式会社　セキチュー</li>
        </ul>
        <p className="titleEn">HISTORY</p>
        <h2 className="titleJa">沿革</h2>
        <ul className="timeline">
          <li>
            <div className="timeline-content">
              <p className="timeline-period">昭和３９年４月</p>
              <p>
                東京都中野区に於いて、基本金1,000万円で設立
                <br /> オートバイ用シートの製造開始
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <p className="timeline-period">昭和４１年４月</p>
              <p>
                埼玉県北足立郡伊奈町に3,000㎡の工場用地を購入
                <br /> 新工場を設立し、本社工場とする
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <p className="timeline-period">昭和４８年７月</p>
              <p>本店を埼玉県朝霞市栄町３丁目７番７号に移転</p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <p className="timeline-period">昭和４９年１０月</p>
              <p>アコーブランド幼児用自転車及び幼児用乗物の製造販売を開始</p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <p className="timeline-period">昭和５１年１０月</p>
              <p>資本金を3,000万円に増資</p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <p className="timeline-period">昭和５６年５月</p>
              <p>
                日本工業規格(ＪＩＳ)表示許可工場に認定される
                <br /> (幼児用自転車・許可番号第381027号)
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <p className="timeline-period">昭和５６年９月</p>
              <p>製品安全協会(ＳＧ)認定工場となる</p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <p className="timeline-period">昭和５７年６月</p>
              <p>東京中小企業投資育成会社の助成により資本金を6,000万円に増資</p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <p className="timeline-period">昭和５７年１２月</p>
              <p>資本金を8,000万円に増資</p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <p className="timeline-period">平成元年５月</p>
              <p>
                埼玉県川越市芳野台に新工場を建設し、川越工場として開設、
                <br /> 自動車用内装部品の製造を開始
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <p className="timeline-period">平成３年８月</p>
              <p>本店を埼玉県北足立郡伊奈町小室９９７３番地に移転</p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <p className="timeline-period">平成４年８月</p>
              <p>アミューズメント事業に進出し、ゲーム機製造を開始</p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <p className="timeline-period">平成６年１１月</p>
              <p>甲種電気用品製造の認定工場となる</p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <p className="timeline-period">平成９年７月</p>
              <p>ホットプレス機、成型加工機及びウレタン加工装置を導入設置</p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <p className="timeline-period">平成２０年４月</p>
              <p>
                開発事業部を廃止
                <br /> それに伴う設備機器を除却
              </p>
            </div>
          </li>
        </ul>
        {/* <div className="description" dangerouslySetInnerHTML={{ __html: pageData.page.body }} /> */}
      </div>
    </div>
  );
};

export default Company;
