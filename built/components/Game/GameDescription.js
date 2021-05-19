"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 20vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"], ["\n  height: 20vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"])));
function GameDescription(props) {
    return (<Container>
      <p>
        Press the arrows to shift and rotate the squares so that the design
        matches the target.
      </p>
    </Container>);
}
exports.default = GameDescription;
var templateObject_1;
