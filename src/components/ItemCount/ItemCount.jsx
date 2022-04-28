import React, { useState } from "react";
import CicloDeVida from "../CicloDeVida/CicloDeVida";
const ItemCount = ({ usuario }) => {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("Julia");
  const [ciclo, setCiclo] = useState(true);

  function sumar(params) {
    setContador(contador + 1);
  }

  function restar(params) {
    if (contador > 1) {
      setContador(contador - 1);
    }
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          margin: "40px 0",
          width: "500px",
          justifyContent: "space-around",
        }}
      >
        <button onClick={restar}>restar 1</button>
        <h1>Contador : {contador}</h1>
        <button onClick={sumar}>sumar 1</button>
      </div>
      <div>
        <h1>{nombre}</h1>
        <button onClick={() => setNombre(usuario)}>Cambiar Nombre</button>
      </div>

      <div>
        {ciclo && <CicloDeVida />}
        <button onClick={() => setCiclo(false)}>Matar al Ciclo </button>
      </div>
    </div>
  );
};
export default ItemCount;
