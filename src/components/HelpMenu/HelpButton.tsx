import React, { useState } from "react";

import HelpButtonBackdrop from "./HelpBackdrop";
import HelpButtonPopup from "./HelpPopup";

import styled from "styled-components";

const HelpButtonContainer = styled.button`
  position: absolute;
  bottom: 16px;
  right: 16px;
  height: 40px;
  width: 40px;
  z-index: 102;
  background-color: #ddd;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 1.5rem;

  &:hover {
    cursor: pointer;
    background-color: #ccc;
  }
`;

const Key = styled.kbd`
  background-color: #eee;
  border-radius: 3px;
  border: 1px solid #b4b4b4;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
    0 2px 0 0 rgba(255, 255, 255, 0.7) inset;
  color: #333;
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 700;
  line-height: 1;
  padding: 2px 4px;
  white-space: nowrap;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`;

export default function HelpButton() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <HelpButtonContainer onClick={() => setShowPopup(!showPopup)}>
        ?
      </HelpButtonContainer>
      <HelpButtonPopup show={showPopup}>
        <h4>How to Play</h4>
        <p style={{ textAlign: "left" }}>
          Press the arrows to "slide" and "rotate" the grid of squares so that
          it matches the target shown on the bottom right.
        </p>
        <h4>Keyboard Controls</h4>
        <List>
          <li>
            Slide Left: <Key>A</Key>, <Key>Left Arrow</Key>
          </li>
          <li>
            Slide Right: <Key>D</Key>, <Key>Right Arrow</Key>
          </li>
          <li>
            Slide Up: <Key>W</Key>, <Key>Up Arrow</Key>
          </li>
          <li>
            Slide Down: <Key>S</Key>, <Key>Down Arrow</Key>
          </li>
          <li>
            Rotate Counterclockwise: <Key>Q</Key>, <Key>Page Up</Key>
          </li>
          <li>
            Rotate Clockwise: <Key>E</Key>, <Key>Page Down</Key>
          </li>
        </List>
      </HelpButtonPopup>
      <HelpButtonBackdrop show={showPopup} click={() => setShowPopup(false)} />
    </>
  );
}
