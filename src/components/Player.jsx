import { useState } from "react"

export default function Player({initionName ,symbol}) {
    const [ isEditing, setIsEditing ] = useState(false)
   const [playerName, setPlayerName] = useState(initionName)

    function handleEditing () {
        setIsEditing((editing) => !editing)
    }

    function handleChange(event) {
        
        setPlayerName(event.target.value)
    }

    let editPlayerName = <span className="player-name">{playerName}</span>
    let btnCaption = "Edit"

    if (isEditing === true) {
         editPlayerName = <input type= 'text' required value = {playerName} onChange={handleChange}/>
         btnCaption="Save"
    }
   
    return (
        <li>
            <span className="player">
                {editPlayerName}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditing}>{btnCaption}</button>
          </li>
    )
}

