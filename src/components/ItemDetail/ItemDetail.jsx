import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const [cantidadAgregada, setCantidadAgregada] = useState();
  const { addItem } = useContext(CartContext);

  function onAdd(valor) {
    setCantidadAgregada(valor);
    addItem(item, valor);
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <img src={item.pictureUrl} alt={item.title} className="img-fluid" />
      <h2>{item.title}</h2>
      <p>$ {item.price}</p>
      <p>Stock Disponible: {item.stock}</p>

      {!cantidadAgregada && (
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
      )}
      {cantidadAgregada && <Link to="/cart">Terminar mi compra</Link>}
    </div>
  );
};

export default ItemDetail;
