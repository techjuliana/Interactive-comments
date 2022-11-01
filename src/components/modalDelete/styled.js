import styled from "styled-components";
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000090;
  opacity: 0;
`;

export const ModalStyled = styled.div`
  display: grid;
  grid-gap: 0.6rem;
  border-radius: 7px;
  padding: 50px;
  width: 350px;
  background-color: white;
`;

export const FooterDelete = styled.div`
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
