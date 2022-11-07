import { CriarComentario } from "../criarComentario";
// import responder from "./../../images/icon-reply.svg";

import { UserProfile, UserLeft, LinhaVertical, ProfileReplies } from "./styled";

export function Comentarios({img, username, createdAt, content, replies, responder, setResponder, currentUser, enviar}) {

  return (
    
    <div>
      <UserProfile>
        <UserLeft>

          <img
              src={img} alt=""
              height="30"
              width="30"
            />

          <h3>{username}</h3>
            <h6>{createdAt}</h6>
            
        </UserLeft>
        
        <button type="button" className="button-roxo" id="cadastrarcomentario" onClick={ ()=> setResponder(!responder) }>
          <img src={responder} alt="" height="10" width="10" />
          responder
        </button>
        <p>{content}</p>
      </UserProfile>

      {responder && (
        <CriarComentario currentUser={currentUser} 
    funcao={enviar} 
/>
      )}

      <div>
        {replies.length > 0 ? ( 
          replies.map(({img, username, createdAt, content}) => (
            <LinhaVertical key={createdAt}>
          <ProfileReplies id="user_profile">
            <UserLeft>
              <img src="{img}" height="30" width="30" alt=""/>
                <h3>{username} </h3>
                <h6>{createdAt}</h6>
                {/* <button type="button" className="button-roxo" id="cadastrarcomentario">
                <img src={responder} height="10" width="10" alt=""/>
                responder</button> */}
            </UserLeft>
            <p>{content}</p>
          </ProfileReplies>
        </LinhaVertical>

           ))
       
        ) : ''}
      </div>
    </div>
  );
}
