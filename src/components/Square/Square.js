import React from 'react';

import classes from './Square.module.css'

const Square = props => {
    const squareClasses = [classes.Square]

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