"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Square_1 = require("../Square/Square");
var Grid_module_css_1 = require("./Grid.module.css");
var Grid = function (props) {
    var gridClasses = [];
    switch (props.movement) {
        case 'rotateLeft':
            gridClasses = [Grid_module_css_1.default.Grid, Grid_module_css_1.default.RotateLeft];
            break;
        case 'rotateRight':
            gridClasses = [Grid_module_css_1.default.Grid, Grid_module_css_1.default.RotateRight];
            break;
        case 'moveUp':
            gridClasses = [Grid_module_css_1.default.Grid, Grid_module_css_1.default.MoveUp];
            break;
        case 'moveDown':
            gridClasses = [Grid_module_css_1.default.Grid, Grid_module_css_1.default.MoveDown];
            break;
        case 'moveLeft':
            gridClasses = [Grid_module_css_1.default.Grid, Grid_module_css_1.default.MoveLeft];
            break;
        case 'moveRight':
            gridClasses = [Grid_module_css_1.default.Grid, Grid_module_css_1.default.MoveRight];
            break;
        default:
            break;
    }
    if (props.isSolved) {
        gridClasses.push(Grid_module_css_1.default.Solved);
    }
    if (gridClasses) {
        gridClasses = gridClasses.join(' ');
    }
    return (<div className={gridClasses}>
            <div className={Grid_module_css_1.default.Row}>
                <Square_1.default color={props.matrix[0]} mini={props.mini}/>
                <Square_1.default color={props.matrix[1]} mini={props.mini}/>
                <Square_1.default color={props.matrix[2]} mini={props.mini}/>
            </div>
            <div className={Grid_module_css_1.default.Row}>
                <Square_1.default color={props.matrix[3]} mini={props.mini}/>
                <Square_1.default color={props.matrix[4]} mini={props.mini}/>
                <Square_1.default color={props.matrix[5]} mini={props.mini}/>
            </div>
            <div className={Grid_module_css_1.default.Row}>
                <Square_1.default color={props.matrix[6]} mini={props.mini}/>
                <Square_1.default color={props.matrix[7]} mini={props.mini}/>
                <Square_1.default color={props.matrix[8]} mini={props.mini}/>
            </div>
        </div>);
};
exports.default = Grid;
