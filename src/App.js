import { useState } from 'react';

import classes from './App.module.css';

import Button from './components/Button/Button';
import Grid from './components/Grid/Grid';
import TargetGrid from './components/TargetGrid/TargetGrid';


function App() {

  const [matrix, setMatrix] = useState([
    'red', '', 'blue',
    '', '', '',
    'red', '', 'red'
  ])

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

  const [target, setTarget] = useState(shuffle(matrix));

  function arrayEquals(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }

  const [gridClasses, setGridClasses] = useState([classes.Grid])

  const resetGridClasses = () => {
    setGridClasses([classes.Grid]);
  }

  const rotateLeft = () => {
    const updatedMatrix = [
      matrix[1], matrix[2], matrix[5],
      matrix[0], matrix[4], matrix[8],
      matrix[3], matrix[6], matrix[7]
    ]

    const updatedGridClasses = [classes.Grid, classes.RotateLeft];

    setMatrix(updatedMatrix);
    setGridClasses(updatedGridClasses);
    setTimeout(resetGridClasses, 500);
  }

  const rotateRight = () => {
    const updatedMatrix = [
      matrix[3], matrix[0], matrix[1],
      matrix[6], matrix[4], matrix[2],
      matrix[7], matrix[8], matrix[5]
    ]

    const updatedGridClasses = [classes.Grid, classes.RotateRight];

    setMatrix(updatedMatrix);
    setGridClasses(updatedGridClasses);
    setTimeout(resetGridClasses, 500);
  }

  const moveUp = () => {
    const updatedMatrix = [
      matrix[3], matrix[4], matrix[5],
      matrix[6], matrix[7], matrix[8],
      matrix[0], matrix[1], matrix[2]
    ]

    const updatedGridClasses = [classes.Grid, classes.MoveUp];

    setMatrix(updatedMatrix);
    setGridClasses(updatedGridClasses);
    setTimeout(resetGridClasses, 500);
  }

  const moveDown = () => {
    const updatedMatrix = [
      matrix[6], matrix[7], matrix[8],
      matrix[0], matrix[1], matrix[2],
      matrix[3], matrix[4], matrix[5]
    ]

    const updatedGridClasses = [classes.Grid, classes.MoveDown];

    setMatrix(updatedMatrix);
    setGridClasses(updatedGridClasses);
    setTimeout(resetGridClasses, 500);
  }

  const moveLeft = () => {
    const updatedMatrix = [
      matrix[1], matrix[2], matrix[0],
      matrix[4], matrix[5], matrix[3],
      matrix[7], matrix[8], matrix[6]
    ]

    const updatedGridClasses = [classes.Grid, classes.MoveLeft];

    setMatrix(updatedMatrix);
    setGridClasses(updatedGridClasses);
    setTimeout(resetGridClasses, 500);
  }
  const moveRight = () => {
    const updatedMatrix = [
      matrix[2], matrix[0], matrix[1],
      matrix[5], matrix[3], matrix[4],
      matrix[8], matrix[6], matrix[7]
    ]

    const updatedGridClasses = [classes.Grid, classes.MoveRight];

    setMatrix(updatedMatrix);
    setGridClasses(updatedGridClasses);
    setTimeout(resetGridClasses, 500);
  }

  return (
    <div className={classes.App}>
      <h1>Rubik's Slide</h1>
      <Grid matrix={matrix} gridClasses={gridClasses} />
      <div className={classes.ControlBar}>
        <div className={classes.Panel}>

        </div>
        <div className={classes.Controls}>
          <div>
            <Button onClick={rotateLeft}>&#10226;</Button>
            <Button onClick={moveUp}>&#129045;</Button>
            <Button onClick={rotateRight}>&#10227;</Button>
          </div>
          <div>
            <Button onClick={moveLeft}>&#129044;</Button>
            <Button onClick={moveRight}>&#129046;</Button>
          </div>
          <div>
            <Button onClick={moveDown}>&#129047;</Button>
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
