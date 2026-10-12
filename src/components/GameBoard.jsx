



export default function GameBoard ({isSelected, board}) {
   
   



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
        {board.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => <li key = {colIndex}> <button onClick={() => isSelected(rowIndex,colIndex)} disabled= {playerSymbol !== null}>{playerSymbol}</button></li>)}
            </ol>
            </li>)}
    </ol>
  )
}