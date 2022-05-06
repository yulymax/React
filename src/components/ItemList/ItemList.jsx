import React from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div className="d-flex justify-content-evenly w-100">
      {items.map((item) => {
        return <Item item={item} />;
      })}
    </div>
  );
};

export default ItemList;
