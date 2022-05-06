import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setItems([
        {
          id: 1,
          title: "Carta 1",
          price: "$12",
          pictureUrl:
            "https://i.pinimg.com/564x/ed/39/f4/ed39f46b2f0d57b53cb2d03cc5aeaf10.jpg",
        },
        {
          id: 2,
          title: "Carta 2",
          price: "$10",
          pictureUrl:
            "https://i.pinimg.com/564x/0b/4a/c5/0b4ac5b7587142fa19dea32b90e79cc4.jpg",
        },
        {
          id: 3,
          title: "Carta 3",
          price: "$5",
          pictureUrl:
            "https://i.pinimg.com/564x/0b/4a/c5/0b4ac5b7587142fa19dea32b90e79cc4.jpg",
        },
      ]);
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
