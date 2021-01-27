import React from 'react';

import MiniSquare from '../Square/MiniSquare/MiniSquare';
import classes from './TargetGrid.module.css';

const TargetGrid = props => {
    return (
        <div>
            <div className={classes.Row}>
                <MiniSquare color={props.matrix[0]} />
                <MiniSquare color={props.matrix[1]} />
                <MiniSquare color={props.matrix[2]} />
            </div>
            <div className={classes.Row}>
                <MiniSquare color={props.matrix[3]} />
                <MiniSquare color={props.matrix[4]} />
                <MiniSquare color={props.matrix[5]} />
            </div>
            <div className={classes.Row}>
                <MiniSquare color={props.matrix[6]} />
                <MiniSquare color={props.matrix[7]} />
                <MiniSquare color={props.matrix[8]} />
            </div>
        </div>
    )
}

export default TargetGrid;