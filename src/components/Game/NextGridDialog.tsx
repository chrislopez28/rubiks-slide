import styled from "styled-components";

import { Difficulty } from "../../ts/types";
import Button from "../Button/Button";

const NextGridDialogContainer = styled.div`
  height: 10vh;
  z-index: 100;
  margin: 1rem;
`;

interface NextGridDialogProps {
  difficulty: Difficulty;
  isSolved: Boolean;
  newGame(difficulty: Difficulty): void;
}

const NextGridDialog = (props: NextGridDialogProps) => (
  <NextGridDialogContainer>
    {props.isSolved ? (
      <Button size="next" onClick={() => props.newGame(props.difficulty)}>
        Next &rarr;
      </Button>
    ) : null}
  </NextGridDialogContainer>
);

export default NextGridDialog;
