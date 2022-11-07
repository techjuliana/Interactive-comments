import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import { ModalStyled, FooterDelete, Centro,Container } from "./styled";
import Deletar from "./../../images/icon-delete.svg"
Modal.setAppElement("#root");

export function ModalDelete() {
  const [isNewTagModalOpen, setIsNewTagModalOpen] = useState(false);

  function hardleOpenNewTagModal() {
    setIsNewTagModalOpen(true);
  }

  function hardleCloseNewTagModal() {
    setIsNewTagModalOpen(false);
  }

  return (
    <Container>
      <button className="button-vermelho" onClick={hardleOpenNewTagModal} > 
             <img src={Deletar} alt="" height="10" width="10"/>
            Excluir </button>
      <Modal isOpen={isNewTagModalOpen} onRequestClose={hardleCloseNewTagModal}>
        <Centro>
          <ModalStyled>
            <h2>Deletar comentario</h2>
            <p>Voce tem certeza que deseja deletar esse comentario?</p>
            <FooterDelete>
              <button
                id="cancelar"
                className="cancelar"
                onClick={hardleCloseNewTagModal}
              >
                NÃO, CANCELAR
              </button>
              <button id="deletarConfirmacao" className="deletar">
                {" "}
                SIM, DELETAR
              </button>
            </FooterDelete>
          </ModalStyled>
        </Centro>
      </Modal>
    </Container>
  );
}
export default Modal;
