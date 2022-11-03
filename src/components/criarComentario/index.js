import { ModalDelete } from "./../modalDelete";

import { ContentReplies, LinhaVertical, Resposta } from "./styled";
//AQUI ESTAMOS CRIANDO UM COMENTARIO E PRECISAMOS MOSTRAR ELES EM BAIXO TAMBEM AO CLICAR EM ENVIAR
import Editar from "./../../images/icon-edit.svg";

export function CriarComentario() {
  var area = document.getElementById("input");
  var comentarios = [];
  var comentariosElemento = document.getElementById("comentarios");

  function enviar() {
    comentarios.push(area.value);
    console.log(comentarios);
    comentariosElemento.innerHTML += `
    ${comentarios}
    `;
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

  return (
    <div>

<LinhaVertical>
        <Resposta>
          <div class="resp-left">
            <ModalDelete id="comentarios" />
            <button type="button" id="edit-${index}" class="button-roxo">
              <img src={Editar} height="10" width="10" />
              Editar
            </button>
          </div>
          <div id="comentarios">
            <p>teste da resposta</p>
          </div>
        </Resposta>
      </LinhaVertical>
      
      <ContentReplies>
        <input
          id="input"
          data-index="new"
          class="field-replies"
          placeholder="Adicione um comentario..."
          required
        ></input>
        <button id="salvar" onClick="enviar()">
          Salvar
        </button>
        <button id="cancelar">Cancelar</button>
      </ContentReplies>

      
    </div>
  );
}
