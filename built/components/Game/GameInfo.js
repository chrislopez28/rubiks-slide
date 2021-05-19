"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var Grid_1 = require("../Grid/Grid");
var GameInfoContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 18vh;\n  width: 100%;\n  z-index: 50;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 36px;\n  padding: 0.25rem 0rem;\n  background-color: rgba(160, 193, 227, 0.75);\n  font-family: monospace;\n"], ["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 18vh;\n  width: 100%;\n  z-index: 50;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 36px;\n  padding: 0.25rem 0rem;\n  background-color: rgba(160, 193, 227, 0.75);\n  font-family: monospace;\n"])));
var Score = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 0 auto;\n  padding: 6px;\n  width: 60vw;\n  height: 100%;\n  text-align: left;\n  font-size: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"], ["\n  margin: 0 auto;\n  padding: 6px;\n  width: 60vw;\n  height: 100%;\n  text-align: left;\n  font-size: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])));
var Panel = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 25vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"], ["\n  width: 25vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));
var ScoreList = styled_components_1.default.ul(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n"], ["\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n"])));
var ScoreItem = styled_components_1.default.li(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
var TargetTitle = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font: 1rem;\n  padding: 4px;\n  font-weight: bold;\n"], ["\n  font: 1rem;\n  padding: 4px;\n  font-weight: bold;\n"])));
function GameInfo(props) {
    return (<GameInfoContainer>
      <Score>
        <ScoreList>
          <ScoreItem>
            <strong>Solved</strong>: {props.numberSolved}
          </ScoreItem>
          <ScoreItem>
            <strong>Skipped</strong>: {props.numberSkipped}
          </ScoreItem>
          <ScoreItem>
            <strong>Number Moves</strong>: {props.moveCount}
          </ScoreItem>
        </ScoreList>
      </Score>

      <Panel>
        <div>
          <TargetTitle>Target</TargetTitle>
          <Grid_1.default matrix={props.targetGrid} mini/>
        </div>
      </Panel>
    </GameInfoContainer>);
}
exports.default = GameInfo;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
