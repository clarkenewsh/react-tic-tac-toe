import './App.css';
import Board from './components/Board';

// TASK LIST
// 1 - Break down the problem
//   1.1 - Break down the tic tac toe game in to components - game.App.js, board (3x3 grid), squares
//   1.2 - Define functions and core logic for each component - game state, boardstate, square state & value, checkWinner, playerTurn, dipslayWinner, restartGame, renderBoard by mapping through squares x9 with value, handleClick when square clicked, check if winner & check square is already occupied
// 2 - Universal CSS & CSS modules for each component
// 3 - Test functionality 
// 4 - Stretch Goals & additional features 

const App = () => {

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
      const [a, b, c] = winningPositions[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const handleClick = () => {
    console.log("clicked");
  }

  // Set up value of each squares - test array
  const squares = [
    'O', null, 'X',
    'X', 'X', 'X',
    'O', null, null,
  ];

  console.log(checkWinner(squares));

  return (
    <>
      <header>
        <h1>Tic-Tac-Toe</h1>
      </header>
      <main>
      <Board checkWinner={checkWinner} handleClick={handleClick} squares={squares}/>
      </main>
    </>
  );
}

export default App;
