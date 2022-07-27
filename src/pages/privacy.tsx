import React from 'react';
import { ShopifyContext } from './../context/shopifyContext';
import {
    OgBanner,
    OgMegaHeader,
} from '../components/organisms';
import NewsLists from '../components/organisms/Shopify/NewsLists';
import Footer from '../components/organisms/Shopify/Footer';
import { useCollectionProductsSettings } from '../hooks/useCollectionProductsSettings';

export default function informatino() {

    return (
        <>
            {/* <OgBanner imageUrl='https://cdn.shopify.com/s/files/1/0582/1831/5820/files/img_news.png?v=1658567232' link="" maxWidth={"full"} marginBottom={"80"} /> */}
            <div className="inner term_page">
                <h1>個人情報保護方針</h1>
                <div>
                    <p style={{ textAlign: "right" }}>2013年 12月 6日</p>
                    <p style={{ textAlign: "right" }}>上尾工業株式会社</p>
                    <p>上尾工業株式会社(以下、「当社」とします)は、当社の業務実態に応じた個人情報保護のために努力し、広く社会からの信頼を得るために、以下のとおり個人情報保護方針を定め、個人情報の保護に努めます。</p>
                    <p style={{ textAlign: "center" }}>記</p>
                    <p>当社は、個人情報について、関係法令その他の規範の定めるところに従い、適切にこれを取り扱います。 </p>
                    <ul>
                        <li>1. 個人情報の適切な収集、利用、提供、委託 </li>
                        <ul>
                            <li><span>●</span><span>個人情報の収集にあたっては、利用目的を明示した上で、必要な範囲の情報を収集し、利用目的を通知または公表し、その範囲内で利用します。</span></li>
                            <li><span>●</span><span>収集した個人情報は、次の場合を除き、第三者に提供または開示することはしません。</span></li>
                            <ul>
                                <li>(1) あらかじめ本人の同意を得た場合 </li>
                                <li>(2) 個人情報保護の保護に関する法律第23条第2項(オプトアウト)ないし同第3項(共同利用)の方法による場合</li>
                                <li>(3) 法令等の規定に従い、提供または開示する場合 </li>
                            </ul>
                            <li><span>●</span><span>個人情報を第三者に委託して利用する場合は、当該第三者における安全管理措置の状況等に照らし、委託を行うことの適切性を検討し、委託先への適切な監督をします。</span></li>
                        </ul>
                        <li>2. 個人情報の安全管理措置 </li>
                        <ul>
                            <li>個人情報への不正アクセス、個人情報の漏えい、滅失、またはき損の予防及び是正のため、当社内において安全対策に努めます。</li>
                        </ul>
                        <li>3. 改善措置 </li>
                        <ul>
                            <li>個人情報の取扱いに関する社会環境の変化に的確に対応するよう努めます。また必要に応じて本方針を変更、修正、または追加を行うなど、改善をするよう努めます。 </li>
                        </ul>
                        <li>4. 開示、訂正請求等への対応</li>
                        <ul>
                            <li>当社が本個人情報保護方針を遵守していないと思われる場合、及び本人の個人情報の開示、訂正、追加または削除、利用停止などを希望される場合には、コチラにてお問い合わせください。合理的な期間、妥当な範囲内でこれに対応いたします。</li>
                        </ul>
                        <li>5. 苦情の処理 </li>
                        <ul>
                            <li>当社は、個人情報取扱に関する苦情に対し、適切かつ迅速な処理に努めます。</li>
                        </ul>
                    </ul>
                </div>
            </div>
        </>
    )
}
