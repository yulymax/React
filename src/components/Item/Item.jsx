import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ item }) => {
  function onAdd(valor) {
    console.log(`Llame al onAdd con ${valor}`);
  }

  return (
    <Link to={`/item/${item.id}`}>
      <div className="card" style={{ width: "18rem", margin: "1rem" }}>
        <img src={item.pictureUrl} className="card-img-top" alt="..." />

        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.price}</p>

          <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
      </div>
    </Link>
  );
};

export default Item;
