import './App.css';
import { useState } from 'react';
import Board from './components/Board';

// TASK LIST
// 1 - Break down the problem
//   1.1 - Break down the tic tac toe game in to components - game.App.js, board (3x3 grid), squares
//   1.2 - Define functions and core logic for each component - game state, boardstate, square state & value, checkWinner, playerTurn, dipslayWinner, restartGame, renderBoard by mapping through squares x9 with value, handleClick when square clicked, check if winner & check square is already occupied
// 2 - Universal CSS & CSS modules for each component
// 3 - Test functionality 
// 4 - Stretch Goals & additional features 

const App = () => {

  // Set board squares array with null values upon game start
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xNext, setXNext] = useState(true);
  
  const checkWinner = (squares) => {
    const winningPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPositions.length; i++) {
      // store destructured all winning lines - a,b,c
      const [a, b, c] = winningPositions[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = checkWinner(board);

  const handleClick = (index) => {

    console.log("clicked", index);
    let updatedBoard = [...board];
    // If game is won or square occupied, return
    if(winner || updatedBoard[index]) {
      return;
    };

    // render X or O is clicked square
    updatedBoard[index] = xNext ? "X" : "O";
    // update board state with moves
    setBoard(updatedBoard);
    // alternate player
    setXNext(!xNext);
  };

  // Set up value of each squares - test array
  // const squares = [
  //   'O', null, 'X',
  //   'O', 'X', 'X',
  //   'X', null, 'X',
  // ];

  const restartHandler = () => {
    setBoard(Array(9).fill(null));
    setXNext(true);
  }

  return (
    <>
      <main>
        <h1>Tic-Tac-Toe</h1>
        <Board checkWinner={checkWinner} handleClick={handleClick} squares={board}/>
        <p>
          { winner ? `Winner is: ${winner}` 
          : "Player turn: " + (xNext ? "X" : "O")
          }
        </p>
        <button onClick={restartHandler}className='btn'>Restart</button>
      </main>
    </>
  );
}

export default App;
