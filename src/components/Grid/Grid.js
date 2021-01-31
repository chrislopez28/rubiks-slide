import React from 'react';

import Square from '../Square/Square';
import classes from './Grid.module.css';

const Grid = props => {
    let gridClasses = ''
    if (props.gridClasses) {
        gridClasses = props.gridClasses.join(' ')
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