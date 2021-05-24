import React from "react";
import styled from "styled-components";

interface BackdropProps {
  click(): void;
  show?: Boolean;
}

const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 101;
`;

const Backdrop: React.FunctionComponent<BackdropProps> = (props) =>
  props.show ? (
    <BackdropContainer onClick={() => props.click}></BackdropContainer>
  ) : null;

export default Backdrop;
