import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import listaItems from "../../items ";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setItems(listaItems);
    }, 2000);
  }, []);

  return (
    <div className="container">
      <p class="lead">{greeting}</p>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
