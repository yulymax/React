import React from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {items.map((item) => {
        return <Item item={item} />;
      })}
    </div>
  );
};

export default ItemList;
