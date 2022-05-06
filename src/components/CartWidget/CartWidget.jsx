import React from "react";
import cartLogo from "./cart-logo.png";

const CartWidget = () => {
  return (
    <div className="nav-item">
      <button type="button" className="btn btn-primary">
        <img style={{ width: 20 }} src={cartLogo} />
      </button>
    </div>
  );
};

export default CartWidget;
