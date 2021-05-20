import React from 'react';

import classes from './Backdrop.module.css';

interface Props {
    click: React.MouseEventHandler<HTMLDivElement>;
    show?: Boolean;
}

const backdrop = (props: Props) => (
    props.show ? <div className={classes.Backdrop} onClick={() => props.click}></div> : null
)

export default backdrop;