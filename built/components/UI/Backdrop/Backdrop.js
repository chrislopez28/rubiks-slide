"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Backdrop_module_css_1 = require("./Backdrop.module.css");
var backdrop = function (props) { return (props.show ? <div className={Backdrop_module_css_1.default.Backdrop} onClick={props.click}></div> : null); };
exports.default = backdrop;
