import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
    let stylesArray = [classes.Button];

    switch (props.size) {
        case 'small':
            stylesArray.push(classes.Small);
            break;
        case 'large':
            stylesArray.push(classes.Large);
            break;
        case 'xLarge':
            stylesArray.push(classes.XLarge);
            break;
        case 'xxLarge':
            stylesArray.push(classes.XXLarge);
            break;
        default:
            break;
    }

    if (props.normal) {
        stylesArray.push(classes.Normal)
    }

    if (props.next) {
        stylesArray.push(classes.Next)
    }

    if (props.on) {
        stylesArray.push(classes.On)
    }

    return (
        <button
            className={stylesArray.join(' ')}
            onClick={props.onClick}
            type={props.type}
            disabled={props.disabled}>{props.children}
        </button>
    )
}

export default Button;