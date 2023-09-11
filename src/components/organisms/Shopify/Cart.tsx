import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { ShopifyContext } from '../../../context/shopifyContext';
import CartProduct from '../../../components/organisms/Shopify/CartProduct';
import { h1, th, totalWrap, h2, p, attentionSmall, small, a, empltyProductWrap, empltyProductText } from './Cart.css'
import { sprinkles } from '../../../styles/sprinkles.css';

const Cart = () => {

    const { checkout } = useContext(ShopifyContext)

    const displayWidth = sprinkles({
        width: {
            mobile: '100%',
            tablet: '100%',
            desktop: '30%',
        },
        marginLeft: 'auto',
        marginRight: 'auto',
    })

    if (!checkout) return <div></div>;

    return (
        <>
            <div className="inner">
                {
                    checkout.lineItems[0] ?
                        <>
                            <h1 className={h1}>あなたのカート</h1>
                            <table>
                                <thead>
                                    <tr>
                                        <th className={th}>商品</th>
                                        <th className={th}> </th>
                                        <th className={th}>数量</th>
                                        <th className={th}>合計</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        checkout.lineItems.map(line_item => {
                                            return <CartProduct key={line_item.id} line_item={line_item} />
                                        })
                                    }
                                </tbody>
                            </table>
                            <div className={`${totalWrap} ${displayWidth}`}>
                                <div>
                                    <div>
                                        <h2 className={h2}>小計</h2>
                                        <p className={p}>¥{parseInt(checkout.subtotalPrice).toLocaleString()}円</p>
                                    </div>
                                    <small className={small}>税込みで、配送料は購入手続き時に計算されます
                                    </small>
                                    <small className={attentionSmall} style={{ color: "red" }}>※離島・一部地域は追加送料が<br />かかる場合があります。</small>
                                </div>
                                <div >
                                    <a className={a} href={checkout.webUrl}>ご購入手続きへ
                                    </a>
                                </div>
                            </div>
                        </> : <>
                            <div className={empltyProductWrap}>
                                <div className={empltyProductText}>カートは空です</div>
                                <Link className={`${a} ${displayWidth}`} to="/product_category" target={'_blank'}>買い物を続ける</Link>
                            </div>
                        </>
                }
            </div>
        </>
    );
}

export default Cart;
