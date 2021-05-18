import styled from "styled-components";

import Grid from "../Grid/Grid";

const GameInfoContainer = styled.div`
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background-color: inherit;
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0rem;
  align-items: top;
  height: 18vh;
  width: 100%;
`;

const Score = styled.div`
  text-align: left;
  margin: 0 auto;
  font-size: 0.8rem;
  /* border: 2px solid rgba(0, 0, 0, 0.25); */
  padding: 6px;
  border-radius: 4px;
  width: 60vw;
  height: 60%;
  /* background-color: rgba(0, 0, 0, 0.05); */
`;

const Panel = styled.div`
  width: 25vw;
  justify-content: left;
  align-items: top;
  display: flex;
  flex-direction: column;
`;

const TargetTitle = styled.div`
  font: 1rem;
  font-weight: bold;
`;

export default function GameInfo(props) {
  return (
    <GameInfoContainer>
      <Score>
        <div>
          <strong>Solved</strong>: {props.numberSolved}
        </div>
        <div>
          <strong>Skipped</strong>: {props.numberSkipped}
        </div>
        <div>
          <strong>Moves Current Puzzle</strong>: {props.moveCount}
        </div>
      </Score>

      <Panel>
        <TargetTitle>Target</TargetTitle>
        <Grid matrix={props.targetGrid} mini />
      </Panel>
    </GameInfoContainer>
  );
}
