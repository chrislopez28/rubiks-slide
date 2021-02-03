import { useState } from 'react';
import { connect } from 'react-redux';

import classes from './App.module.css';
import { arrayEquals, shuffle } from './util/array';
import useInterval from './util/useInterval';
import * as actions from './store/actions/session';

import Button from './components/Button/Button';
import Grid from './components/Grid/Grid';
import Modal from './components/UI/Modal/Modal';

function App(props) {

  const [game, setGame] = useState({
    matrix: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    target: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    moveCount: 0
  })

  const [gameSettings, setGameSettings] = useState({
    isAutoplay: false,
    isStart: true,
    showMenu: false,
    difficulty: 'normal',
    resetDelay: 500
  })

  const [movement, setMovement] = useState('')

  const [gridClasses, setGridClasses] = useState([classes.Grid])

  function newGame() {
    let numberColors = 1;
    let numberSquaresMax = 4;

  if (props.difficulty === 'hard') {
      numberColors = 2;
      numberSquaresMax = 5;
    }

    let numColors = Math.floor(Math.random() * numberColors) + 1;
    let numSquaresMax = Math.floor(Math.random() * (numberSquaresMax - 1)) + 2;
    let randomColor;
    let numSquares = 0;
    const newMatrix = [];
    for (let i = 0; i < 9; i++) {
      if (numSquares < numSquaresMax) {
        randomColor = Math.floor(Math.random() * (numColors));
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
        newMatrix.push("")
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
      isSolved: false,
      moveCount: 0
    })
  }

  const resetGridClasses = () => {
    setGridClasses([classes.Grid]);
  }

  const resetMovement = () => {
    setMovement('');
  }

  const slide = (moveType) => {
    let updatedMatrix = game.matrix;
    let updatedGridClasses;
    switch (moveType) {
      case 'rotateLeft':
        updatedMatrix = [game.matrix[1], game.matrix[2], game.matrix[5], game.matrix[0], game.matrix[4], game.matrix[8], game.matrix[3], game.matrix[6], game.matrix[7]]
        updatedGridClasses = [classes.Grid, classes.RotateLeft];
        break;
      case 'rotateRight':
        updatedMatrix = [game.matrix[3], game.matrix[0], game.matrix[1], game.matrix[6], game.matrix[4], game.matrix[2], game.matrix[7], game.matrix[8], game.matrix[5]]
        updatedGridClasses = [classes.Grid, classes.RotateRight];
        break;
      case 'moveUp':
        updatedMatrix = [game.matrix[3], game.matrix[4], game.matrix[5], game.matrix[6], game.matrix[7], game.matrix[8], game.matrix[0], game.matrix[1], game.matrix[2]]
        updatedGridClasses = [classes.Grid, classes.MoveUp];
        break;
      case 'moveDown':
        updatedMatrix = [game.matrix[6], game.matrix[7], game.matrix[8], game.matrix[0], game.matrix[1], game.matrix[2], game.matrix[3], game.matrix[4], game.matrix[5]]
        updatedGridClasses = [classes.Grid, classes.MoveDown];
        break;
      case 'moveLeft':
        updatedMatrix = [game.matrix[1], game.matrix[2], game.matrix[0], game.matrix[4], game.matrix[5], game.matrix[3], game.matrix[7], game.matrix[8], game.matrix[6]]
        updatedGridClasses = [classes.Grid, classes.MoveLeft];
        break;
      case 'moveRight':
        updatedMatrix = [game.matrix[2], game.matrix[0], game.matrix[1], game.matrix[5], game.matrix[3], game.matrix[4], game.matrix[8], game.matrix[6], game.matrix[7]]
        updatedGridClasses = [classes.Grid, classes.MoveRight];
        break;
      default:
        break;
    }

    let isSolved = false;

    if (arrayEquals(updatedMatrix, game.target)) {
      console.log("Solved!");
      isSolved = true;
      props.incrementSolved();
    }

    let newMoveCount = game.moveCount + 1;

    setGame({
      ...game,
      matrix: updatedMatrix,
      isSolved,
      moveCount: newMoveCount
    })
    setMovement(moveType)
    setTimeout(resetMovement, 500);

    setGridClasses(updatedGridClasses);
    setTimeout(resetGridClasses, setGameSettings.resetDelay);
  }

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

  const randomize = () => {
    let option = Math.floor(Math.random() * 5);

    switch (option) {
      case 0:
        console.log("Rotate Left")
        slide("rotateLeft");
        break;
      case 1:
        console.log("Rotate Right")
        slide("rotateRight");
        break;
      case 2:
        console.log("Move Up")
        slide("moveUp");
        break;
      case 3:
        console.log("Move Down")
        slide("moveDown");
        break;
      case 4:
        console.log("Move Left")
        slide("moveLeft");
        break;
      case 5:
        console.log("Move Right")
        slide("moveRight");
        break;
      default:
        break;
    }
  }

  const randomShuffle = () => {
    const isAutoplay = !gameSettings.isAutoplay;
    setGameSettings({
      ...gameSettings,
      isAutoplay: isAutoplay
    })
  }

  const startGameHandler = (difficulty) => {
    console.log(difficulty)
    props.setDifficulty(difficulty)
    setGameSettings({
      ...gameSettings
    })
    newGame();
    toggleStart();
  }

  const toggleStart = () => {
    let isStart = !gameSettings.isStart;
    setGameSettings({
      ...gameSettings,
      isStart: isStart
    })
  }

  // Next Arrow
  let next = null;
  if (game.isSolved) {
    next = <Button onClick={() => newGame()}>Next &rarr;</Button>
  }

  return (
    <div className={classes.App}>
      <Modal show={gameSettings.isStart} modalClosed={gameSettings.toggleStart}>
        <h2>Select Difficulty:</h2>
        <Button onClick={() => startGameHandler('normal')}>Normal</Button><br />
        <Button onClick={() => startGameHandler('hard')}>Hard</Button><br />
        <Button onClick={toggleStart}>Cancel</Button>
      </Modal>
      <h1>Rubik's Slide Simulator</h1>
      <div className={classes.Message}>
        {  }
      </div>
      <div className={classes.GridContainer}>
        <Grid matrix={game.matrix} movement={movement} />
      </div>
      <div className={classes.NextButton}>
        { next }
      </div>
      <div className={classes.ControlBar}>
        <div className={classes.Panel}>
          <p>Game ID: </p>
          <p>Difficulty: {props.difficulty} </p>
          <p>Number Solved: {props.numberSolved}</p>
          <p>Moves: {game.moveCount}</p>
          <button onClick={toggleStart}>New Session</button>
          <button onClick={randomShuffle}>Toggle Autosolve</button>
        </div>
        <div className={classes.Controls}>
          <div>
            <Button onClick={() => slide('rotateLeft')} disabled={game.isSolved}>&#10226;</Button>
            <Button onClick={() => slide('moveUp')} disabled={game.isSolved}>&#129045;</Button>
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
    numberAttempted: state.session.numberAttempted,
    difficulty: state.session.difficulty
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setDifficulty: (difficulty) => dispatch(actions.setDifficulty(difficulty)),
    incrementSolved: () => dispatch(actions.incrementSolved())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
