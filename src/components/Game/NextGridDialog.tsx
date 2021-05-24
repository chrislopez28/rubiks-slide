import styled from "styled-components";

import { Difficulty } from "../../ts/types";
import Backdrop from "../UI/Backdrop/Backdrop";

const NextGridDialogContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  margin: 0 auto;
  background-color: transparent;
  text-align: center;
`;

const NextButton = styled.div`
  position: fixed;
  background-color: rgba(256, 256, 256, 0.85);
  border: 2px solid black;
  padding: 8px;
  z-index: 1001;
  font-size: 3rem;
  font-family: monospace;
  transition-delay: 2s;

  &:hover {
    cursor: pointer;
    background-color: rgba(240, 240, 240, 0.85);
  }
  &:active {
    cursor: pointer;
    background-color: rgba(224, 224, 224, 0.85);
  }
`;

interface NextGridDialogProps {
  difficulty: Difficulty;
  isSolved: boolean;
  newGame(difficulty: Difficulty): void;
}

const NextGridDialog = (props: NextGridDialogProps) => (
  <NextGridDialogContainer>
    {props.isSolved ? (
      <>
        <NextButton onClick={() => props.newGame(props.difficulty)}>
          Next &rarr;
        </NextButton>
        <Backdrop click={() => null} show={props.isSolved} />
      </>
    ) : null}
  </NextGridDialogContainer>
);

export default NextGridDialog;
