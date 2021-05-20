import styled from "styled-components";

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 36px;
  z-index: 11;
  background-color: rgba(160, 193, 227, 0.75);
  font-family: monospace;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>
        2021{" "}
        <a
          href="https://chrislopez.page"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chris Lopez
        </a>
        . View code on{" "}
        <a
          href="https://github.com/chrislopez28/rubiks-slide"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </FooterContainer>
  );
}
