import styled from "styled-components";

const Container = styled.div`
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function GameDescription(props) {
  return (
    <Container>
      <p>
        Press the arrows to shift and rotate the squares so that the design
        matches the target.
      </p>
    </Container>
  );
}
