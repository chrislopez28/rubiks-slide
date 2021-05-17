import React from "react";
import styled from "styled-components";

import ControlButton from "./Button/ControlButton";
import Grid from "./Grid/Grid";

export default function GameScreen(props) {
  const GameScreen = styled.div`
    overflow: hidden;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 45vh;
  `;

  const Row = styled.div`
    margin: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <GameScreen>
      <Row>
        <ControlButton
          type="rotateLeft"
          onClick={() => props.slide("rotateLeft")}
          disabled={props.isSolved}
        />
        <ControlButton
          type="moveUp"
          onClick={() => props.slide("moveUp")}
          disabled={props.isSolved}
        />
        <ControlButton
          type="rotateRight"
          onClick={() => props.slide("rotateRight")}
          disabled={props.isSolved}
        />
      </Row>
      <Row>
        <ControlButton
          type="moveLeft"
          onClick={() => props.slide("moveLeft")}
          disabled={props.isSolved}
        />
        <Grid
          matrix={props.matrix}
          movement={props.movement}
          isSolved={props.isSolved}
        />
        <ControlButton
          type="moveRight"
          onClick={() => props.slide("moveRight")}
          disabled={props.isSolved}
        />
      </Row>
      <Row>
        <ControlButton
          type="moveDown"
          onClick={() => props.slide("moveDown")}
          disabled={props.isSolved}
        />
      </Row>
    </GameScreen>
  );
}
