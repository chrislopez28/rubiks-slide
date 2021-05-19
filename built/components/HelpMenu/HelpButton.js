"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var HelpButtonBackdrop_1 = require("./HelpButtonBackdrop");
var HelpButtonPopup_1 = require("./HelpButtonPopup");
var styled_components_1 = require("styled-components");
var HelpButtonContainer = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 16px;\n  right: 16px;\n  height: 40px;\n  width: 40px;\n  z-index: 102;\n  background-color: #ddd;\n  border: 1px solid #ccc;\n  border-radius: 20px;\n  font-size: 1.5rem;\n\n  &:hover {\n    cursor: pointer;\n    background-color: #ccc;\n  }\n"], ["\n  position: absolute;\n  bottom: 16px;\n  right: 16px;\n  height: 40px;\n  width: 40px;\n  z-index: 102;\n  background-color: #ddd;\n  border: 1px solid #ccc;\n  border-radius: 20px;\n  font-size: 1.5rem;\n\n  &:hover {\n    cursor: pointer;\n    background-color: #ccc;\n  }\n"])));
var Key = styled_components_1.default.kbd(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: #eee;\n  border-radius: 3px;\n  border: 1px solid #b4b4b4;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n    0 2px 0 0 rgba(255, 255, 255, 0.7) inset;\n  color: #333;\n  display: inline-block;\n  font-size: 0.85rem;\n  font-weight: 700;\n  line-height: 1;\n  padding: 2px 4px;\n  white-space: nowrap;\n"], ["\n  background-color: #eee;\n  border-radius: 3px;\n  border: 1px solid #b4b4b4;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n    0 2px 0 0 rgba(255, 255, 255, 0.7) inset;\n  color: #333;\n  display: inline-block;\n  font-size: 0.85rem;\n  font-weight: 700;\n  line-height: 1;\n  padding: 2px 4px;\n  white-space: nowrap;\n"])));
var List = styled_components_1.default.ul(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  list-style: none;\n  padding: 0;\n  text-align: left;\n"], ["\n  list-style: none;\n  padding: 0;\n  text-align: left;\n"])));
function HelpButton(props) {
    var _a = react_1.useState(false), showPopup = _a[0], setShowPopup = _a[1];
    return (<>
      <HelpButtonContainer onClick={function () { return setShowPopup(!showPopup); }}>
        ?
      </HelpButtonContainer>
      <HelpButtonPopup_1.default show={showPopup}>
        <h4>How to Play</h4>
        <p style={{ textAlign: "left" }}>
          Press the arrows to "slide" and "rotate" the grid of squares so that
          it matches the target shown on the bottom right.
        </p>
        <h4>Keyboard Controls</h4>
        <List>
          <li>
            Slide Left: <Key>A</Key>, <Key>Left Arrow</Key>
          </li>
          <li>
            Slide Right: <Key>D</Key>, <Key>Right Arrow</Key>
          </li>
          <li>
            Slide Up: <Key>W</Key>, <Key>Up Arrow</Key>
          </li>
          <li>
            Slide Down: <Key>S</Key>, <Key>Down Arrow</Key>
          </li>
          <li>
            Rotate Counterclockwise: <Key>Q</Key>, <Key>Page Up</Key>
          </li>
          <li>
            Rotate Clockwise: <Key>E</Key>, <Key>Page Down</Key>
          </li>
        </List>
      </HelpButtonPopup_1.default>
      <HelpButtonBackdrop_1.default show={showPopup} click={function () { return setShowPopup(false); }}/>
    </>);
}
exports.default = HelpButton;
var templateObject_1, templateObject_2, templateObject_3;
