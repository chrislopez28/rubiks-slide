import styled from "styled-components";

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 36px;
  z-index: 11;
  background-color: rgba(160, 193, 227, 0.75);
`;

export default function Footer(props) {
  return (
    <FooterContainer>
      <p></p>
    </FooterContainer>
  );
}
