import React from 'react';

import Square from '../Square/Square';
import classes from './Grid.module.css';

enum Movement {
  RotateLeft = "rotateLeft",
  RotateRight = "rotateRight",
  MoveUp = "moveUp",
  MoveDown = "moveDown",
  MoveLeft = "moveLeft",
  MoveRight = "moveRight"
}

interface GridProps {
  isSolved: Boolean;
  matrix: Number[];
  mini?: Boolean;
  movement: Movement;
}

const Grid: React.FunctionComponent<GridProps> = props => {
    let gridClasses: any[] | undefined = []

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

    let gridStyles = "";
    if (gridClasses) {
        gridStyles = gridClasses.join(' ')
    }

    return (
        <div className={gridStyles}>
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