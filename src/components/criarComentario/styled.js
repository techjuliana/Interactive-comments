import styled from "styled-components";

export const ContentReplies = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding: 1rem;
  margin-left: 3rem;
  max-width: 530px;
  max-height: 500px;
  background-color: white;
  border-radius: 5px;
  color: hsl(211, 10%, 45%);
  input {
    width: 350px;
    height: 150px;
    border-radius: 5px;
    padding-left: 20px;
    border-color: rgba(0, 0, 0, 0.2);
    font-family: "Rubik", sans-serif;
  }
  button {
    height: 50px;
    width: 100%;
    background: hsl(238, 40%, 52%);
    color: white;
    border-radius: 5px;
    font-weight: bold;
    margin: 10px;
  }
`;

export const LinhaVertical = styled.div`
  margin-left: 2rem;
  border-left: 2px solid hsl(211, 10%, 45%);
`;

export const Resposta = styled.div`
  padding: 1.2rem;
  margin-top: 1rem;
  margin:10px;
  margin-left: 3rem;
  grid-gap: 10px;
  max-width: 530px;
  max-height: 500px;
  background-color: white;
  border-radius: 5px;
  color: hsl(211, 10%, 45%);

  .resp-left {
    padding: 5px;
    display: grid;
    justify-content: flex-start;
    grid-template-columns: auto auto auto auto;
    grid-gap: 2rem;
  }
`;
