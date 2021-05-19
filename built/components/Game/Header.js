"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var HeaderContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: #a0c0e3;\n  height: 47px;\n  width: 100%;\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: #a0c0e3;\n  height: 47px;\n  width: 100%;\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));
var Title = styled_components_1.default.a(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  text-decoration: none;\n  color: #222;\n  width: 100%;\n  padding: 0px;\n  margin: 0px;\n  font-size: 1.75rem;\n  font-family: monospace;\n\n  &:hover {\n    cursor: pointer;\n  }\n"], ["\n  text-decoration: none;\n  color: #222;\n  width: 100%;\n  padding: 0px;\n  margin: 0px;\n  font-size: 1.75rem;\n  font-family: monospace;\n\n  &:hover {\n    cursor: pointer;\n  }\n"])));
function Header(props) {
    return (<HeaderContainer>
      <Title href="/">Rubik's Slide</Title>
    </HeaderContainer>);
}
exports.default = Header;
var templateObject_1, templateObject_2;
