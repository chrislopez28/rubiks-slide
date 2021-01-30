import React from 'react';

import classes from './Square.module.css'

const Square = props => {
    const squareClasses = [classes.Square]

    switch (props.color) {
        case 'blue':
            squareClasses.push(classes.Blue)
            break;
        case 'green':
            squareClasses.push(classes.Gren)
            break;
        case 'red':
            squareClasses.push(classes.Red)
            break;
        case 'yellow':
            squareClasses.push(classes.Yellow)
            break;
        default:
            break;
    }

    return (
        <div className={squareClasses.join(' ')}></div>
    )
}

export default Square;