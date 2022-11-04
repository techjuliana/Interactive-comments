import React, { useEffect, useState } from "react";
import "./global.css";
import { CriarComentario } from "./components/criarComentario";
import { Comentarios } from "./components/comentarios";
export default function App() {
  const [comentario, setComentario] = useState([]);

  function pegandoComentario() {
    fetch("./data.json")
      .then((resp) => resp.json())
      .then((data) => setComentario(data.comentario));
  }
  useEffect(() => {
    pegandoComentario();
  });

  return (
    <div className="container">
      <Comentarios/>
      <CriarComentario />  
    </div>
  );
}
