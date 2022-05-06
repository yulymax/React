import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ greeting }) => {
  function onAdd(valor) {
    console.log(`Llame al onAdd con ${valor}`);
  }

  return (
    <div className="container">
      <p class="lead">{greeting}</p>

      <ItemCount stock={5} initial={1} onAdd={onAdd} />
      <ItemCount stock={10} initial={4} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
