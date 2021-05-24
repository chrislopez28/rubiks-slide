import styled, { keyframes } from "styled-components";

interface HelpPopupProps {
  children: any;
  show?: boolean;
}

const appear = keyframes`
  0% {
    opacity = 0;
  }

  100% {
    opacity = 1;
  }
`;

const HelpButtonPopupContainer = styled.div`
  position: absolute;
  bottom: 56px;
  right: 16px;
  margin-bottom: 8px;
  overflow-y: auto;
  width: 300px;
  max-height: 300px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0.25px 0.25px 0.25px 0.25px #ccc;
  z-index: 200;
  background-color: white;
  animation: ${appear} 2000ms infinite;
`;

export default function HelpPopup(props: HelpPopupProps) {
  return props.show ? (
    <HelpButtonPopupContainer>{props.children}</HelpButtonPopupContainer>
  ) : null;
}
