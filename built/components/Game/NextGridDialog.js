"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var Button_1 = require("../Button/Button");
var NextGridDialogContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 10vh;\n  z-index: 100;\n  margin: 1rem;\n"], ["\n  height: 10vh;\n  z-index: 100;\n  margin: 1rem;\n"])));
var NextGridDialog = function (props) { return (<NextGridDialogContainer>
    {props.isSolved ? (<Button_1.default size="next" onClick={function () { return props.newGame(props.difficulty); }}>
        Next &rarr;
      </Button_1.default>) : null}
  </NextGridDialogContainer>); };
exports.default = NextGridDialog;
var templateObject_1;
