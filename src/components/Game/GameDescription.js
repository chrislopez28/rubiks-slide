import styled from "styled-components";

const Container = styled.div`
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 2rem;
  padding: 0px;
`;

export default function GameDescription(props) {
  return (
    <Container>
      <Title>Rubik's Slide</Title>
      <p>
        Press the arrows to shift and rotate the squares so that the design
        matches the target.
      </p>
    </Container>
  );
}
