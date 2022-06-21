import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "4rem" }}>
      <Link to={`/item/${item.id}`}>
        <img src={item.pictureUrl} className="card-img-top" alt="..." />
      </Link>

      <div className="card-body">
        <Link to={`/item/${item.id}`}>
          <h5 className="card-title">{item.title}</h5>
        </Link>
        <p className="card-text">$ {item.price}</p>
      </div>
    </div>
  );
};

export default Item;
