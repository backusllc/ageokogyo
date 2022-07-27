import React from 'react';

const Buttons = ({ context, available, productVariant, quantity }: any) => {
    const handleAddToCart = () => {
        console.log(productVariant);
        context.addItemToCheckout(productVariant.id, quantity)
    }

    return (
        <div className="columns">
            <div style={{ backgroundColor: "#E35700" }}>
                <button
                    className="button is-medium is-fullwidth"
                    disabled={!available}
                    onClick={handleAddToCart}
                    style={{
                        backgroundColor: "#E35700",
                        border: "none",
                        padding: "1rem",
                        color: "white",
                        width: "100%",
                    }}
                >
                    カートに追加
                </button>
            </div>
        </div >
    );
};

export default Buttons;
