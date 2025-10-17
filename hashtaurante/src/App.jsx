import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Categorias from "./components/Categorias";
import Cards from "./components/cards";

function App() {
  // Hook
  // Variável de estado
  const [numCategoriaSelecionada, setNumCategoriaSelecionada] =
    React.useState(0);

  // Fornma errada
  // SetNumCategoriaSelecionada = 1

  // Forma correta
  // SetNumCategoriaSelecionada(1)

  return (
    <div className="container">
      <Banner />
      <Categorias
        numCategoriaSelecionada={numCategoriaSelecionada}
        setNumCategoriaSelecionada={setNumCategoriaSelecionada}
      />
      <Cards numCategoriaSelecionada={numCategoriaSelecionada} />
    </div>
  );
}

export default App;

// rfce :
// React Function Component Export
