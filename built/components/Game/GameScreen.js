"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var ControlButton_1 = require("../Button/ControlButton");
var Grid_1 = require("../Grid/Grid");
var GameScreenContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding-top: 20vh;\n  overflow: hidden;\n  min-height: 200px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 45vh;\n"], ["\n  padding-top: 20vh;\n  overflow: hidden;\n  min-height: 200px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 45vh;\n"])));
var Row = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  margin: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
function GameScreen(props) {
    return (<GameScreenContainer>
      <Row>
        <ControlButton_1.default type="rotateLeft" onClick={function () { return props.slide("rotateLeft"); }} disabled={props.isSolved}/>
        <ControlButton_1.default type="moveUp" onClick={function () { return props.slide("moveUp"); }} disabled={props.isSolved}/>
        <ControlButton_1.default type="rotateRight" onClick={function () { return props.slide("rotateRight"); }} disabled={props.isSolved}/>
      </Row>
      <Row>
        <ControlButton_1.default type="moveLeft" onClick={function () { return props.slide("moveLeft"); }} disabled={props.isSolved}/>
        <Grid_1.default matrix={props.matrix} movement={props.movement} isSolved={props.isSolved}/>
        <ControlButton_1.default type="moveRight" onClick={function () { return props.slide("moveRight"); }} disabled={props.isSolved}/>
      </Row>
      <Row>
        <ControlButton_1.default type="moveDown" onClick={function () { return props.slide("moveDown"); }} disabled={props.isSolved}/>
      </Row>
    </GameScreenContainer>);
}
exports.default = GameScreen;
var templateObject_1, templateObject_2;
