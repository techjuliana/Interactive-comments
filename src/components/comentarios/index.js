import {
  Container,
  UserProfile,
  UserLeft,
  LinhaVertical,
  ProfileReplies,
} from "./styled";

export function Comentarios() {
  var area = document.getElementById('teste-texto') //precisamos criar uma const e armazenar os dados com o useState
  var comentarios = [] 

  function enviar() { 

    const modeloDeMensagem =  { 
      "id": Math.random(),
      "content": area.value,
      "createdAt": Math.random().toFixed() + " month ago",
      "score": Math.random(),
      "user": {
        "image": { 
          "png": "/images/avatars/image-juliusomo.png",
          "webp": "./images/avatars/image-juliusomo.webp"
        },
        "username": "juliusomo"
      },
      "replies": []
    }
  
    comentarios.push(modeloDeMensagem)
    console.log(comentarios)
  }


  fetch("./data.json")
  .then((resp) => resp.json())
  .catch((erro) => console.log(erro))
  .then(({ comments, currentUser }) => {

    comentarios = [...comments]
    
    const commentDiv = document.getElementById("comments"); 

    comentarios.map((parametrosDoIndice) => {
      // commentDiv.innerHTML += //ONDE POR?? SUBSTITUIR PELO QUE??
     return (
     <Container>
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

      {/* RESPOSTA */}
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
       </LinhaVertical>
       )}
        : ``}
        </Container> 
      })