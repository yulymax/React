import React, { useState, useEffect } from "react";
import listaItems from "../../items ";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setItemDetail(listaItems[0]);
    }, 2000);
  }, []);

  return (
    <div className="container">
      <ItemDetail item={itemDetail} />
    </div>
  );
};

export default ItemDetailContainer;
