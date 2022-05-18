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
    <div className="container">
      <img src={item.pictureUrl} alt="..." />
      <h2>{item.title}</h2>
      <p>$ {item.price}</p>

      {!cantidadAgregada && <ItemCount stock={5} initial={1} onAdd={onAdd} />}
      {cantidadAgregada && <Link to="/cart">Terminar mi compra</Link>}
    </div>
  );
};

export default ItemDetail;
