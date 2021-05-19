import styled from "styled-components";

const HelpButtonBackdropContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 101;
  background-color: transparent;
`;

export default function HelpButtonBackdrop(props) {
  return props.show && <HelpButtonBackdropContainer onClick={props.click} />;
}
