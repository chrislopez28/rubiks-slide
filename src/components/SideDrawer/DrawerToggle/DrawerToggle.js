import React from "react";

import styles from "./DrawerToggle.module.css";

export default function drawerToggle(props) {
  let bar1 = [styles.bar1];
  let bar2 = [styles.bar2];
  let bar3 = [styles.bar3];

  if (props.showSideDrawer) {
    bar1.push(styles.open1);
    bar2.push(styles.open2);
    bar3.push(styles.open3);
  }

  return (
    <div className={styles.DrawerToggle} onClick={props.click}>
      <div className={bar1.join(" ")}></div>
      <div className={bar2.join(" ")}></div>
      <div className={bar3.join(" ")}></div>
    </div>
  );
}
