import styled from "styled-components";

import Grid from "../Grid/Grid";

interface MoveExampleProps {
  moveName: string;
  matrixBefore: number[];
  matrixAfter: number[];
  controls: string[];
}

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

export default function MoveExample(props: MoveExampleProps) {
  const numControls = props.controls.length;
  return (
    <>
      <div style={{ textAlign: "left" }}>
        <b>
          <u>{props.moveName}</u>
        </b>
        :
        <br />
        {props.controls.map((control, index) => (
          <>
            <Key>{control}</Key>
            {index !== numControls - 1 ? <span>, </span> : null}
          </>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "8px",
          justifyContent: "center",
        }}
      >
        <Grid matrix={props.matrixBefore} mini />
        <div style={{ margin: "0 8px" }}>&rarr;</div>
        <Grid matrix={props.matrixAfter} mini />
      </div>
    </>
  );
}
