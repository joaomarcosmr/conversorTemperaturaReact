import React from "react";
import { useParams, Link } from 'react-router-dom';

const Livro = ({ livros }) => {
  const { slug } = useParams();
  const livro = livros.find((livro) => livro.slug === slug);


  return (
    <main className="principal">
      <div className="pag-livro">
        <h2>{livro.titulo}</h2>
        <div className="livro">
          <img
            src={"../src/img/capas/" + livro.id + ".jpg"}
            alt="Thumbnail da capa do livro ..."
          />
          <ul>
            <li>ISBN: {livro.isbn}</li>
            <li>Ano: {livro.ano}</li>
            <li>Páginas: {livro.paginas}</li>
            <li>Preço: R${livro.preco},00</li>
          </ul>
          <hr />
          <h3>Descrição do livro</h3>
          <p>{livro.descricao}</p>
          <Link to='/catalogo'>
          {
            <button className="btn">Voltar para catálogo</button>
          }
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Livro;
