import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const db = getFirestore();
      const itemRef = doc(db, "Items", id);
      getDoc(itemRef).then((snapshot) => {
        if (snapshot.exists()) {
          setItemDetail({ ...snapshot.data() });
        }
      });
    }
  }, [id]);

  return (
    <div className="container">
      <ItemDetail item={itemDetail} />
    </div>
  );
};

export default ItemDetailContainer;
