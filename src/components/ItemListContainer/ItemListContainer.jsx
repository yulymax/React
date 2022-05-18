import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import listaItems from "../../items";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        if (id) {
          resolve(listaItems.filter((item) => item.category === id));
        } else {
          resolve(listaItems);
        }
      }, 2000);
    });

    promise.then((response) => setItems(response));
  }, [id]);

  return (
    <div className="container-fluid bg-secondary">
      <p className="text-center fs-1 fw-bold">{greeting}</p>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
