import React from 'react';

import classes from './Square.module.css'

const Square = props => {
    let squareClasses = []
    if (props.mini) {
        squareClasses.push(classes.MiniSquare)
    } else {
        squareClasses.push(classes.Square)
    }

    switch (props.color) {
        case 1:
            squareClasses.push(classes.Blue)
            break;
        case 2:
            squareClasses.push(classes.Red)
            break;
        case 3:
            squareClasses.push(classes.Green)
            break;
        default:
            break;
    }

    return (
        <div className={squareClasses.join(' ')}></div>
    )
}

export default Square;