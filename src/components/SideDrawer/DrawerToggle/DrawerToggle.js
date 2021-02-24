import React from 'react';

import styles from './DrawerToggle.module.css';

const drawerToggle = (props) => (
    <div 
        className={styles.DrawerToggle}
        onClick={props.click}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default drawerToggle;