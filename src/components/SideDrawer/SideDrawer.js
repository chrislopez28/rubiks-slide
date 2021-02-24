import React from 'react';

import styles from './SideDrawer.module.css';

export default function SideDrawer(props) {
    let attachedClasses = [styles.SideDrawer, styles.Close]
    if (props.open) {
        attachedClasses = [styles.SideDrawer, styles.Open]
    }

    return (
        <React.Fragment>
            <div></div>
            <div className={attachedClasses.join(' ')} >
                {props.children}

                <button
                    className={styles.CloseButton} 
                    onClick={props.click}>Close</button>
            </div>
        </React.Fragment>
    )
}