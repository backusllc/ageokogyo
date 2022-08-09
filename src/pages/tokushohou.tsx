import React from 'react';

export default function tokushohou() {

    return (
        <>
            <div className="inner term_page">
                <h1>特定商取引法に基づく表記</h1>
                <div id="main_contents">
                    <table>
                        <tbody>
                            <tr>
                                <th>ショップ名</th>
                                <td>上尾工業株式会社</td>
                            </tr>
                            <tr>
                                <th>販売業者</th>
                                <td>上尾工業株式会社</td>
                            </tr>
                            <tr>
                                <th>運営統括責任者</th>
                                <td>前田　泰世</td>
                            </tr>
                            <tr>
                                <th>所在地</th>
                                <td>
                                    <p>〒362-0806<br />埼玉県北足立郡伊奈町小室9973番地</p>
                                </td>
                            </tr>
                            <tr>
                                <th>電話番号</th>
                                <td>048-721-0318
                                </td>
                            </tr>
                            <tr>
                                <th>メールアドレス</th>
                                <td>inf@ageokogyo.com</td>
                            </tr>
                            <tr>
                                <th>お支払方法</th>
                                <td>
                                    <ul>
                                        <li>クレジットカード</li>
                                        {/* <li>銀行振込</li>
                                        <li>コンビニエンスストア（先払い/後払い）</li> */}
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th>商品代金以外の必要料金</th>
                                <td>
                                    <ul>
                                        {/* <li>コンビニ支払い手数料</li> */}
                                        {/* <li>銀行振込手数料</li> */}
                                        <li>消費税（商品代金に含んで表示）</li>
                                        <li>送料</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th>お支払時期・期限</th>
                                <td>
                                    <ul>
                                        <li>クレジットカード：決済時（クレジットカード会社ごとに異なります）</li>
                                        {/* <li>銀行振込：ご注文後7日以内</li>
                                        <li>コンビニエンスストア：ご注文後3日以内（前払い）</li> */}
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th>引き渡し時期</th>
                                <td>お支払い確認後X日以内に発送</td>
                            </tr>
                            <tr>
                                <th>返品</th>
                                <td>商品到着よりX日以内</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
