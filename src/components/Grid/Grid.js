import React from 'react';

import Square from '../Square/Square';
import classes from './Grid.module.css';

const Grid = props => {
    return (
        <div className={props.gridClasses.join(' ')}>
            <div className={classes.Row}>
                <Square color={props.matrix[0]} />
                <Square color={props.matrix[1]} />
                <Square color={props.matrix[2]} />
            </div>
            <div className={classes.Row}>
                <Square color={props.matrix[3]} />
                <Square color={props.matrix[4]} />
                <Square color={props.matrix[5]} />
            </div>
            <div className={classes.Row}>
                <Square color={props.matrix[6]} />
                <Square color={props.matrix[7]} />
                <Square color={props.matrix[8]} />
            </div>
        </div>
    )
}

export default Grid;