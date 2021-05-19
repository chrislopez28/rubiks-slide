"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var DrawerToggle_module_css_1 = require("./DrawerToggle.module.css");
function drawerToggle(props) {
    var bar1 = [DrawerToggle_module_css_1.default.bar1];
    var bar2 = [DrawerToggle_module_css_1.default.bar2];
    var bar3 = [DrawerToggle_module_css_1.default.bar3];
    if (props.showSideDrawer) {
        bar1.push(DrawerToggle_module_css_1.default.open1);
        bar2.push(DrawerToggle_module_css_1.default.open2);
        bar3.push(DrawerToggle_module_css_1.default.open3);
    }
    return (<div className={DrawerToggle_module_css_1.default.DrawerToggle} onClick={props.click}>
      <div className={bar1.join(" ")}></div>
      <div className={bar2.join(" ")}></div>
      <div className={bar3.join(" ")}></div>
    </div>);
}
exports.default = drawerToggle;
