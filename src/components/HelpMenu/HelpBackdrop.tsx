import styled from "styled-components";

interface HelpBackdropProps {
  click(): void;
  show?: Boolean;
}

const HelpBackdropContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 101;
  background-color: transparent;
`;

export default function HelpBackdrop(props: HelpBackdropProps) {
  return props.show ? <HelpBackdropContainer onClick={props.click} /> : null;
}
