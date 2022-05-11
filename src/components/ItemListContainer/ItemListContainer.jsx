import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import listaItems from "../../items";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      if (id) {
        setItems(listaItems.filter((item) => item.category === id));
      } else {
        setItems(listaItems);
      }
    }, 2000);
  }, [id]);

  return (
    <div className="container">
      <p className="lead">{greeting}</p>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
