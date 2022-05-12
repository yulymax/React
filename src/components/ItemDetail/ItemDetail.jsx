import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const [cantidadAgregada, setCantidadAgregada] = useState();

  function onAdd(valor) {
    setCantidadAgregada(valor);
  }

  return (
    <div className="container">
      <img src={item.pictureUrl} alt="..." />
      <h2>{item.title}</h2>
      <p>{item.price}</p>

      {!cantidadAgregada && <ItemCount stock={5} initial={1} onAdd={onAdd} />}
    </div>
  );
};

export default ItemDetail;
