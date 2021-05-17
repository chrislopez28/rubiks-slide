import Button from "./Button/Button";
import Modal from "./UI/Modal/Modal";

export default function SelectDifficultyModal(props) {
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
