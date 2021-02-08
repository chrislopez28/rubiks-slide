import { useState } from 'react';
import { connect } from 'react-redux';

import classes from './App.module.css';
import { arrayEquals, shuffle } from './util/array';
import { encodeGame } from './util/gridEncoding';
import useInterval from './util/useInterval';
import * as actions from './store/actions/session';

import Button from './components/Button/Button';
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

    setGame({
      matrix: updatedMatrix,
      target: updatedTarget,
      gameId: encodeGame(updatedMatrix, updatedTarget),
      isSolved: false,
      moveCount: 0
    })
  }

  function slide(moveType) {
    let updatedMatrix = game.matrix;
    let newMoveCount = game.moveCount + 1;
    let isSolved = false;

    switch (moveType) {
      case 'rotateLeft':
        updatedMatrix = [game.matrix[1], game.matrix[2], game.matrix[5], game.matrix[0], game.matrix[4], game.matrix[8], game.matrix[3], game.matrix[6], game.matrix[7]]
        break;
      case 'rotateRight':
        updatedMatrix = [game.matrix[3], game.matrix[0], game.matrix[1], game.matrix[6], game.matrix[4], game.matrix[2], game.matrix[7], game.matrix[8], game.matrix[5]]
        break;
      case 'moveUp':
        updatedMatrix = [game.matrix[3], game.matrix[4], game.matrix[5], game.matrix[6], game.matrix[7], game.matrix[8], game.matrix[0], game.matrix[1], game.matrix[2]]
        break;
      case 'moveDown':
        updatedMatrix = [game.matrix[6], game.matrix[7], game.matrix[8], game.matrix[0], game.matrix[1], game.matrix[2], game.matrix[3], game.matrix[4], game.matrix[5]]
        break;
      case 'moveLeft':
        updatedMatrix = [game.matrix[1], game.matrix[2], game.matrix[0], game.matrix[4], game.matrix[5], game.matrix[3], game.matrix[7], game.matrix[8], game.matrix[6]]
        break;
      case 'moveRight':
        updatedMatrix = [game.matrix[2], game.matrix[0], game.matrix[1], game.matrix[5], game.matrix[3], game.matrix[4], game.matrix[8], game.matrix[6], game.matrix[7]]
        break;
      default:
        break;
    }

    if (arrayEquals(updatedMatrix, game.target)) {
      isSolved = true;
      if (gameSettings.isAutoplay) {
        props.incrementSkipped()
      } else {
        props.incrementSolved();
      }
    }

    setGame({
      ...game,
      matrix: updatedMatrix,
      isSolved,
      moveCount: newMoveCount
    })
    setMovement(moveType)
    setTimeout(() => setMovement(''), 500);
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
        <Button onClick={() => startGameHandler('normal')}>Normal</Button><br />
        <Button onClick={() => startGameHandler('hard')}>Hard</Button><br /><br />
        <button onClick={toggleStart}>Cancel</button>
      </Modal>
      <div className={classes.Top}>
        <h1>Rubik's Slide Simulator</h1>
        <div className={classes.Score}>
          <div>Solved: {props.numberSolved}</div>
          <div>Skipped: {props.numberSkipped}</div>
          <div>Moves Current Puzzle: {game.moveCount}</div>
        </div>
        <p className={classes.GameId}>
          Difficulty: {props.difficulty.charAt(0).toUpperCase() + props.difficulty.slice(1)} <br />
          (Game ID: {game.gameId})
        </p>
      </div>

      <div className={classes.Message}>
        {}
      </div>

      <div className={classes.GridContainer}>
        <Grid matrix={game.matrix} movement={movement} isSolved={game.isSolved} />
      </div>
      
      <div className={classes.NextButton}>
        {next}
      </div>
      
      <div className={classes.ControlBar}>
        <div className={classes.Panel}>
          <div>
          </div>
          <Button size="small" normal onClick={toggleStart}>New Session</Button>
          <Button size="small" normal onClick={() => {
            props.incrementSkipped();
            newGame(props.difficulty);
          }}>Skip</Button>
          <Button size="small" normal onClick={toggleAutoplay} on={gameSettings.isAutoplay}>Autosolve</Button>
        </div>
        <div className={classes.Controls}>
          <div>
            <Button size="xxlarge" onClick={() => slide('rotateLeft')} disabled={game.isSolved}>&#10226;</Button>
            <Button size="large" onClick={() => slide('moveUp')} disabled={game.isSolved}>&#129045;</Button>
            <Button onClick={() => slide('rotateRight')} disabled={game.isSolved}>&#10227;</Button>
          </div>
          <div>
            <Button onClick={() => slide('moveLeft')} disabled={game.isSolved}>&#129044;</Button>
            <Button onClick={() => slide('moveRight')} disabled={game.isSolved}>&#129046;</Button>
          </div>
          <div>
            <Button onClick={() => slide('moveDown')} disabled={game.isSolved}>&#129047;</Button>
          </div>
        </div>
        <div className={classes.Panel}>
          <div className={classes.TargetTitle}>Target</div>
          <Grid matrix={game.target} mini />
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
