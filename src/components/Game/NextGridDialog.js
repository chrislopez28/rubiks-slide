import styled from "styled-components";

import Button from "../Button/Button";

const NextGridDialogContainer = styled.div`
  height: 10vh;
  z-index: 100;
  margin: 1rem;
`;
const NextGridDialog = (props) => (
  <NextGridDialogContainer>
    {props.isSolved ? (
      <Button size="next" onClick={() => props.newGame(props.difficulty)}>
        Next &rarr;
      </Button>
    ) : null}
  </NextGridDialogContainer>
);

export default NextGridDialog;
