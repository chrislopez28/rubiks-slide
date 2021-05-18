import React from "react";
import styled from "styled-components";

import Backdrop from "../UI/Backdrop/Backdrop";
import Button from "../Button/Button";

const SideDrawerContainer = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: rgba(160, 193, 227, 0.75);
  padding: 32px 16px;
  box-sizing: border-box;
  color: white;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-out;
`;

const CloseButton = styled.button`
  background-color: #e3ce30;
  border: none;
  color: black;
  cursor: pointer;
  font: inherit;
  padding: 8px 8px;
  margin: 8px;
  font-weight: bold;
  border: 2px solid black;
  border-radius: 5px;

  &:hover {
    background-color: #cab722;
  }
  &:active {
    background-color: #af9e1b;
  }
`;

export default function SideDrawer(props) {
  return (
    <>
      <Backdrop show={props.open} click={props.click} />
      <SideDrawerContainer open={props.open}>
        <h2 style={{ color: "black" }}>Menu</h2>
        <Button
          size="menu"
          onClick={() => {
            props.clickNewGame();
            props.click();
          }}
        >
          New Game
        </Button>
        <Button
          size="menu"
          onClick={() => {
            props.clickSkip();
            props.click();
          }}
        >
          Skip
        </Button>
        <Button
          size="menu"
          onClick={() => {
            props.clickAutosolve();
            props.click();
          }}
          on={props.isAutoplay}
        >
          Autosolve
        </Button>
        {props.children}
        <CloseButton onClick={props.click}>Close</CloseButton>
      </SideDrawerContainer>
    </>
  );
}
