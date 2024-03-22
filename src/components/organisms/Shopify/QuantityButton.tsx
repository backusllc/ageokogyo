import React from "react";
import {
  label,
  quantityBox,
  quantityNumber,
  quantityContainer,
  quantityDecreaseButton,
  quantityIncreaseButton,
} from "./QuantityButton.css";

interface Props {
  quantity: number;
  setQuantity: any;
}

const QuantityButton = ({ quantity, setQuantity }: Props) => {
  const increaseQuantity = () => {
    setQuantity((q: number) => q + 1);
  };
  const decreaseQuantity = () => {
    setQuantity((q: number) => (q <= 1 ? 1 : q - 1));
  };
  return (
    <div className={quantityContainer}>
      <label className={label}>数量</label>
      <div className={quantityBox}>
        <button className={quantityDecreaseButton} onClick={decreaseQuantity}>
          -
        </button>
        <div className={quantityNumber}>{quantity}</div>
        <button onClick={increaseQuantity} className={quantityIncreaseButton}>
          +
        </button>
      </div>
    </div>
  );
};

export default QuantityButton;
