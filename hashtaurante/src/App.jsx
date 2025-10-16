import React from "react";
import "./App.css";
import imgHashtaurante from "./assets/hashtaurante.webp";
import Categorias from "./components/Categorias";
import Card from "./components/card";

function App() {
  console.log("Olá, mundo");

  return (
    <div className="container">
      <div className="banner">
        <img src={imgHashtaurante} alt="Banner do Hashtaurante" />
      </div>

      <Categorias />

      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;

// rfce :
// React Function Component Export
