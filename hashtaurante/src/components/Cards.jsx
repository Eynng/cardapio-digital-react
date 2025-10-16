import Card from "./card";
import { pratosPrincipais, sobremesas, bebidas } from "../assets/cardapio";
import imgBurguer from "../assets/pratos/burguer-picanha.jpeg";
import imgFile from "../assets/pratos/enroladinho-mignon.jpeg";

const cards = () => {

  const itensCategorias = [pratosPrincipais, sobremesas, bebidas ]

  console.log(itensCategorias[0])


  return (
    <div className="cards">

      <Card
        titulo="Burguer de Picanha"
        descricao="Burguer de picanha angus, queijo cheddar e bacon"
        preco="R$ 44,90"
        imagem={imgBurguer}
      />

      <Card
        titulo="Enroladinho de Migno"
        descricao="Finíssimas fatias de filé mignon enroladas no parmesão"
        preco="R$ 44,90"
        imagem={imgFile}
      />

    </div>
  );
};

export default cards;
