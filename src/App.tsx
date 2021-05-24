import { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { Difficulty, Movement } from "./ts/types";
import useInterval from "./lib/useInterval";
import * as actions from "./store/actions/session";

import { createGame } from "./lib/createGame";

import DrawerToggle from "./components/MenuDrawer/DrawerToggle/DrawerToggle";
import GameInfo from "./components/Game/GameInfo";
import GameScreen from "./components/Game/GameScreen";
import HelpButton from "./components/HelpMenu/HelpButton";
import Header from "./components/Game/Header";
import Footer from "./components/Game/Footer";
import NextGridDialog from "./components/Game/NextGridDialog";
import SelectDifficultyModal from "./components/Game/SelectDifficultyModal";
import MenuDrawer from "./components/MenuDrawer/MenuDrawer";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

const AppContainer = styled.div`
  min-width: 300px;
  text-align: center;
  overflow: hidden;
  background-color: rgba(247, 255, 249);
  font-family: sans-serif;
  font-size: 14px;
`;

interface AppProps {
  incrementSkipped(): void;
  incrementSolved(): void;
  initializeSession(): void;
  setDifficulty(difficulty: Difficulty): void;
  difficulty: Difficulty;
  numberSolved: number;
  numberSkipped: number;
}

function App(props: AppProps) {
  // State
  const [game, setGame] = useState(createGame());
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const [gameSettings, setGameSettings] = useState({
    isAutoplay: false,
    isStart: false,
    showMenu: false,
    difficulty: "normal",
    resetDelay: 500,
    isFirstLoad: true,
  });
  const [movement, setMovement] = useState({
    lastMove: Movement.Undefined,
    value: 0,
  });

  // Effects
  useInterval(() => {
    if (gameSettings.isAutoplay) {
      if (!game.getSolvedStatus()) {
        autoMove();
      } else {
        setGameSettings({
          ...gameSettings,
          isAutoplay: false,
        });
      }
    }
  });

  const moveGrid = useCallback(
    (moveType: Movement) => {
      game.slide(moveType);
      setMovement({
        lastMove: moveType,
        value: movement.value + 1,
      });
      setTimeout(
        () =>
          setMovement({ lastMove: Movement.Undefined, value: movement.value }),
        500
      );

      if (game.getSolvedStatus()) {
        if (gameSettings.isAutoplay) {
          props.incrementSkipped();
        } else {
          props.incrementSolved();
        }
      }
    },
    [game, gameSettings.isAutoplay, movement.value, props]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // if (gameRef.current.getSolvedStatus) {
      //   return;
      // }
      if (e.key === "w" || e.key === "W" || e.key === "ArrowUp") {
        moveGrid(Movement.MoveUp);
      }
      if (e.key === "s" || e.key === "S" || e.key === "ArrowDown") {
        moveGrid(Movement.MoveDown);
      }
      if (e.key === "a" || e.key === "A" || e.key === "ArrowLeft") {
        moveGrid(Movement.MoveLeft);
      }
      if (e.key === "d" || e.key === "D" || e.key === "ArrowRight") {
        moveGrid(Movement.MoveRight);
      }
      if (e.key === "q" || e.key === "Q" || e.key === "PageUp") {
        moveGrid(Movement.RotateLeft);
      }
      if (e.key === "e" || e.key === "E" || e.key === "PageDown") {
        moveGrid(Movement.RotateRight);
      }
    },
    [moveGrid]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  function newGame(difficulty: Difficulty) {
    setGame(createGame(difficulty));
  }

  function autoMove() {
    let option = Math.floor(Math.random() * 5);

    switch (option) {
      case 0:
        moveGrid(Movement.RotateLeft);
        break;
      case 1:
        moveGrid(Movement.RotateRight);
        break;
      case 2:
        moveGrid(Movement.MoveUp);
        break;
      case 3:
        moveGrid(Movement.MoveDown);
        break;
      case 4:
        moveGrid(Movement.MoveLeft);
        break;
      case 5:
        moveGrid(Movement.MoveRight);
        break;
      default:
        break;
    }
  }

  function startGameHandler(difficulty: Difficulty) {
    props.initializeSession();
    props.setDifficulty(difficulty);
    setGameSettings({
      ...gameSettings,
    });
    newGame(difficulty);
    toggleStart();
    setShowSideDrawer(false);
  }

  function toggleAutoplay() {
    const updatedIsAutoplay = !gameSettings.isAutoplay;

    setGameSettings({
      ...gameSettings,
      isAutoplay: updatedIsAutoplay,
    });
  }

  function toggleStart() {
    let isStart = !gameSettings.isStart;
    setGameSettings({
      ...gameSettings,
      isStart: isStart,
    });
  }

  return (
    <AppContainer>
      <SelectDifficultyModal
        show={gameSettings.isStart}
        modalClosed={toggleStart}
        startGameHandler={startGameHandler}
        toggleStart={toggleStart}
      />
      <MenuDrawer
        open={showSideDrawer}
        click={() => setShowSideDrawer(!showSideDrawer)}
        clickNewGame={toggleStart}
        clickSkip={() => {
          props.incrementSkipped();
          newGame(props.difficulty);
        }}
        clickAutosolve={toggleAutoplay}
        isAutoplay={gameSettings.isAutoplay}
      />
      <DrawerToggle
        showSideDrawer={showSideDrawer}
        click={() => setShowSideDrawer(!showSideDrawer)}
      />
      <Header />
      <GameScreen
        isSolved={game.getSolvedStatus()}
        matrix={game.getMatrix()}
        movement={movement.lastMove}
        slide={moveGrid}
      />
      <NextGridDialog
        isSolved={game.getSolvedStatus()}
        difficulty={props.difficulty}
        newGame={newGame}
      />
      <GameInfo
        numberSolved={props.numberSolved}
        numberSkipped={props.numberSkipped}
        moveCount={game.getMoves().length}
        targetGrid={game.getTarget()}
      />
      <HelpButton />
      <Footer />
    </AppContainer>
  );
}

interface RootState {
  session: Session;
}

interface Session {
  numberSolved: number;
  numberSkipped: number;
  difficulty: Difficulty;
}

const mapStateToProps = (state: RootState) => {
  return {
    numberSolved: state.session.numberSolved,
    numberSkipped: state.session.numberSkipped,
    difficulty: state.session.difficulty,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    setDifficulty: (difficulty: Difficulty) =>
      dispatch(actions.setDifficulty(difficulty)),
    incrementSkipped: () => dispatch(actions.incrementSkipped()),
    incrementSolved: () => dispatch(actions.incrementSolved()),
    initializeSession: () => dispatch(actions.initializeSession()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
