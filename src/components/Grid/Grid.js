import React from 'react';

import Square from '../Square/Square';
import classes from './Grid.module.css';

const Grid = props => {
    let gridClasses = []

    switch (props.movement) {
        case 'rotateLeft':
            gridClasses = [classes.Grid, classes.RotateLeft];
            break;
        case 'rotateRight':
            gridClasses = [classes.Grid, classes.RotateRight];
            break;
        case 'moveUp':
            gridClasses = [classes.Grid, classes.MoveUp];
            break;
        case 'moveDown':
            gridClasses = [classes.Grid, classes.MoveDown];
            break;
        case 'moveLeft':
            gridClasses = [classes.Grid, classes.MoveLeft];
            break;
        case 'moveRight':
            gridClasses = [classes.Grid, classes.MoveRight];
            break;
        default:
            break;
    }

    if (props.isSolved) {
        gridClasses.push(classes.Solved)
    }

    if (gridClasses) {
        gridClasses = gridClasses.join(' ')
    }

    return (
        <div className={gridClasses}>
            <div className={classes.Row}>
                <Square color={props.matrix[0]} mini={props.mini} />
                <Square color={props.matrix[1]} mini={props.mini} />
                <Square color={props.matrix[2]} mini={props.mini} />
            </div>
            <div className={classes.Row}>
                <Square color={props.matrix[3]} mini={props.mini} />
                <Square color={props.matrix[4]} mini={props.mini} />
                <Square color={props.matrix[5]} mini={props.mini} />
            </div>
            <div className={classes.Row}>
                <Square color={props.matrix[6]} mini={props.mini} />
                <Square color={props.matrix[7]} mini={props.mini} />
                <Square color={props.matrix[8]} mini={props.mini} />
            </div>
        </div>
    )
}

export default Grid;