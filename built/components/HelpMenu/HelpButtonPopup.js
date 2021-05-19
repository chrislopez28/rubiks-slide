"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var appear = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    opacity = 0;\n  }\n\n  100% {\n    opacity = 1;\n  }\n"], ["\n  0% {\n    opacity = 0;\n  }\n\n  100% {\n    opacity = 1;\n  }\n"])));
var HelpButtonPopupContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 56px;\n  right: 16px;\n  margin-bottom: 8px;\n  //   height: 200px;\n  overflow-y: auto;\n  width: 300px;\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: 0.25px 0.25px 0.25px 0.25px #ccc;\n  z-index: 200;\n  background-color: white;\n  animation: ", " 2000ms infinite;\n"], ["\n  position: absolute;\n  bottom: 56px;\n  right: 16px;\n  margin-bottom: 8px;\n  //   height: 200px;\n  overflow-y: auto;\n  width: 300px;\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: 0.25px 0.25px 0.25px 0.25px #ccc;\n  z-index: 200;\n  background-color: white;\n  animation: ", " 2000ms infinite;\n"])), appear);
function HelpButtonPopup(props) {
    return (props.show && (<HelpButtonPopupContainer onClick={props.click}>
        {props.children}
      </HelpButtonPopupContainer>));
}
exports.default = HelpButtonPopup;
var templateObject_1, templateObject_2;
