import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import listaItems from "../../items";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setTimeout(() => {
        setItemDetail(listaItems.find((item) => item.id === id));
      }, 2000);
    }
  }, [id]);

  return (
    <div className="container">
      <ItemDetail item={itemDetail} />
    </div>
  );
};

export default ItemDetailContainer;
