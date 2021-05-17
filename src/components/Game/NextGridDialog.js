import styled from "styled-components";

import Button from "../Button/Button";

const NextGridDialogContainer = styled.div`
  height: 10vh;
  z-index: 100;
  margin: 1rem;
`;

export default function NextGridDialog(props) {
  let next = null;
  if (props.isSolved) {
    next = (
      <Button size="next" onClick={() => props.newGame(props.difficulty)}>
        Next &rarr;
      </Button>
    );
  }

  return <NextGridDialogContainer>{next}</NextGridDialogContainer>;
}
