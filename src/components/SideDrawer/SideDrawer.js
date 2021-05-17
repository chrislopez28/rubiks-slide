import React from "react";

import Backdrop from "../UI/Backdrop/Backdrop";
import Button from "../Button/Button";
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
        <h2>Menu</h2>
        <Button size="menu" onClick={props.clickNewGame}>
          New Game
        </Button>
        <Button size="menu" onClick={props.clickSkip}>
          Skip
        </Button>
        <Button
          size="menu"
          onClick={props.clickAutosolve}
          on={props.isAutoplay}
        >
          Autosolve
        </Button>
        {props.children}
        <button className={styles.CloseButton} onClick={props.click}>
          Close
        </button>
      </div>
    </>
  );
}
