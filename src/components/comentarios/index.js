import responder from "./../../images/icon-reply.svg";
import { UserProfile, UserLeft, LinhaVertical, ProfileReplies } from "./styled";

export function Comentarios(props) {
  console.log(props);

  return (
    <div>
      {/* {props.map((parametrosDoIndice) => {  */}

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
          <img src={responder} height="10" width="10" />
          responder
        </button>
        {/* <p>{props.content}</p> */}
      </UserProfile>

      <div>
        {/* {parametrosDoIndice.replies.length > 0 ? (  */}
        <LinhaVertical>
          {/* {parametrosDoIndice.replies.map((parametrosDoReplies) => */}
          <ProfileReplies id="user_profile">
            <UserLeft>
              {/* <img src="{parametrosDoIndice.user.image.png}" height="30" width="30"/>
                <h3>{parametrosDoReplies.user.username} </h3>
                <h6>{parametrosDoReplies.createdAt}</h6>
                <button type="button" class="button-roxo" id="cadastrarcomentario">
                <img src={Responder} height="10" width="10" />
                responder</button> */}
            </UserLeft>
            {/* <p>{parametrosDoReplies.content}</p> */}
          </ProfileReplies>
          {/* )} */}
        </LinhaVertical>
        {/* ) : ''} */}
      </div>
      {/* // }); */}
      {/* })} */}
    </div>
    // })
  );
}
