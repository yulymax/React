import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

const CartContainer = () => {
  const { cart, removeItem, clear } = useContext(CartContext);

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
    <>
      {orderId && <h2>Su orden fue creada con el identificador #{orderId}</h2>}
      {!orderId && cart.length > 0 && (
        <>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col ">Cantidad</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Precio Unitario</th>
                <th scope="col">Subtotal</th>
                <th scope="col">Opcion</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr>
                  <td>{item.quantity}</td>
                  <td>{item.title}</td>
                  <td>$ {item.price}</td>
                  <td>$ {item.price * item.quantity}</td>
                  <td>
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => removeItem(item.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={4} align="right">
                  Total: $ {total}
                </td>
                <td>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => clear()}
                  >
                    Vaciar Carrito
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>

          <div className="container mt-5">
            <div className="row justify-content-md-center">
              <div className="col col-lg-3">
                <div className="mb-2">
                  <label>Nombre</label>
                  <input
                    className="form-control"
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                <div className=" mb-2">
                  <label>Telefono</label>
                  <input
                    className="form-control"
                    type="text"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                  />
                </div>
                <div className=" mb-2">
                  <label>Email</label>
                  <input
                    className="form-control"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <button
                    class="btn btn-outline-dark"
                    type="submit"
                    disabled={!email || !telefono || !nombre}
                    onClick={crearOrden}
                  >
                    Crear Orden
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {cart.length === 0 && (
        <p>
          No agregaste nada. Anda a la <Link to="/">homepage</Link>
        </p>
      )}
    </>
  );
};

export default CartContainer;
