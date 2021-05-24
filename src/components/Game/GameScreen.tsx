import React from "react";
import styled from "styled-components";

import { Movement } from "../../ts/types";

import ControlButton from "../Button/ControlButton";
import Grid from "../Grid/Grid";

const GameScreenContainer = styled.div`
  padding-top: 20vh;
  overflow: hidden;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 55vh;
  z-index: 100;
`;

const Row = styled.div`
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface GameScreenProps {
  isSolved: boolean;
  matrix: number[];
  movement?: Movement;
  slide(arg: string): void;
}

export default function GameScreen(props: GameScreenProps) {
  return (
    <GameScreenContainer>
      <Row>
        <ControlButton
          type="rotateLeft"
          onClick={() => props.slide(Movement.RotateLeft)}
          disabled={props.isSolved}
        />
        <ControlButton
          type="moveUp"
          onClick={() => props.slide(Movement.MoveUp)}
          disabled={props.isSolved}
        />
        <ControlButton
          type="rotateRight"
          onClick={() => props.slide(Movement.RotateRight)}
          disabled={props.isSolved}
        />
      </Row>
      <Row>
        <ControlButton
          type="moveLeft"
          onClick={() => props.slide(Movement.MoveLeft)}
          disabled={props.isSolved}
        />
        <Grid
          matrix={props.matrix}
          movement={props.movement}
          isSolved={props.isSolved}
        />
        <ControlButton
          type="moveRight"
          onClick={() => props.slide(Movement.MoveRight)}
          disabled={props.isSolved}
        />
      </Row>
      <Row>
        <ControlButton
          type="moveDown"
          onClick={() => props.slide(Movement.MoveDown)}
          disabled={props.isSolved}
        />
      </Row>
    </GameScreenContainer>
  );
}
