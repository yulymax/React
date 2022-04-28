import React, { useState, useEffect } from "react";

const CicloDeVida = () => {
  const [nombre, setNombre] = useState("Abby");

  useEffect(() => {
    console.log("el componente esta listo");

    return () => {
      console.log("El componente murio");
      alert("Me mataron");
    };
  }, [nombre]);

  return (
    <>
      <h1 style={{ margin: "100px 0" }}>{nombre}</h1>
      <button onClick={() => setNombre("Jorge")}>Mi Nombre es:</button>
    </>
  );
};

export default CicloDeVida;
