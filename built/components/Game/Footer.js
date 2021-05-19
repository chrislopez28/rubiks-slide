"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var FooterContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 36px;\n  z-index: 11;\n  background-color: rgba(160, 193, 227, 0.75);\n  font-family: monospace;\n"], ["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 36px;\n  z-index: 11;\n  background-color: rgba(160, 193, 227, 0.75);\n  font-family: monospace;\n"])));
function Footer(props) {
    return (<FooterContainer>
      <p>
        2021{" "}
        <a href="https://chrislopez.page" target="_blank" rel="noopener noreferrer">
          Chris Lopez
        </a>
        . View code on{" "}
        <a href="https://github.com/chrislopez28/rubiks-slide" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        .
      </p>
    </FooterContainer>);
}
exports.default = Footer;
var templateObject_1;
