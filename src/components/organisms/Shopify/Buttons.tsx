import { navigate } from "gatsby";
import React from "react";
import NotificationSystem from "react-notification-system";

import { button } from "./Buttons.css";

const Buttons = ({ context, available, productVariant, quantity }: any) => {
  const notificationSystem = React.createRef();

  const handleAddToCart = () => {
    try {
      context.addItemToCheckout(productVariant.id, quantity);
    } catch (e) {
      console.log(e);
    }
  };

  const addNotification = (event: any) => {
    event.preventDefault();
    const notification = notificationSystem.current;
    notification.addNotification({
      title: "カートに商品が追加されました",
      level: "success",
      autoDismiss: 3,
      position: "tr",
      action: {
        label: "カートへ移動する",
        callback: function () {
          navigate("/cart");
        },
      },
    });
    handleAddToCart();
  };

  return (
    <>
      <NotificationSystem ref={notificationSystem} />
      <button className={button} disabled={!available} onClick={addNotification}>
        カートに追加
      </button>
    </>
  );
};

export default Buttons;
