import styled from "styled-components";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(160, 193, 227, 0.75);
  height: 47px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  text-decoration: none;
  width: 100%;
  padding: 0px;
  margin: 0px;
  font-size: 1.25rem;
`;

export default function Header(props) {
  return (
    <HeaderContainer>
      <Title href="/">Rubik's Slide</Title>
    </HeaderContainer>
  );
}
