import React, { useState } from "react";

import HelpButtonBackdrop from "./HelpBackdrop";
import HelpButtonPopup from "./HelpPopup";
import MoveExample from "./MoveExample";

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

const gridExample = [0, 1, 1, 0, 2, 0, 0, 1, 0];
const slideRightEx = [1, 0, 1, 0, 0, 2, 0, 0, 1];
const slideLeftEx = [1, 1, 0, 2, 0, 0, 1, 0, 0];
const slideUpEx = [0, 2, 0, 0, 1, 0, 0, 1, 1];
const slideDownEx = [0, 1, 0, 0, 1, 1, 0, 2, 0];
const rotateCounterEx = [1, 1, 0, 0, 2, 0, 0, 0, 1];
const rotateClockEx = [0, 0, 1, 0, 2, 1, 1, 0, 0];

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
        <h4>Controls</h4>
        <MoveExample
          matrixBefore={gridExample}
          matrixAfter={slideLeftEx}
          moveName={"Slide Left"}
          controls={["A", "Left Arrow"]}
        />
        <MoveExample
          matrixBefore={gridExample}
          matrixAfter={slideRightEx}
          moveName={"Slide Right"}
          controls={["D", "Right Arrow"]}
        />
        <MoveExample
          matrixBefore={gridExample}
          matrixAfter={slideUpEx}
          moveName={"Slide Up"}
          controls={["W", "Up Arrow"]}
        />
        <MoveExample
          matrixBefore={gridExample}
          matrixAfter={slideDownEx}
          moveName={"Slide Down"}
          controls={["S", "Down Arrow"]}
        />
        <MoveExample
          matrixBefore={gridExample}
          matrixAfter={rotateCounterEx}
          moveName={"Rotate Counterclockwise"}
          controls={["Q", "Page Up"]}
        />
        <MoveExample
          matrixBefore={gridExample}
          matrixAfter={rotateClockEx}
          moveName={"Rotate Clockwise"}
          controls={["E", "Page Down"]}
        />
        {/* Slide Left: <Key>A</Key>, <Key>Left Arrow</Key>
            <br />
            <div
              style={{ display: "flex", alignItems: "center", padding: "8px" }}
            >
              <Grid matrix={gridExample} mini />
              <div style={{ margin: "0 8px" }}>&rarr;</div>
              <Grid matrix={gridExample} mini />
            </div>
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
        </List> */}
      </HelpButtonPopup>
      <HelpButtonBackdrop show={showPopup} click={() => setShowPopup(false)} />
    </>
  );
}
