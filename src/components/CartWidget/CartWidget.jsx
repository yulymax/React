import React from "react";
import { Link } from "react-router-dom";
import cartLogo from "./cart-logo.png";

const CartWidget = () => {
  return (
    <div className="nav-item">
      <Link className="nav-link" to="/cart">
        <button type="button" className="btn btn-primary">
          <img style={{ width: 20 }} src={cartLogo} />
        </button>
      </Link>
    </div>
  );
};

export default CartWidget;
