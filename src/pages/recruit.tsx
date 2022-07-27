import React from 'react';
import {
    OgBanner,
    OgMegaHeader,
} from '../components/organisms';
import Footer from '../components/organisms/Shopify/Footer';
import LinkButton from '../components/organisms/Shopify/LinkButton';

export default function recruit() {

    return (
        <>
            <div className="page">
                <OgBanner imageUrl='https://cdn.shopify.com/s/files/1/0582/1831/5820/files/img_recruit_header.png?v=1658583318' link="" maxWidth={"full"} marginBottom={"80"} />
                <div className="inner">
                    <h2>募集要項</h2>
                    <h3>正社員募集</h3>
                    <table>
                        <tbody>
                            <tr style={{ borderTop: "1px solid ##D9D9D9", borderBottom: "1px solid ##D9D9D9" }}>
                                <th>仕事内容</th>
                                <td>自転車メーカーの営業です。<br />
                                    自転車を通して、ドキドキやわくわくをお客様にお届けしませんか？<br />
                                    また貴方のアイデアが採用された自転車が製品化されるかもしれません。ぜひ私たちと一緒に製品の向こうの笑顔をお届けしましょう！<br />
                                </td>
                            </tr>
                            <tr>
                                <th>資格</th>
                                <td><ul>
                                    <li>既卒第二新卒歓迎</li>
                                    <li>シニア歓迎</li>
                                    <li>英語力不問</li>
                                    <li>未経験OK</li>
                                    <li>学歴不問</li>
                                    学歴不問 / 未経験OK<br />
                                    自転車整備士あれば可
                                </ul>
                                </td>
                            </tr>
                            <tr>
                                <th>給与</th>
                                <td>月給　230,000円　～　280,000円　（※想定年収　2,800,000円　～　3,500,000円）<br />
                                    ※試用期間は６ヶ月で、その間の雇用形態は契約社員です。そのほかの条件に変更はありません。<br />
                                    上記額にはみなし残業代（月１５時間分２００００円分）を含みます。※超過分は全額支給します</td>
                            </tr>
                            <tr>
                                <th>勤務時間</th>
                                <td>8:30 ～ 17:00<br />
                                    実働時間7時間半<br />
                                    時間外労働15時間未満</td>
                            </tr>
                            <tr>
                                <th>休日</th>
                                <td>
                                    ◇ 年末年始休暇<br />
                                    ◇ 夏季休暇
                                </td>
                            </tr>
                            <tr>
                                <th>勤務地</th>
                                <td>埼玉県北足立郡伊奈町小室９９７３（最寄駅：伊奈中央）<br />
                                    ＊転勤はありません
                                </td>
                            </tr>
                            <tr>
                                <th>アクセス</th>
                                <td>伊奈中央駅から徒歩10分<br />
                                    会社から無料自転車貸与あり。</td>
                            </tr>
                            <tr>
                                <th>福利厚生</th>
                                <td>
                                    ◇ 雇用保険<br />
                                    ◇ 厚生年金<br />
                                    ◇ 健康保険<br />
                                    ◇ 労災保険<br />
                                    ◇ 交通費支給あり<br />
                                    ◇ 資格取得支援・手当あり<br />
                                </td>
                            </tr>
                            <tr>
                                <th>応募方法</th>
                                <td>
                                    下記お問合せフォームからご連絡ください。
                                </td>
                            </tr>
                        </tbody>
                    </table >
                </div>
                <LinkButton link="/contact" text="お問合せフォームへ" />
            </div>
        </>
    )
}
