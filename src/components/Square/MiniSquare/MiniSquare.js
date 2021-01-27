import React from 'react';

import classes from './MiniSquare.module.css'

const Square = props => {
    const squareClasses = [classes.MiniSquare]

    switch (props.color) {
        case 'blue':
            squareClasses.push(classes.Blue)
            break;
        case 'red':
            squareClasses.push(classes.Red)
            break;
        default:
            break;
    }

    return (
        <div className={squareClasses.join(' ')}></div>
    )
}

export default Square;