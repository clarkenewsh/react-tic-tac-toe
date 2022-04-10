import React from 'react';
import Square from './Square';
import cssClasses from './Board.module.css';

const Board = ({ squares, handleClick }) => {


  return (
    <div className={cssClasses.gameBoard}>
      {squares.map((square, index) => (
        <Square value={square} key={index} handleClick={() => handleClick(index)} />
      ))}
    </div>
  )
}

export default Board;