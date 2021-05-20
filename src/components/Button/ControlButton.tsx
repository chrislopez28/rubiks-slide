import React from "react";

import classes from "./ControlButton.module.scss";

interface ControlButtonProps {
  disabled: boolean;
  on?: boolean;
  onClick(): void;
  next?: boolean;
  normal?: boolean;
  type: any;
}

const ControlButton: React.FunctionComponent<ControlButtonProps> = (props) => {
  let stylesArray = [classes.ControlButton];

  switch (props.type) {
    case "moveUp":
      stylesArray.push(classes.Triangle);
      stylesArray.push(classes.TriangleUp);
      break;
    case "moveDown":
      stylesArray.push(classes.Triangle);
      stylesArray.push(classes.TriangleDown);
      break;
    case "moveLeft":
      stylesArray.push(classes.Triangle);
      stylesArray.push(classes.TriangleLeft);
      break;
    case "moveRight":
      stylesArray.push(classes.Triangle);
      stylesArray.push(classes.TriangleRight);
      break;
    case "rotateLeft":
      stylesArray.push(classes.Rotate);
      stylesArray.push(classes.RotateLeft);
      break;
    case "rotateRight":
      stylesArray.push(classes.Rotate);
      stylesArray.push(classes.RotateRight);
      break;
    default:
      break;
  }

  if (props.normal) {
    stylesArray.push(classes.Normal);
  }

  if (props.next) {
    stylesArray.push(classes.Next);
  }

  if (props.on) {
    stylesArray.push(classes.On);
  }

  return (
    <button
      aria-label={props.type
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, function (str: string) {
          return str.toUpperCase();
        })}
      className={stylesArray.join(" ")}
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default ControlButton;
