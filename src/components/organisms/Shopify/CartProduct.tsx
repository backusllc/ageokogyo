import { ShopifyContext } from '../../../context/shopifyContext';
import React, { useContext } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { totalTd, ammountTd, nameTd, imageTd } from './CartProduct.css'

const CartProduct = ({ key, line_item }) => {

    const { checkout, removeCheckoutItem } = useContext(ShopifyContext)

    const imageItem = line_item.variant.image && (
        <figure className="image is-96x96" style={{ margin: "auto" }}>
            <img
                src={line_item.variant.image.src}
                alt={line_item.variant.image.altText}
            />
        </figure>
    )

    const removeItem = () => {
        removeCheckoutItem(checkout.id, line_item.id)
    }

    return (
        <>
            <tr className="is-hidden-touch">
                <td className={imageTd}>
                    {imageItem}
                </td>
                <td className={nameTd}>
                    <p className="has-text-weight-semibold is-size-5 has-text-black">{line_item.title}
                        {
                            line_item.variant.title != "Default Title" ? `(${line_item.variant.title})` : null
                        }
                    </p>
                </td>
                <td className={ammountTd}>
                    <div style={{ marginBottom: "1rem" }}>{line_item.quantity}</div>
                    <div>
                        <FaRegTrashAlt onClick={removeItem} />
                    </div>
                </td>
                <td className={totalTd}>
                    {`￥${(parseInt(line_item.quantity * line_item.variant.price, 10)).toFixed(0)}`}
                </td>
            </tr>
        </>
    );
};

export default CartProduct;
