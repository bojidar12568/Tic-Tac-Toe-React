import { useState } from "react"
import Player from "./components/Player.jsx"
import GameBoard from "./components/Gameboard.jsx"
import Log from "./components/Log.jsx"


function App() {
  const [playerTurn, setPlayerTurn] = useState('X')
  const [gameTurns, setGameTurns] = useState([])

  function handlePlayerTurn (rowIndex, colIndex) {
    setPlayerTurn((selectedPlayer) => selectedPlayer === 'X' ? 'O' : 'X')
    setGameTurns((oldTurns) => {
      let curruntTurn = 'X'

      if (oldTurns.length > 0 && oldTurns[0].player === 'X') {
        curruntTurn = 'O'
      } 

      const turnMassege = [{square: {row:rowIndex, col:colIndex}, player: curruntTurn}, ...oldTurns]
      return turnMassege
    } )
    
  }

 
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initionName= 'Player 1' symbol= 'X' isActive={playerTurn === 'X'} />
          <Player initionName= 'Player 2' symbol= 'O' isActive={playerTurn === 'O'} />
        </ol>
        <GameBoard isSelected={handlePlayerTurn} turns={gameTurns} />
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
