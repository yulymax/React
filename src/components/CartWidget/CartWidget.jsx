import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import cartLogo from "./cart-logo.png";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  let total = 0;

  cart.forEach((item) => (total += item.quantity));

  return (
    <div className="nav-item">
      <Link className="nav-link" to="/cart">
        <button type="button" className="btn btn-primary">
          <img style={{ width: 20 }} src={cartLogo} />
          {total > 0 && <span>{total}</span>}
        </button>
      </Link>
    </div>
  );
};

export default CartWidget;
