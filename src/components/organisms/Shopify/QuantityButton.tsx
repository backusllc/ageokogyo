import React from 'react';

const QuantityButton = ({ quantity, setQuantity }) => {
    const increaseQuantity = () => {
        setQuantity(q => q + 1);
    }
    const decreaseQuantity = () => {
        setQuantity(q => (q <= 1 ? 1 : q - 1));
    }
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <label className="label" htmlFor="quantity" style={{ width: "50px" }}>数量</label>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div className="control">
                    <button className="button" onClick={decreaseQuantity}
                        style={{
                            height: "46px",
                            width: "30px",
                            backgroundColor: "white",
                            border: "1px solid #999999",
                            borderRightStyle: "none",
                        }}
                    >
                        -
                    </button>
                </div>
                <div className="control">
                    <button className="button"
                        style={{
                            width: "60px",
                            height: "46px",
                            backgroundColor: "white",
                            border: "1px solid #999999",
                            borderRightStyle: "none",
                            borderLeftStyle: "none",
                            fontSize: "1rem",
                        }}
                    >
                        {quantity}
                    </button>
                </div>
                <div className="control">
                    <button className="button" onClick={increaseQuantity}
                        style={{
                            height: "46px",
                            width: "30px",
                            backgroundColor: "white",
                            border: "1px solid #999999",
                            borderLeftStyle: "none",
                        }}
                    >
                        +
                    </button>
                </div>
            </div>
        </div >
    );
};

export default QuantityButton;
