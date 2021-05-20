import React from "react";

import classes from "./Square.module.css";

interface SquareProps {
  color: number;
  mini?: boolean;
}

export default function Square(props: SquareProps) {
  let squareClasses = [];
  if (props.mini) {
    squareClasses.push(classes.MiniSquare);
  } else {
    squareClasses.push(classes.Square);
  }

  switch (props.color) {
    case 1:
      squareClasses.push(classes.Blue);
      break;
    case 2:
      squareClasses.push(classes.Red);
      break;
    case 3:
      squareClasses.push(classes.Green);
      break;
    default:
      break;
  }

  return <div className={squareClasses.join(" ")}></div>;
}
