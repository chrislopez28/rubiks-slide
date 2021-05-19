"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ControlButton_module_scss_1 = require("./ControlButton.module.scss");
var ControlButton = function (props) {
    var stylesArray = [ControlButton_module_scss_1.default.ControlButton];
    switch (props.type) {
        case 'moveUp':
            stylesArray.push(ControlButton_module_scss_1.default.Triangle);
            stylesArray.push(ControlButton_module_scss_1.default.TriangleUp);
            break;
        case 'moveDown':
            stylesArray.push(ControlButton_module_scss_1.default.Triangle);
            stylesArray.push(ControlButton_module_scss_1.default.TriangleDown);
            break;
        case 'moveLeft':
            stylesArray.push(ControlButton_module_scss_1.default.Triangle);
            stylesArray.push(ControlButton_module_scss_1.default.TriangleLeft);
            break;
        case 'moveRight':
            stylesArray.push(ControlButton_module_scss_1.default.Triangle);
            stylesArray.push(ControlButton_module_scss_1.default.TriangleRight);
            break;
        case 'rotateLeft':
            stylesArray.push(ControlButton_module_scss_1.default.Rotate);
            stylesArray.push(ControlButton_module_scss_1.default.RotateLeft);
            break;
        case 'rotateRight':
            stylesArray.push(ControlButton_module_scss_1.default.Rotate);
            stylesArray.push(ControlButton_module_scss_1.default.RotateRight);
            break;
        default:
            break;
    }
    if (props.normal) {
        stylesArray.push(ControlButton_module_scss_1.default.Normal);
    }
    if (props.next) {
        stylesArray.push(ControlButton_module_scss_1.default.Next);
    }
    if (props.on) {
        stylesArray.push(ControlButton_module_scss_1.default.On);
    }
    return (<button aria-label={props.type.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase(); })} className={stylesArray.join(' ')} onClick={props.onClick} type={props.type} disabled={props.disabled}>{props.children}
        </button>);
};
exports.default = ControlButton;
