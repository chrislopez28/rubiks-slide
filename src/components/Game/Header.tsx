import styled from "styled-components";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #a0c0e3;
  height: 47px;
  width: 100%;
  z-index: 102;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.a`
  text-decoration: none;
  color: #222;
  width: 100%;
  padding: 0px;
  margin: 0px;
  font-size: 1.75rem;
  font-family: monospace;

  &:hover {
    cursor: pointer;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Title href="/">Rubik's Slide</Title>
    </HeaderContainer>
  );
}
