import React from "react";
import imgBurguer from "../assets/pratos/burguer-picanha.jpeg";

const card = () => {
  return (
    <div className="card">
      <div className="card__textos">
        <h2 className="card__titulo  ">Burguer de Picanha</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos harum..
        </p>

        <p className="card__preco">R$ 59,90</p>
      </div>

      <div className="card__img">
        <img src={imgBurguer} alt="Foto do Produto" />
      </div>
    </div>
  );
};

export default card;
