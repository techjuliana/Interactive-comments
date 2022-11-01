import chamadaFetch from "./../../services/chamadafetch";

import {} from "./styled";
//AQUI ESTAMOS CRIANDO UM COMENTARIO E PRECISAMOS MOSTRAR ELES EM BAIXO TAMBEM AO CLICAR EM ENVIAR
var area = document.getElementById("teste-texto");
var comentarios = [];

function enviar() {
  const modeloDeMensagem = {
    id: Math.random(),
    content: area.value,
    createdAt: Math.random().toFixed() + " month ago",
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

  comentarios.push(modeloDeMensagem);
  console.log(comentarios);
}


