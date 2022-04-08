import React from 'react';
import Square from './Square';
import cssClasses from './Board.module.css';

const Board = () => {



  const handleClick = () => {
    console.log("clicked");
  }

  return (
    <div className={cssClasses.gameBoard}>
      <Square value='1' handleClick={handleClick} />
      <Square value='2' handleClick={handleClick} />
      <Square value='3' handleClick={handleClick} />
      <Square value='4' handleClick={handleClick} />
      <Square value='5' handleClick={handleClick} />
      <Square value='6' handleClick={handleClick} />
      <Square value='7' handleClick={handleClick} />
      <Square value='8' handleClick={handleClick} />
      <Square value='9' handleClick={handleClick} />
    </div>
  )
}

export default Board;