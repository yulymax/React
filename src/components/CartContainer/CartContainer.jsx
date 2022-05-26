import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

const CartContainer = () => {
  const { cart, removeItem } = useContext(CartContext);

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState();

  let total = 0;

  cart.forEach((item) => (total += item.quantity * item.price));

  const crearOrden = (e) => {
    e.preventDefault();
    const order = {
      buyer: { nombre, telefono, email },
      items: cart,
      total,
      date: new Date(),
    };

    const db = getFirestore();
    const ordersCollection = collection(db, "Orders");
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
  };

  return (
    <div>
      {orderId && (
        <div>Su orden fue creada con el identificador #{orderId}</div>
      )}
      {!orderId && cart.length > 0 && (
        <>
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
          <form>
            <label>Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <label>Telefono</label>
            <input
              type="text"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" onClick={crearOrden}>
              Crear orden
            </button>
          </form>
        </>
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
