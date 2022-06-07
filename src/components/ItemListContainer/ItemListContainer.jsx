import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "Items");
    let q;

    if (id) {
      q = query(itemsCollection, where("category", "==", id));
    } else {
      q = query(itemsCollection);
    }

    getDocs(q).then((snapshot) => {
      if (snapshot.size !== 0) {
        setItems(snapshot.docs.map((doc) => ({ ...doc.data() })));
      }
    });
  }, [id]);

  return (
    <div className="container-fluid">
      <p className="text-center fs-1 fw-bold">{greeting}</p>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
