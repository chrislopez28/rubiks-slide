"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Square_module_css_1 = require("./Square.module.css");
var Square = function (props) {
    var squareClasses = [];
    if (props.mini) {
        squareClasses.push(Square_module_css_1.default.MiniSquare);
    }
    else {
        squareClasses.push(Square_module_css_1.default.Square);
    }
    switch (props.color) {
        case 1:
            squareClasses.push(Square_module_css_1.default.Blue);
            break;
        case 2:
            squareClasses.push(Square_module_css_1.default.Red);
            break;
        case 3:
            squareClasses.push(Square_module_css_1.default.Green);
            break;
        default:
            break;
    }
    return (<div className={squareClasses.join(' ')}></div>);
};
exports.default = Square;
