"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Button_module_scss_1 = require("./Button.module.scss");
var Button = function (props) {
    var stylesArray = [Button_module_scss_1.default.Button];
    switch (props.size) {
        case 'menu':
            stylesArray.push(Button_module_scss_1.default.Menu);
            break;
        case 'control':
            stylesArray.push(Button_module_scss_1.default.Control);
            break;
        case 'next':
            stylesArray.push(Button_module_scss_1.default.Next);
            break;
        default:
            break;
    }
    if (props.normal) {
        stylesArray.push(Button_module_scss_1.default.Normal);
    }
    if (props.next) {
        stylesArray.push(Button_module_scss_1.default.Next);
    }
    if (props.on) {
        stylesArray.push(Button_module_scss_1.default.On);
    }
    return (<button className={stylesArray.join(' ')} onClick={props.onClick} type={props.type} disabled={props.disabled}>{props.children}
        </button>);
};
exports.default = Button;
