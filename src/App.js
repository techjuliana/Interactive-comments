import React, { useEffect, useState } from "react";
import "./global.css";
// import { CriarComentario } from "./components/criarComentario";
import { Comentarios } from "./components/comentarios";
export default function App() {

  function pegandoComentario() {
    fetch("./data.json")
    .then((resp) => resp.json())
   .then(({data}) => setComentario(data.comentario));

  }

  const [comentario, setComentario] = useState([]);
  useEffect(() => {
    pegandoComentario();
  }, []);

  return (
    <div className="container">
      <Comentarios data={comentario} />
      {/* <CriarComentario data={comentario} /> */}
    </div>
  );
}
