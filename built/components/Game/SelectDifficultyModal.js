"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Button_1 = require("../Button/Button");
var Modal_1 = require("../UI/Modal/Modal");
function SelectDifficultyModal(props) {
    return (<Modal_1.default show={props.show} modalClosed={props.modalClosed}>
      <h2>Select Difficulty:</h2>
      <Button_1.default size="menu" onClick={function () { return props.startGameHandler("normal"); }}>
        Normal
      </Button_1.default>
      <br />
      <Button_1.default size="menu" onClick={function () { return props.startGameHandler("hard"); }}>
        Hard
      </Button_1.default>
      <br />
      <br />
      <button onClick={props.toggleStart}>Cancel</button>
    </Modal_1.default>);
}
exports.default = SelectDifficultyModal;
