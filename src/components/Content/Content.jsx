import React from "react";
import Card from "../Card/Card";
import AbbyImg from "../../Imagen/abby.jpg";

const Content = () => {
  return (
    <main className="d-flex justify-content-evenly w-100 bg-secondary">
      <Card
        texto={"Abby 1"}
        color={"danger"}
        parrafo={"Primer día..."}
        imagen={
          "https://i.pinimg.com/564x/ed/39/f4/ed39f46b2f0d57b53cb2d03cc5aeaf10.jpg"
        }
        buttonText={"Confirmar"}
        buttonStyle={"btn btn-danger"}
      />
      <Card
        texto={"Abby 2"}
        color={"danger"}
        parrafo={"Creciendo día..."}
        imagen={AbbyImg}
        buttonText={"Confirmar"}
        buttonStyle={"btn btn-danger"}
      />
      <Card
        texto={"Abby 3"}
        color={"danger"}
        parrafo={"Hoy..."}
        imagen={
          "https://i.pinimg.com/564x/0b/4a/c5/0b4ac5b7587142fa19dea32b90e79cc4.jpg"
        }
        buttonText={"Confirmar"}
        buttonStyle={"btn btn-danger"}
      />
    </main>
  );
};

export default Content;
