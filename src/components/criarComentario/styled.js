import styled from "styled-components";

export const Container = styled.div`
 
  
textarea {
  width: 350px;
  height: 150px;
  border-radius: 5px;
  padding-left: 20px;
  padding-top: 20px;
  border-color: rgba(0, 0, 0, 0.2);
  font-family: "Rubik", sans-serif;
}
`

.json-replies-content {
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding: 1rem;
  margin-top: 1rem;
  max-width: 600px;
  max-height: 500px;
  background-color: white;
  border-radius: 5px;
  color: hsl(211, 10%, 45%);
}

.content-replies {
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding: 1rem;
  margin-left: 3rem;
  max-width: 530px;
  max-height: 500px;
  background-color: white;
  border-radius: 5px;
  color: hsl(211, 10%, 45%);
}

.json-replies-footer button,
.footer-replies button {
  height: 50px;
  width: 100%;
  background: hsl(238, 40%, 52%);
  color: white;
  border-radius: 5px;
  font-weight: bold;
  margin: 10px;
}

/* .hidden {
    display: none;
} */

.button-roxo {
  color: hsl(238, 40%, 52%);
}

.button-vermelho {
  color: hsl(358, 79%, 66%);
}

button {
  background-color: rgb(255, 255, 255);
  border: none;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
}