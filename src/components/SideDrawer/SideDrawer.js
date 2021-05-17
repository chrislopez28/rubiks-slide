import React from "react";

import Backdrop from "../UI/Backdrop/Backdrop";
import styles from "./SideDrawer.module.css";

export default function SideDrawer(props) {
  let attachedClasses = [styles.SideDrawer, styles.Close];
  if (props.open) {
    attachedClasses = [styles.SideDrawer, styles.Open];
  }

  return (
    <>
      <Backdrop show={props.open} click={props.click} />
      <div className={attachedClasses.join(" ")}>
        {props.children}
        <button className={styles.CloseButton} onClick={props.click}>
          Close
        </button>
      </div>
    </>
  );
}
