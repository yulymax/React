import React from "react";

const Card = ({
  texto,
  color,
  parrafo,
  buttonText,
  imagen,
  btn,
  buttonStyle,
}) => {
  return (
    <div className={`card ${color} `} style={{ width: "18rem" }}>
      <img src={imagen} className="card-img-top" alt="..." />

      <div className="card-body">
        <h5 className="card-title">{texto}</h5>
        <p className="card-text">{parrafo}</p>

        <button className={buttonStyle}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Card;
