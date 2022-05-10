import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  function onAdd(valor) {
    console.log(`Llame al onAdd con ${valor}`);
  }

  return (
    <div className="container">
      <img src={item.pictureUrl} alt="..." />
      <h2>{item.title}</h2>
      <p>{item.price}</p>

      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
