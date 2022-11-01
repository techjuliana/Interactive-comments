import React from "react";
import Modal from "react-modal";
import { useState } from "react";

import {ModalStyled, FooterDelete } from "./styled";

Modal.setAppElement("#root");

export function Modaltag() {
  const [isNewTagModalOpen, setIsNewTagModalOpen] = useState(false);

  function hardleOpenNewTagModal() {
    setIsNewTagModalOpen(true);
  }

  function hardleCloseNewTagModal() {
    setIsNewTagModalOpen(false);
  }

  return (
    <div>
      <button onClick={hardleOpenNewTagModal}> Excluir </button>
      <Modal isOpen={isNewTagModalOpen} 
      onRequestClose={hardleCloseNewTagModal}>

        <ModalStyled>
          <h2>Deletar comentario</h2>
          <p>Voce tem certeza que deseja deletar esse comentario?</p>
          <FooterDelete>
            <button
              id="cancelar"
              class="cancelar"
              onClick={hardleCloseNewTagModal}
            >
              NÃO, CANCELAR
            </button>
            <button id="deletarConfirmacao" class="deletar">
              {" "}
              SIM, DELETAR
            </button>
          </FooterDelete>
        </ModalStyled>
      </Modal>
    </div>
  );
}
export default Modal;
