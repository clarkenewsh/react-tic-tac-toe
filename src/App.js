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

  const checkWinner = () => {

  }

  const handleClick = () => {
    console.log("clicked");
  }

  // Set up value of each squares
  const squares = [
    'O', null, 'X',
    'X', 'X', 'O',
    'O', null, null,
  ]

  return (
    <main>
     <Board checkWinner={checkWinner} handleClick={handleClick} squares={squares}/>
    </main>
  );
}

export default App;
