import React from "react";
import styled from "styled-components";

import Backdrop from "../UI/Backdrop/Backdrop";

const MenuDrawerContainer = styled.div`
  position: fixed;
  width: 100%;
  margin-top: 47px;
  left: 0;
  top: 0;
  z-index: 100;
  background-color: rgba(160, 193, 227, 0.75);
  box-sizing: border-box;
  color: white;
  transform: ${(props) => (props.open ? "translateY(0)" : "translateY(-100%)")};
  transition: transform 0.3s ease-out;
`;

const MenuButton = styled.button`
  background-color: #a0c0e3;
  border: none;
  width: 100%;
  color: black;
  cursor: pointer;
  font: inherit;
  padding: 8px 8px;
  font-weight: bold;

  &:hover {
    background-color: #90b0d3;
  }
  &:active {
    background-color: #80a0c3;
  }
`;

export default function MenuDrawer(props) {
  return (
    <>
      <Backdrop show={props.open} click={props.click} />
      <MenuDrawerContainer open={props.open}>
        <MenuButton
          onClick={() => {
            props.clickNewGame();
            props.click();
          }}
        >
          New Game
        </MenuButton>
        <MenuButton
          onClick={() => {
            props.clickSkip();
            props.click();
          }}
        >
          Skip
        </MenuButton>
        <MenuButton
          onClick={() => {
            props.clickAutosolve();
            props.click();
          }}
        >
          Autosolve (Random)
        </MenuButton>
        {props.children}
      </MenuDrawerContainer>
    </>
  );
}
