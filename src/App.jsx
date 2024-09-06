import { useState } from 'react';
import Board from './Board';
import "./styles/App.css";

function App() {

  const [playerColor, setPlayerColor] = useState("white");

  const handlePlayerSwitch = () => {
    if (playerColor === "white") {
      setPlayerColor("black");
    } else {
      setPlayerColor('white');
    }
  }

  return (
    <div className='game'>
      <button onClick={handlePlayerSwitch}>Flip Board</button>
      <Board playerColor={playerColor}/>
    </div>
  )
}

export default App
