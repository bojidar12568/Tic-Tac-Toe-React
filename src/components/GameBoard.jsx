

const idishanalGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

export default function GameBoard ({isSelected, turns}) {
   
   let gameBoard = idishanalGameBoard

   for (const turn of turns) {
   const {square, player} = turn
   const {row, col} = square
   gameBoard[row][col] = player
   }



    //     const [gameBoard ,setGameBoard] = useState(idishanalGameBoard)

//     function handleGameBoard (rowIndex, colIndex) {
//         setGameBoard((previosGameboard) => {
//             const updatedGameBoard = [...previosGameboard.map(insideGameBoard => [...insideGameBoard])]
//             updatedGameBoard[rowIndex][colIndex] = isPlayerSymbol
//             return updatedGameBoard 
//         });

//         isSelected()
//     }

  return( <ol id="game-board">
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => <li key = {colIndex}> <button onClick={() => isSelected(rowIndex,colIndex)}>{playerSymbol}</button></li>)}
            </ol>
            </li>)}
    </ol>
  )
}