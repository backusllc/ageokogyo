import React from 'react';
import { ShopifyContext } from './../context/shopifyContext';
import {
    OgBanner,
    OgMegaHeader,
} from '../components/organisms';
import NewsLists from '../components/organisms/Shopify/NewsLists';
import Footer from '../components/organisms/Shopify/Footer';
import { useCollectionProductsSettings } from '../hooks/useCollectionProductsSettings';

export default function notification() {

    return (
        <>
            {/* <OgBanner imageUrl='https://cdn.shopify.com/s/files/1/0582/1831/5820/files/img_news.png?v=1658567232' link="" maxWidth={"full"} marginBottom={"80"} /> */}
            <div className="inner term_page">
                <h1>当サイトご利用にあたって</h1>
                <p>当ウェブサイトは、お客様が上尾工業株式会社（以下、「当社」とします）の運営・管理する本サイトをご利用いただくにあたって、ご注意いただく内容を記載しております。下記の「サイトの使用条件」をご一読の上、本サイトをご利用願います。</p>
                <h2>●サイトの使用条件(免責事項)</h2>
                <h3>掲載情報に関して</h3>
                <p>当ウェブサイトに掲載している情報に関して、当社は細心の注意を払っておりますが、掲載した情報に誤りがあった場合や、第三者によるデータの改ざん、データダウンロード等によって生じた障害等に関し、事由の如何を問わず、一切責任を負うものではありません。<br />
                    当ウェブサイトに掲載されている内容の著作権は原則として当社に帰属します。無断転用 ･複製を禁止します。<br />
                    当ウェブサイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について、当社は一切の責任を負いません。</p>
                <h3>ウェブサイトの運用に関して</h3>
                <p>
                    当ウェブサイトは、予告なしに運営の中断、中止や内容の変更を行うことがあります。<br />
                    また、通信環境やお客さまのコンピュータの状況その他の理由により、当ウェブサイトを正常に利用できない場合があります。これらによって生じたいかなるトラブル・損失・損害に対しても責任を負うものではないことを、あらかじめご了承下さい。
                </p>
                <h3>個人情報保護方針について</h3>
                <p>当ウェブサイトは、お客様の個人情報保護を最優先事項としております。個人情報は、当社が使用するためにのみ情報を収集し、お客様に当社の製品やサービスに関する情報を提供するために使用する場合があります。個人情報保護方針についてはコチラをご覧ください。 </p>
            </div>
        </>
    )
}
