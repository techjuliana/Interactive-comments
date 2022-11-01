import { useEffect, useState } from "react";
import { chamadaService } from "../../services/chamadafetch";
import {
  UserLeft,
  LinhaVertical,
  ProfileReplies,
} from "./styled";


const RespostasJson = () => {

  const [states, setStates] = useState([]);
  useEffect(() => {
    chamadaService().then((states) => {
      setStates(states);
    });
  }, []);

  return (
    <div id="states">
          {parametrosDoIndice.replies.length > 0 ? (
      <LinhaVertical>
      {parametrosDoIndice.replies.map((parametrosDoReplies) =>
        <ProfileReplies id="user_profile">
          <UserLeft> 
            <User src="{parametrosDoIndice.user.image.png}" height="30" width="30"/>
                <h3>{parametrosDoReplies.user.username} </h3>
                <h6>{parametrosDoReplies.createdAt}</h6>
                <button type="button" class="button-roxo" id="cadastrarcomentario">
                <img src="./images/icon-reply.svg" height="10" width="10" />
                responder</button>
          </UserLeft>
          <p>{parametrosDoReplies.content}</p>
        </ProfileReplies>
        )} : ``}
       </LinhaVertical>
    </div>
  );
};

export default RespostasJson;
