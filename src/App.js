import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { arrayEquals, rearrangeMatrix, shuffle } from "./util/array";
import { encodeGame } from "./util/gridEncoding";
import useInterval from "./util/useInterval";
import * as actions from "./store/actions/session";

import DrawerToggle from "./components/SideDrawer/DrawerToggle/DrawerToggle";
// import GameDescription from "./components/Game/GameDescription";
import GameInfo from "./components/Game/GameInfo";
import GameScreen from "./components/Game/GameScreen";
import Header from "./components/Game/Header";
import NextGridDialog from "./components/Game/NextGridDialog";
import SelectDifficultyModal from "./components/Game/SelectDifficultyModal";
import SideDrawer from "./components/SideDrawer/SideDrawer";

const AppContainer = styled.div`
  min-width: 300px;
  text-align: center;
  overflow: hidden;
  background-color: rgba(247, 255, 249);
  font-family: sans-serif;
  font-size: 14px;
`;

function App(props) {
  // State
  const [game, setGame] = useState({
    matrix: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    target: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    gameId: "",
    isSolved: null,
    moveCount: 0,
  });
  const gameRef = useRef(game);
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const [gameSettings, setGameSettings] = useState({
    isAutoplay: false,
    isStart: true,
    showMenu: false,
    difficulty: "normal",
    resetDelay: 500,
    isFirstLoad: true,
  });
  const [movement, setMovement] = useState("");

  // Effects
  useInterval(() => {
    if (gameSettings.isAutoplay) {
      if (!game.isSolved) {
        randomize();
      } else {
        setGameSettings({
          ...gameSettings,
          isAutoplay: false,
        });
      }
    }
  });

  // Keyhandlers
  const handleKeyDown = (e) => {
    if (gameRef.current.isSolved) {
      return;
    }
    if (e.key === "w" || e.key === "W" || e.keyCode === 38) {
      slide("moveUp", true);
    }
    if (e.key === "s" || e.key === "S" || e.keyCode === 40)
      slide("moveDown", true);
    if (e.key === "a" || e.key === "A" || e.keyCode === 37)
      slide("moveLeft", true);
    if (e.key === "d" || e.key === "D" || e.keyCode === 39)
      slide("moveRight", true);
    if (e.key === "q" || e.key === "Q" || e.keyCode === 33)
      slide("rotateLeft", true);
    if (e.key === "e" || e.key === "E" || e.keyCode === 34)
      slide("rotateRight", true);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  // Function Declarations
  function newGame(difficulty) {
    let numberColors = 1;
    let numberSquaresMax = 4;

    if (difficulty === "hard") {
      numberColors = 2;
      numberSquaresMax = 5;
    }

    let numSquaresMax = Math.floor(Math.random() * (numberSquaresMax - 1)) + 2;
    let randomColor;
    let numSquares = 0;

    const newMatrix = [];
    for (let i = 0; i < 9; i++) {
      if (numSquares < numSquaresMax) {
        randomColor = Math.floor(Math.random() * numberColors);

        if (i < 2 && numberColors > 1) {
          if (i === 0) {
            randomColor = 0;
          }
          if (i === 1) {
            randomColor = 1;
          }
        }
        switch (randomColor) {
          case 0:
            newMatrix.push(1);
            break;
          case 1:
            newMatrix.push(2);
            break;
          case 2:
            newMatrix.push(3);
            break;
          default:
            newMatrix.push(0);
            break;
        }
        numSquares += 1;
      } else {
        newMatrix.push(0);
      }
    }

    const updatedMatrix = shuffle(newMatrix);
    let updatedTarget = shuffle(newMatrix);

    if (arrayEquals(updatedMatrix, updatedTarget)) {
      while (arrayEquals(updatedMatrix, updatedTarget)) {
        updatedTarget = shuffle(newMatrix);
      }
    }

    const newGame = {
      matrix: updatedMatrix,
      target: updatedTarget,
      gameId: encodeGame(updatedMatrix, updatedTarget),
      isSolved: false,
      moveCount: 0,
    };

    setGame(newGame);
    gameRef.current = newGame;
  }

  function slide(moveType, referenceMatrix = false) {
    let matrix = referenceMatrix ? gameRef.current.matrix : game.matrix;
    matrix = rearrangeMatrix(matrix, moveType);
    updateMatrix(matrix, true);

    setMovement(moveType);
    setTimeout(() => setMovement(""), 500);
  }

  function updateMatrix(updatedMatrix, useGameRef = false) {
    let newMoveCount = game.moveCount + 1;
    let isSolved = false;
    let prevGame = game;
    let target = game.target;

    if (useGameRef) {
      newMoveCount = gameRef.current.moveCount + 1;
      prevGame = gameRef.current;
      target = gameRef.current.target;
    }

    if (arrayEquals(updatedMatrix, target)) {
      isSolved = true;
      if (gameSettings.isAutoplay) {
        props.incrementSkipped();
      } else {
        props.incrementSolved();
      }
    }

    const updatedGame = {
      ...prevGame,
      matrix: updatedMatrix,
      isSolved,
      moveCount: newMoveCount,
    };

    setGame(updatedGame);
    gameRef.current = updatedGame;
  }

  function randomize() {
    let option = Math.floor(Math.random() * 5);

    switch (option) {
      case 0:
        slide("rotateLeft");
        break;
      case 1:
        slide("rotateRight");
        break;
      case 2:
        slide("moveUp");
        break;
      case 3:
        slide("moveDown");
        break;
      case 4:
        slide("moveLeft");
        break;
      case 5:
        slide("moveRight");
        break;
      default:
        break;
    }
  }

  function toggleAutoplay() {
    const isAutoplay = !gameSettings.isAutoplay;
    setGameSettings({
      ...gameSettings,
      isAutoplay: isAutoplay,
    });
  }

  function startGameHandler(difficulty) {
    props.initializeSession();
    props.setDifficulty(difficulty);
    setGameSettings({
      ...gameSettings,
    });
    newGame(difficulty);
    toggleStart();
    setShowSideDrawer(false);
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
      <SideDrawer
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
      {/* <GameDescription /> */}
      <GameScreen
        isSolved={game.isSolved}
        matrix={game.matrix}
        movement={movement}
        slide={slide}
      />
      <NextGridDialog
        isSolved={game.isSolved}
        difficulty={props.difficulty}
        newGame={newGame}
      />
      <GameInfo
        numberSolved={props.numberSolved}
        numberSkipped={props.numberSkipped}
        moveCount={game.moveCount}
        targetGrid={gameRef.current.target}
      />
    </AppContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    numberSolved: state.session.numberSolved,
    numberSkipped: state.session.numberSkipped,
    difficulty: state.session.difficulty,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDifficulty: (difficulty) => dispatch(actions.setDifficulty(difficulty)),
    incrementSkipped: () => dispatch(actions.incrementSkipped()),
    incrementSolved: () => dispatch(actions.incrementSolved()),
    initializeSession: () => dispatch(actions.initializeSession()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
