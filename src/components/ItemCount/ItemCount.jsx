import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);

  function sumar() {
    setContador(contador + 1);
  }

  function restar() {
    if (contador > 1) {
      setContador(contador - 1);
    }
  }

  function agregar() {
    if (contador <= stock) {
      onAdd(contador);
    }
  }

  return (
    <div>
      <button onClick={restar} type="button" className="btn btn-default">
        Restar
      </button>
      <span>{contador}</span>
      <button onClick={sumar} type="button" className="btn btn-default  ">
        Sumar
      </button>

      <button onClick={agregar} type="button" className="btn btn-primary">
        Agregar al carrito
      </button>
    </div>
  );
};
export default ItemCount;
