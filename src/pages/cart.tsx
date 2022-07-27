import { ShopifyContext } from '../context/shopifyContext';
import React, { useContext } from 'react';
import CartProduct from '../components/organisms/Shopify/CartProduct';
import { OgMegaHeader } from '../components/organisms';


export default function cart() {

    const { checkout } = useContext(ShopifyContext)

    if (!checkout) return <div></div>;

    return (
        <>
            <div className="inner">
                <h1>あなたのカート</h1>
                <table>
                    <thead>
                        <tr>
                            <th>商品</th>
                            <th> </th>
                            <th>数量</th>
                            <th>合計</th>
                        </tr>
                    </thead>
                    {
                        checkout.lineItems[0] ?
                            <>
                                {console.log(checkout.lineItems[0])}
                                <tbody>
                                    {
                                        checkout.lineItems.map(line_item => {
                                            return <CartProduct key={line_item.id} line_item={line_item} />
                                        })
                                    }
                                </tbody>
                                <a className="button is-medium is-dark" href={checkout.checkoutUrl}>Checkout</a>
                            </> :
                            <>
                                <div>
                                    <div>カートは空です</div>
                                    <a href="/product_category">買い物を続ける</a>
                                </div>

                            </>
                    }
                </table>
            </div>
        </>
    );
}


