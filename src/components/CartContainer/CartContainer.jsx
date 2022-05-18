import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

const CartContainer = () => {
  const { cart, removeItem } = useContext(CartContext);

  let total = 0;

  cart.forEach((item) => (total += item.quantity * item.price));

  return (
    <div>
      {cart.length > 0 && (
        <ul>
          <li>Cantidad | Descripcion | Precio Unitario | Subtotal</li>
          {cart.map((item) => (
            <li>
              {item.quantity}x {item.title} $ {item.price} $
              {item.price * item.quantity}
              <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </li>
          ))}
          <li>Total: $ {total}</li>
        </ul>
      )}
      {cart.length === 0 && (
        <p>
          No agregaste nada. Anda a la <Link to="/">homepage</Link>
        </p>
      )}
    </div>
  );
};

export default CartContainer;
