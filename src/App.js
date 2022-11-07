import React, { useEffect, useState } from "react";
import "./global.css";
import { CriarComentario } from "./components/criarComentario";
import { Comentarios } from "./components/comentarios";
export default function App() {
const [comentario, setComentario] = useState([]);
const [ currentUser, setCurrentUser] = useState([]);
const [responder, setResponder] = useState (false)

function pegandoComentario() {
  fetch('http://127.0.0.1:5501/data.json')
  .then((resp) => resp.json())
 .then(({comments, currentUser}) => {
  setComentario(comments)
  setCurrentUser(currentUser)
 } );
}

useEffect(() => {
  pegandoComentario();
}, []);

function enviar(value) {
  const modeloDeMensagem = {
    id: Math.random(),
    content: value,
    createdAt: Math.random().toFixed() + " Minutos Ago",
    score: Math.random(),
    user: {
      image: {
        png: "/images/avatars/image-juliusomo.png",
        webp: "./images/avatars/image-juliusomo.webp",
      },
      username: "juliusomo",
    },
    replies: [],
  };
  setComentario(valoresAnteriores => [...valoresAnteriores, modeloDeMensagem]) 
}

return (
  <div className="container">
  {comentario?.map( (comments, index) => (
    <Comentarios key={index} img={comments.user.image.png} username={comments.user.username} createdAt={comments.createdAt} content={comments.content} replies={comments.replies} />
    ))}
   
    <CriarComentario currentUser={currentUser} 
    funcao={enviar} 
/>
  </div>
);
}