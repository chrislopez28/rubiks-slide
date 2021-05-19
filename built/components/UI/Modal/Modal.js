"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Modal_module_css_1 = require("./Modal.module.css");
var Backdrop_1 = require("../Backdrop/Backdrop");
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Modal.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    };
    Modal.prototype.render = function () {
        return (<react_1.default.Fragment>
                <Backdrop_1.default show={this.props.show} click={this.props.modalClosed}/>
                <div className={Modal_module_css_1.default.Modal} style={{
                transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: this.props.show ? '1' : '0'
            }}>
                    {this.props.children}
                </div>
            </react_1.default.Fragment>);
    };
    return Modal;
}(react_1.Component));
;
exports.default = Modal;
