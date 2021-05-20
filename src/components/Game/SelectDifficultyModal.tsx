import React from "react";

import Button from "../Button/Button";
import Modal from "../UI/Modal/Modal";

interface SelectDifficultyModalProps {
  modalClosed: Boolean;
  show: Boolean;
  startGameHandler(arg: String): void;
  toggleStart: React.MouseEventHandler<HTMLButtonElement>;
}

export default function SelectDifficultyModal(
  props: SelectDifficultyModalProps
) {
  return (
    <Modal show={props.show} modalClosed={props.modalClosed}>
      <h2>Select Difficulty:</h2>
      <Button size="menu" onClick={() => props.startGameHandler("normal")}>
        Normal
      </Button>
      <br />
      <Button size="menu" onClick={() => props.startGameHandler("hard")}>
        Hard
      </Button>
      <br />
      <br />
      <button onClick={props.toggleStart}>Cancel</button>
    </Modal>
  );
}
