// import React, { useEffect, useState } from "react";
import "./global.css";
import { CriarComentario } from "./components/criarComentario";
import { Comentarios } from "./components/comentarios";
export default function App() {
  // useEffect(()=>{
  //   const [comentarios, setComentarios] = useState('');
  //   (()=>{
    
  //     fetch("./data.json")
  //     .then((resp) => resp.json())
  //     .catch((erro) => console.log(erro))
  //     .then(({ comments, currentUser }) => {
    
  //       comentarios = [...comments] 
      
  //   })()
    
  //   },[])
  return (
    <div className="container">
      <Comentarios /> 
      <CriarComentario />
    </div>
  );
}
