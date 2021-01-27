import { useState } from 'react';

import classes from './App.module.css';

import Square from './components/Square/Square';

function App() {

  const [matrix, setMatrix] = useState([
    'red', '', '',
    '', '', '',
    'red', '', 'red'
  ])

  const target = [
    'red', 'red', 'red',
    '', '', '',
    '', '', ''
  ];

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
      <div className={gridClasses.join(' ')}>
        <div className={classes.Row}>
          <Square color={matrix[0]} />
          <Square color={matrix[1]} />
          <Square color={matrix[2]} />
        </div>
        <div className={classes.Row}>
          <Square color={matrix[3]} />
          <Square color={matrix[4]} />
          <Square color={matrix[5]} />
        </div>
        <div className={classes.Row}>
          <Square color={matrix[6]} />
          <Square color={matrix[7]} />
          <Square color={matrix[8]} />
        </div>
      </div>
      <button onClick={rotateLeft}>Rotate Left</button>
      <button onClick={rotateRight}>Rotate Right</button>
      <div>
        <button onClick={moveUp}>Up</button>
      </div>
      <div>
        <button onClick={moveLeft}>Left</button>
        <button onClick={moveRight}>Right</button>
      </div>
      <div>
        <button onClick={moveDown}>Down</button>
      </div>

      <div className={classes.smallGrid}>
        <div className={classes.Row}>
          <Square color={target[0]} />
          <Square color={target[1]} />
          <Square color={target[2]} />
        </div>
        <div className={classes.Row}>
          <Square color={target[3]} />
          <Square color={target[4]} />
          <Square color={target[5]} />
        </div>
        <div className={classes.Row}>
          <Square color={target[6]} />
          <Square color={target[7]} />
          <Square color={target[8]} />
        </div>
      </div>
    </div>
  );
}

export default App;
