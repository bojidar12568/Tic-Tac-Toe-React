import Player from "./components/Player.jsx"
import GameBoard from "./components/Gameboard.jsx"

function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initionName= 'Player 1' symbol= 'X'/>
          <Player initionName= 'Player 2' symbol= 'O'/>
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  )
}

export default App
