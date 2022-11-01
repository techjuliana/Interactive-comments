import chamadaFetch from "./../../services/chamadafetch";
import {RespostasJson} from "./../respostasJson";

import {
  // Container,
  UserProfile,
  UserLeft,
} from "./styled";

export function Comentarios() {
    // comentarios = [...comments]
    
    comentarios.map((parametrosDoIndice) => {
      // commentDiv.innerHTML += //ONDE POR?? SUBSTITUIR PELO QUE??
     return (
     <div>
      <UserProfile>
        <UserLeft>
          <User src="{parametrosDoIndice.user.image.png}" height="30" width="30"/>
              <h3>{parametrosDoIndice.user.username}</h3>
              <h6>{parametrosDoIndice.createdAt}</h6>
        </UserLeft>
        <button type="button" class="button-roxo" id="cadastrarcomentario">
          <img src="./images/icon-reply.svg" height="10" width="10" />responder</button>
          <p>{parametrosDoIndice.content}</p>
      </UserProfile> 
    <RespostasJson/>
      </div>
      )}

      });