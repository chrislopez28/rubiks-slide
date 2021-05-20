import React from "react";

import classes from "./Button.module.scss";

interface ButtonProps {
  size?: string;
  type?: any;
  normal?: boolean;
  next?: boolean;
  disabled?: boolean;
  on?: void;
  onClick(): void;
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  let stylesArray = [classes.Button];

  switch (props.size) {
    case "menu":
      stylesArray.push(classes.Menu);
      break;
    case "control":
      stylesArray.push(classes.Control);
      break;
    case "next":
      stylesArray.push(classes.Next);
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
      className={stylesArray.join(" ")}
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
