

import React, { useContext, useState } from 'react';
import Gallery from './../../organisms/Shopify/Gallery';
import Buttons from './../../organisms/Shopify/Buttons';
import ContactButtons from './../../organisms/Shopify/ContactButtons';
import QuantityButton from './../../organisms//Shopify/QuantityButton';
import VariantSelectors from './../../organisms//Shopify/VariantSelectors';
import { ShopifyContext } from './../../../context/shopifyContext';
import { sprinkles } from '../../../styles/sprinkles.css';
import Recommend from './Recommend';

interface Props {
    product: any,
    isDispalyRecommend: boolean,
    productId?: string,
}

const ProductDetail = ({ product, isDispalyRecommend = true, productId = "" }: Props) => {
    const [variant, setVariant] = useState(product.variants ? product.variants[0] : null);
    const { fetchProductWithId, client } = useContext(ShopifyContext);
    const productVariant = variant ? (client.product.helpers.variantForOptions(product, variant) || variant) : variant;
    const [quantity, setQuantity] = useState(1);

    const context = useContext(ShopifyContext);

    if (!product.title) return <div></div>

    const divProduct = sprinkles({
        display: {
            mobile: "block",
            tablet: "flex",
            desktop: "flex",
        },
        gap: "30",
    });

    const handleOptionChange = (event: any) => {
        const { target } = event
        setVariant((prevState: any) => ({
            ...prevState,
            [target.name]: target.value,
        }))
    }

    return (
        <>
            <div className={divProduct}>
                <Gallery product={product} />


                <div style={{ marginBottom: "3rem" }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <p style={{ fontSize: "24px", margin: "0" }}>{product.title}</p>
                        <p style={{ fontSize: "18px", color: "#E35700" }}>{parseInt(product.variants[0].price, 10).toLocaleString()}円 (税込)</p>
                        <div className='description'
                            dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                        />
                    </div>
                    <div>
                        {
                            product.options[0].name != "Title" ? (
                                product.options.map(options => (
                                    <div style={{ marginBottom: "2rem" }}>
                                        <VariantSelectors
                                            key={options.id.toString()}
                                            onChange={handleOptionChange}
                                            options={options}
                                        />
                                    </div>
                                ))) : null
                        }
                        <div style={{ marginBottom: "2rem" }}>
                            <QuantityButton quantity={quantity} setQuantity={setQuantity} />
                        </div>
                    </div>
                    {/* {productVariant.available ? */}
                    <Buttons
                        context={context}
                        available={productVariant.available}
                        quantity={quantity}
                        productVariant={productVariant}
                    />
                    {!productVariant.available ?
                        <ContactButtons />
                        : null
                    }
                </div>
            </div>
            {isDispalyRecommend && <Recommend productId={productId} />}
        </>

    );
};

export default ProductDetail;
