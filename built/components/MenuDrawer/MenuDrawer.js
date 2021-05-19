"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Backdrop_1 = require("../UI/Backdrop/Backdrop");
var MenuDrawerContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  width: 100%;\n  margin-top: 47px;\n  left: 0;\n  top: 0;\n  z-index: 100;\n  background-color: rgba(160, 193, 227, 0.75);\n  box-sizing: border-box;\n  color: white;\n  transform: ", ";\n  transition: transform 0.3s ease-out;\n"], ["\n  position: fixed;\n  width: 100%;\n  margin-top: 47px;\n  left: 0;\n  top: 0;\n  z-index: 100;\n  background-color: rgba(160, 193, 227, 0.75);\n  box-sizing: border-box;\n  color: white;\n  transform: ", ";\n  transition: transform 0.3s ease-out;\n"])), function (props) { return (props.open ? "translateY(0)" : "translateY(-100%)"); });
var MenuButton = styled_components_1.default.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: #a0c0e3;\n  border: none;\n  width: 100%;\n  color: black;\n  cursor: pointer;\n  font: inherit;\n  padding: 8px 8px;\n  font-weight: bold;\n\n  &:hover {\n    background-color: #90b0d3;\n  }\n  &:active {\n    background-color: #80a0c3;\n  }\n"], ["\n  background-color: #a0c0e3;\n  border: none;\n  width: 100%;\n  color: black;\n  cursor: pointer;\n  font: inherit;\n  padding: 8px 8px;\n  font-weight: bold;\n\n  &:hover {\n    background-color: #90b0d3;\n  }\n  &:active {\n    background-color: #80a0c3;\n  }\n"])));
function MenuDrawer(props) {
    return (<>
      <Backdrop_1.default show={props.open} click={props.click}/>
      <MenuDrawerContainer open={props.open}>
        <MenuButton onClick={function () {
            props.clickNewGame();
            props.click();
        }}>
          New Game
        </MenuButton>
        <MenuButton onClick={function () {
            props.clickSkip();
            props.click();
        }}>
          Skip
        </MenuButton>
        <MenuButton onClick={function () {
            props.clickAutosolve();
            props.click();
        }}>
          Autosolve (Random)
        </MenuButton>
        {props.children}
      </MenuDrawerContainer>
    </>);
}
exports.default = MenuDrawer;
var templateObject_1, templateObject_2;
