import { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import classes from './App.module.css';
import { arrayEquals, shuffle } from './util/array';
import { encodeGame } from './util/gridEncoding';
import useInterval from './util/useInterval';
import * as actions from './store/actions/session';

import Button from './components/Button/Button';
import ControlButton from './components/Button/ControlButton';
import Grid from './components/Grid/Grid';
import Modal from './components/UI/Modal/Modal';

function App(props) {

  // State
  const [game, setGame] = useState({
    matrix: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    target: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    gameId: "",
    isSolved: null,
    moveCount: 0
  })

  const gameRef = useRef(game);

  const [gameSettings, setGameSettings] = useState({
    isAutoplay: false,
    isStart: true,
    showMenu: false,
    difficulty: 'normal',
    resetDelay: 500,
    isFirstLoad: true
  })

  const [movement, setMovement] = useState('')

  // Hooks
  useInterval(() => {
    if (gameSettings.isAutoplay) {
      if (!game.isSolved) {
        randomize();
      } else {
        setGameSettings({
          ...gameSettings,
          isAutoplay: false
        })
      }
    }
  })

  // TODO: Keyhandlers

  const handleKeyDown = (e) => {
    if (e.key === 'w' || e.key === 'W' || e.keyCode === 38) {
      slide('moveUp', true)
    } 
    if (e.key === 's' || e.key === 'S' || e.keyCode === 40) slide('moveDown', true)
    if (e.key === 'a' || e.key === 'A' || e.keyCode === 37) slide('moveLeft', true)
    if (e.key === 'd' || e.key === 'D' || e.keyCode === 39) slide('moveRight', true)
    if (e.key === 'q' || e.key === 'Q' || e.keyCode === 33) slide('rotateLeft', true)
    if (e.key === 'e' || e.key === 'E' || e.keyCode === 34) slide('rotateRight', true)
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    };
  })

  // Function Declarations
  function newGame(difficulty) {
    let numberColors = 1;
    let numberSquaresMax = 4;

    if (difficulty === 'hard') {
      numberColors = 2;
      numberSquaresMax = 5;
    }

    let numSquaresMax = Math.floor(Math.random() * (numberSquaresMax - 1)) + 2;
    let randomColor;
    let numSquares = 0;

    const newMatrix = [];
    for (let i = 0; i < 9; i++) {
      if (numSquares < numSquaresMax) {
        randomColor = Math.floor(Math.random() * (numberColors));

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
            newMatrix.push(1)
            break;
          case 1:
            newMatrix.push(2)
            break;
          case 2:
            newMatrix.push(3)
            break;
          default:
            newMatrix.push(0)
            break;
        }
        numSquares += 1;
      } else {
        newMatrix.push(0)
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
      moveCount: 0
    }

    setGame(newGame)
    gameRef.current = newGame;
    console.log(gameRef.current)
  }

  function slide(moveType, referenceMatrix = false) {
    let matrix = game.matrix;
    let target = game.target;

    if (referenceMatrix) {
      matrix = gameRef.current.matrix;
      target = gameRef.current.target;
    }

    console.log(matrix)

    switch (moveType) {
      case 'rotateLeft':
        matrix = [matrix[1], matrix[2], matrix[5], matrix[0], matrix[4], matrix[8], matrix[3], matrix[6], matrix[7]]
        break;
      case 'rotateRight':
        matrix = [matrix[3], matrix[0], matrix[1], matrix[6], matrix[4], matrix[2], matrix[7], matrix[8], matrix[5]]
        break;
      case 'moveUp':
        matrix = [matrix[3], matrix[4], matrix[5], matrix[6], matrix[7], matrix[8], matrix[0], matrix[1], matrix[2]]
        break;
      case 'moveDown':
        matrix = [matrix[6], matrix[7], matrix[8], matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]]
        break;
      case 'moveLeft':
        matrix = [matrix[1], matrix[2], matrix[0], matrix[4], matrix[5], matrix[3], matrix[7], matrix[8], matrix[6]]
        break;
      case 'moveRight':
        matrix = [matrix[2], matrix[0], matrix[1], matrix[5], matrix[3], matrix[4], matrix[8], matrix[6], matrix[7]]
        break;
      default:
        break;
    }

    console.log(matrix, target)
    updateMatrix(matrix, true)

    setMovement(moveType)
    setTimeout(() => setMovement(''), 500);
  }

  function updateMatrix(updatedMatrix, useGameRef = false) {
    let newMoveCount = game.moveCount + 1;
    let isSolved = false;
    let prevGame = game;
    let target = game.target

    if (useGameRef) {
      newMoveCount = gameRef.current.moveCount + 1;
      prevGame = gameRef.current;
      target = gameRef.current.target;
    }

    if (arrayEquals(updatedMatrix, target)) {
      isSolved = true;
      if (gameSettings.isAutoplay) {
        props.incrementSkipped()
      } else {
        props.incrementSolved();
      }
    }

    const updatedGame = {
      ...prevGame,
      matrix: updatedMatrix,
      isSolved,
      moveCount: newMoveCount
    }

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
      isAutoplay: isAutoplay
    })
  }

  function startGameHandler(difficulty) {
    props.initializeSession();
    props.setDifficulty(difficulty);
    setGameSettings({
      ...gameSettings
    })
    newGame(difficulty);
    toggleStart();
  }

  function toggleStart() {
    let isStart = !gameSettings.isStart;
    setGameSettings({
      ...gameSettings,
      isStart: isStart
    })
  }

  // Conditional JSX Elements
  let next = null;
  if (game.isSolved) {
    next = <Button size="xxlarge" next onClick={() => newGame(props.difficulty)}>Next &rarr;</Button>
  }

  // JSX
  return (
    <div className={classes.App}>
      <Modal show={gameSettings.isStart} modalClosed={toggleStart}>
        <h2>Select Difficulty:</h2>
        <Button size="menu" onClick={() => startGameHandler('normal')}>Normal</Button><br />
        <Button size="menu" onClick={() => startGameHandler('hard')}>Hard</Button><br /><br />
        <button onClick={toggleStart}>Cancel</button>
      </Modal>

      <div className={classes.Top}>
        <div className={classes.Title}>Rubik's Slide</div>


        {/* <p className={classes.GameId}>
          Difficulty: {props.difficulty.charAt(0).toUpperCase() + props.difficulty.slice(1)} <br />
          (Game ID: {game.gameId})
        </p> */}
      </div>

      <div className={classes.GridContainer}>
        <div className={classes.Row}>
          <ControlButton type="rotateLeft" onClick={() => slide('rotateLeft')} disabled={game.isSolved} />
          <ControlButton type="moveUp" onClick={() => slide('moveUp')} disabled={game.isSolved} />
          <ControlButton type="rotateRight" onClick={() => slide('rotateRight')} disabled={game.isSolved} />
        </div>
        <div className={classes.CenterRow}>
          <ControlButton type="moveLeft" onClick={() => slide('moveLeft')} disabled={game.isSolved} />
          <Grid matrix={game.matrix} movement={movement} isSolved={game.isSolved} />
          <ControlButton type="moveRight" onClick={() => slide('moveRight')} disabled={game.isSolved} />
        </div>
        <div className={classes.Row}>
          <ControlButton type="moveDown" onClick={() => slide('moveDown')} disabled={game.isSolved} />

        </div>
      </div>

      <div className={classes.NextButton}>
        {next}
      </div>


      <div className={classes.ControlBar}>
        <div className={classes.Panel}>
          <Button size="menu" normal onClick={toggleStart}>Restart</Button>
          <Button size="menu" normal onClick={() => {
            props.incrementSkipped();
            newGame(props.difficulty);
          }}>Skip</Button>
          <Button size="menu" normal onClick={toggleAutoplay} on={gameSettings.isAutoplay}>Solve</Button>
        </div>

        <div className={classes.Score}>
          <div>Solved: {props.numberSolved}</div>
          <div>Skipped: {props.numberSkipped}</div>
          <div>Moves Current Puzzle: {game.moveCount}</div>
        </div>

        {/* <div className={classes.Controls}>
          <div className={classes.ControlRow}>
            <Button size="control" onClick={() => slide('moveUp')} disabled={game.isSolved}>&#129045;</Button>
          </div>
          <div className={classes.ControlRow}>
            <Button size="control" onClick={() => slide('moveLeft')} disabled={game.isSolved}>&#129044;</Button>
            <Button size="control" disabled> </Button>
            <Button size="control" onClick={() => slide('moveRight')} disabled={game.isSolved}>&#129046;</Button>
          </div>
          <div>
            <Button size="control" onClick={() => slide('moveDown')} disabled={game.isSolved}>&#129047;</Button>
          </div>
          <div className={classes.ControlRow}>

          </div>
          <div className={classes.ControlRow}>
            <Button size="control" onClick={() => slide('rotateLeft')} disabled={game.isSolved}>&#10226;</Button>
            <span className={classes.Spacer}></span>
            <Button size="control" onClick={() => slide('rotateRight')} disabled={game.isSolved}>&#10227;</Button>
          </div>
        </div> */}


        <div className={classes.Panel}>
          <div className={classes.TargetTitle}>Target</div>
          <Grid matrix={gameRef.current.target} mini />
        </div>

      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberSolved: state.session.numberSolved,
    numberSkipped: state.session.numberSkipped,
    difficulty: state.session.difficulty
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setDifficulty: (difficulty) => dispatch(actions.setDifficulty(difficulty)),
    incrementSkipped: () => dispatch(actions.incrementSkipped()),
    incrementSolved: () => dispatch(actions.incrementSolved()),
    initializeSession: () => dispatch(actions.initializeSession())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
