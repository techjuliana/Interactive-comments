// import React, { useEffect, useState } from "react";
// import { RespostasJson } from "./../respostasJson";
import Responder from "./../../images/icon-reply.svg";
import { UserProfile, UserLeft } from "./styled";

export function Comentarios() {
  // comentarios = [...comments]

  // const [comentarios, setComentarios] = useState('');

  // useEffect(() => {
  //   chamadaFetch.buscar(comentarios)
  // });

  // comentarios.map((parametrosDoIndice) => {
  // commentDiv.innerHTML += //ONDE POR?? SUBSTITUIR PELO QUE??

  return (
    <div>
      <UserProfile>
        <UserLeft>
          {/* <img
              src="{parametrosDoIndice.user.image.png}"
              height="30"
              width="30"
            /> */}
          {/* <h3>{parametrosDoIndice.user.username}</h3>
            <h6>{parametrosDoIndice.createdAt}</h6> */}
        </UserLeft>
        <button type="button" class="button-roxo" id="cadastrarcomentario">
          <img src={Responder} height="10" width="10" />
          responder
        </button>
        {/* <p>{parametrosDoIndice.content}</p> */}
      </UserProfile>
      {/* <RespostasJson/> */}
    </div>
  );
  // });
}
