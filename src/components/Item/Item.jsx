import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ item }) => {
  const [cantidadAgregada, setCantidadAgregada] = useState();
  const { addItem } = useContext(CartContext);

  function onAdd(valor) {
    setCantidadAgregada(valor);
    addItem(item, valor);
  }

  return (
    <div className="card" style={{ width: "18rem", margin: "1rem" }}>
      <Link to={`/item/${item.id}`}>
        <img src={item.pictureUrl} className="card-img-top" alt="..." />
      </Link>

      <div className="card-body">
        <Link to={`/item/${item.id}`}>
          <h5 className="card-title">{item.title}</h5>
        </Link>
        <p className="card-text">{item.price}</p>

        {!cantidadAgregada && <ItemCount stock={5} initial={1} onAdd={onAdd} />}
      </div>
    </div>
  );
};

export default Item;
