import { ShopifyContext } from '../../../context/shopifyContext';
import React, { useContext } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";

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
                <td style={{ width: '20%' }}>
                    {imageItem}
                </td>
                <td style={{ verticalAlign: "inherit", width: '50%' }}>
                    <p className="has-text-weight-semibold is-size-5 has-text-black">{line_item.title} ({line_item.variant.title}) </p>
                </td>
                <td style={{ verticalAlign: "inherit", width: '10%', textAlign: 'center' }}>
                    <div style={{ marginBottom: "1rem" }}>{line_item.quantity}</div>
                    <div>
                        <FaRegTrashAlt onClick={removeItem} />
                    </div>
                    {/* <button className="has-text-weight-normal has-text-danger link-button" type="button" onClick={removeItem}>Remove</button> */}
                </td>
                <td style={{ verticalAlign: "inherit", width: '10%' }}>
                    {`￥${(parseInt(line_item.quantity * line_item.variant.price, 10)).toFixed(0)}`}
                </td>
            </tr>
        </>
    );
};

export default CartProduct;
