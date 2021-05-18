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
  font-family: monospace;
  margin-bottom: 36px;
  background-color: rgba(160, 193, 227, 0.75);
`;

const Score = styled.div`
  margin: 0 auto;
  padding: 6px;
  width: 60vw;
  height: 100%;
  text-align: left;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Panel = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ScoreList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ScoreItem = styled.li``;

const TargetTitle = styled.div`
  font: 1rem;
  padding: 4px;
  font-weight: bold;
`;

export default function GameInfo(props) {
  return (
    <GameInfoContainer>
      <Score>
        <ScoreList>
          <ScoreItem>
            <strong>Solved</strong>: {props.numberSolved}
          </ScoreItem>
          <ScoreItem>
            <strong>Skipped</strong>: {props.numberSkipped}
          </ScoreItem>
          <ScoreItem>
            <strong>Number Moves</strong>: {props.moveCount}
          </ScoreItem>
        </ScoreList>
      </Score>

      <Panel>
        <div>
          <TargetTitle>Target</TargetTitle>
          <Grid matrix={props.targetGrid} mini />
        </div>
      </Panel>
    </GameInfoContainer>
  );
}
