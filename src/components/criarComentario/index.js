import { ModalDelete } from "./../modalDelete";
import { ContentReplies, LinhaVertical, Resposta } from "./styled";
import Editar from "./../../images/icon-edit.svg";
import { useState } from "react";

export function CriarComentario({ currentUser, funcao }) {
  const [value, setValue] = useState("");

  return (
    <div>
      <LinhaVertical>
        <Resposta>
          <div className="resp-left">
            <ModalDelete id="comentarios" />
            <button type="button" id="" className="button-roxo">
              <img src={Editar} alt="" height="10" width="10" />
              Editar
            </button>
          </div>
          <div id="comentarios"></div>
        </Resposta>
      </LinhaVertical>

      <ContentReplies>
        <input
          id="input"
          onChange={(value) => setValue(value.target.value)}
          className="field-replies"
          placeholder="Adicione um comentario..."
          required
        ></input>
        <button id="salvar" onClick={() => funcao(value)}>
          Salvar
        </button>
        <button id="cancelar">Cancelar</button>
      </ContentReplies>
    </div>
  );
}
