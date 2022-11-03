import styled from "styled-components";

export const Container = styled.div`
  .button-vermelho {
  color: hsl(358, 79%, 66%);
}
`

export const Centro = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const ModalStyled = styled.div`
  justify-content: center;
  display: grid;
  grid-gap: 0.6rem;
  border-radius: 7px;
  padding: 20px;
  width: 450px;
  background-color: white;
`;

export const FooterDelete = styled.div`
  button {
    border: none;
    padding: 10px;
    margin: 2px;
  }
  .cancelar {
    background-color: hsl(211, 10%, 45%);
    color: white;
    border-radius: 7px;
  }

  .deletar {
    background-color: hsl(358, 79%, 66%);
    color: white;
    border-radius: 7px;
  }


`;
