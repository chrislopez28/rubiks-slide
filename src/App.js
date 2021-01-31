import { useState, useEffect, useRef } from 'react';

import classes from './App.module.css';

import Button from './components/Button/Button';
import Grid from './components/Grid/Grid';
import Modal from './components/UI/Modal/Modal';
import TargetGrid from './components/TargetGrid/TargetGrid';


function App() {

  const [numberColors] = useState(2);
  const [numberSquaresMax] = useState(5);

  const [game, setGame] = useState({
    matrix: ['blue', '', 'blue', '', '', '', '', '', ''],
    target: ['blue', 'blue', '', '', '', '', '', '', '']
  })

  const [matrix, setMatrix] = useState([
    '', '', 'blue',
    '', '', 'blue',
    'blue', '', 'blue'
  ])

  const shuffledMatrix = shuffle(matrix);
  const [target, setTarget] = useState(shuffledMatrix);

  const [moveCount, setMoveCount] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [numberSolved, setNumberSolved] = useState(0);
  const [isMenuOn, setIsMenuOn] = useState(false);
  const [isSolved, setIsSolved] = useState(false);
  const [gridClasses, setGridClasses] = useState([classes.Grid])
  const resetDelay = 500;

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  function shuffle() {
    const matrixCopy = [...matrix];
    let randomIndex;
    let temp;

    for (let i = matrixCopy.length - 1; i > 0; i--) {
      randomIndex = Math.floor(Math.random() * (i + 1));

      temp = matrixCopy[i];
      matrixCopy[i] = matrixCopy[randomIndex];
      matrixCopy[randomIndex] = temp;
    }

    return matrixCopy;
  }

  function arrayEquals(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }

  function newGame() {
    let numColors = Math.floor(Math.random() * numberColors) + 1;
    let numSquaresMax = numberSquaresMax;
    let randomColor;
    let numSquares = 0;
    const newMatrix = [];
    for (let i = 0; i < 9; i++) {
      if (numSquares < numSquaresMax) {
        randomColor = Math.floor(Math.random() * (numColors));
        // console.log(numColors, randomColor)
        switch (randomColor) {
          case 0:
            newMatrix.push("blue")
            break;
          case 1:
            newMatrix.push("red")
            break;
          case 2:
            newMatrix.push("green")
            break;
          default:
            break;
        }
        numSquares += 1;
      } else {
        newMatrix.push("")
      }
    }
    const updatedMatrix = shuffle(newMatrix);
    let updatedTarget;
    
    while (!arrayEquals(updatedMatrix, updatedTarget)) {
      updatedTarget = shuffle(updatedMatrix);
    }

    console.log(numberColors, numColors, numSquares, updatedMatrix)
    setMatrix(newMatrix);
    setTarget(updatedTarget);
    setNumberSolved(numberSolved + 1);
    setMoveCount(0);
    console.log(newMatrix, updatedTarget)
  }

  const resetGridClasses = () => {
    setGridClasses([classes.Grid]);
  }

  const slide = (moveType) => {
    let updatedMatrix = matrix;
    let updatedGridClasses;
    switch (moveType) {
      case 'rotateLeft':
        updatedMatrix = [matrix[1], matrix[2], matrix[5],  matrix[0], matrix[4], matrix[8],  matrix[3], matrix[6], matrix[7]]
        updatedGridClasses = [classes.Grid, classes.RotateLeft];
        break;
      case 'rotateRight':
        updatedMatrix = [matrix[3], matrix[0], matrix[1],  matrix[6], matrix[4], matrix[2],  matrix[7], matrix[8], matrix[5]]
        updatedGridClasses = [classes.Grid, classes.RotateRight];
        break;
      case 'moveUp':
        updatedMatrix = [matrix[3], matrix[4], matrix[5],  matrix[6], matrix[7], matrix[8],  matrix[0], matrix[1], matrix[2]]
        updatedGridClasses = [classes.Grid, classes.MoveUp];
        break;
      case 'moveDown':
        updatedMatrix = [matrix[6], matrix[7], matrix[8],  matrix[0], matrix[1], matrix[2],  matrix[3], matrix[4], matrix[5]]
        updatedGridClasses = [classes.Grid, classes.MoveDown];
        break;
      case 'moveLeft':
        updatedMatrix = [matrix[1], matrix[2], matrix[0],  matrix[4], matrix[5], matrix[3],  matrix[7], matrix[8], matrix[6]]
        updatedGridClasses = [classes.Grid, classes.MoveLeft];
        break;
      case 'moveRight':
        updatedMatrix = [matrix[2], matrix[0], matrix[1],  matrix[5], matrix[3], matrix[4],  matrix[8], matrix[6], matrix[7]]
        updatedGridClasses = [classes.Grid, classes.MoveRight];
        break;
      default:
        break;
    }
    setMatrix(updatedMatrix);
    setGridClasses(updatedGridClasses);
    setMoveCount(moveCount + 1);
    setTimeout(resetGridClasses, resetDelay);
    if (arrayEquals(updatedMatrix, target)) {
      console.log("Solved!");
      setIsSolved(true);
    } 
  }

  useInterval(() => {
    if (isAutoplay) {
      if (arrayEquals(matrix, target)) {
        console.log("Solved!");
        setIsAutoplay(false);
        setIsSolved(true);
      } else {
        randomize();
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

  const toggleMenu = () => {
    const updatedMenuToggle = !isMenuOn;
    setIsMenuOn(updatedMenuToggle);
  }

  const randomShuffle = () => {
    const updatedToggle = !isAutoplay;
    setIsAutoplay(updatedToggle);
  }



  return (
    <div className={classes.App}>
      <Modal>
        <p>
          Solved!
        </p>
      </Modal>
      <Modal show={isMenuOn} modalClosed={toggleMenu}>
        <h1>Menu</h1>
        <h3>Difficulty</h3>
        <input type="radio" value="easy" name="difficulty" />
        <label htmlFor="easy">Easy</label>

        <input type="radio" value="moderate" name="difficulty" />
        <label htmlFor="moderate">Moderate</label>

        <input type="radio" value="hard" name="difficulty" />
        <label htmlFor="hard">Hard</label>
      </Modal>
      <h1>Rubik's Slide Simulator</h1>
      <div className={classes.GridContainer}>
        <Grid matrix={matrix} gridClasses={gridClasses} />
      </div>
      <div className={classes.ControlBar}>
        <div className={classes.Panel}>
          <p>Game ID: </p>
          <p>Number Solved: {numberSolved}</p>
          <p>Moves: {moveCount}</p>
          <button onClick={newGame}>New Game</button>
          <button onClick={randomShuffle}>Toggle Autosolve</button>
        </div>
        <div className={classes.Controls}>
          <div>
            <Button onClick={() => slide('rotateLeft')} disabled={isSolved}>&#10226;</Button>
            <Button onClick={() => slide('moveUp')} disabled={isSolved}>&#129045;</Button>
            <Button onClick={() => slide('rotateRight')} disabled={isSolved}>&#10227;</Button>
          </div>
          <div>
            <Button onClick={() => slide('moveLeft')} disabled={isSolved}>&#129044;</Button>
            <Button onClick={() => slide('moveRight')} disabled={isSolved}>&#129046;</Button>
          </div>
          <div>
            <Button onClick={() => slide('moveDown')} disabled={isSolved}>&#129047;</Button>
          </div>
        </div>
        <div className={classes.Panel}>
          <div className={classes.TargetTitle}>Target</div>
          <TargetGrid matrix={target} />
        </div>
      </div>
    </div>
  );
}

export default App;
