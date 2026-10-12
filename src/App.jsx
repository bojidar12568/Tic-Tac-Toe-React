import { useState } from "react"
import Player from "./components/Player.jsx"
import GameBoard from "./components/Gameboard.jsx"
import Log from "./components/Log.jsx"
import { WINNING_COMBINATIONS } from "./winning-combinations.js"
import GameOver from "./components/GameOver.jsx"

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}
 
const INITIAL_GAME_BOARD = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]


function handlePlayer (gameTurns) {
  let curruntTurn = 'X'
  
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        curruntTurn = 'O'
      }
      return curruntTurn
}

function deriveWinner(gameBoard, players) {

  let winner;

   for (const combinations of WINNING_COMBINATIONS) {
    const firstCombination = gameBoard[combinations[0].row][combinations[0].column]
    const secoantCombination = gameBoard[combinations[1].row][combinations[1].column]
    const thirdCombination = gameBoard[combinations[2].row][combinations[2].column]

    if (firstCombination &&
      firstCombination === secoantCombination &&
      firstCombination === thirdCombination
    ) {
      winner = players[firstCombination]
    }

   }

   return winner
}

function deriveGameBoard(gameTurns) {

  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])]

   for (const turn of gameTurns) {
   const {square, player} = turn
   const {row, col} = square
  gameBoard[row][col] = player
   }

   return gameBoard

}


function App() {
 
 const [players, setPlayers] = useState(PLAYERS)
  const [gameTurns, setGameTurns] = useState([])

  const playerTurn = handlePlayer(gameTurns)

  
  const gameBoard = deriveGameBoard(gameTurns)

   const winner = deriveWinner(gameBoard, players)

   const hasDraw = gameTurns.length === 9 && !winner;

  function handlePlayerTurn (rowIndex, colIndex) {
   // setPlayerTurn((selectedPlayer) => selectedPlayer === 'X' ? 'O' : 'X')
    setGameTurns((oldTurns) => {
       
      const playerTurn = handlePlayer(oldTurns)

      const turnMassege = [{square: {row:rowIndex, col:colIndex}, player:playerTurn},...oldTurns]
      return turnMassege
    } )
    
  }

  function handleRematch() {
      setGameTurns([])
    }

    function handlePlayerNameChange (symbol, newName) {
      setPlayers(prevPlayers =>{
        return {
          ...prevPlayers,
          [symbol]: newName
        }

      })
    }
 
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initionName= {PLAYERS.X} symbol= 'X' isActive={playerTurn === 'X'} onChangeName={handlePlayerNameChange}/>
          <Player initionName= {PLAYERS.O} symbol= 'O' isActive={playerTurn === 'O'} onChangeName={handlePlayerNameChange}/>
        </ol>
        {(winner || hasDraw) && <GameOver  winner = {winner} onRestart={handleRematch} />}
        <GameBoard isSelected={handlePlayerTurn} board={gameBoard} />
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
