import Board from './Board';
import "./styles/App.css";

function App() {

  return (
    <div className='game'>
      <Board />
      
      <img src="assets/black/black-pawn.png" alt="" />
      <img src="assets/black/black-bishop.png" alt="" />
      <img src="assets/black/black-knight.png" alt="" />
      <img src="assets/black/black-rook.png" alt="" />
      <img src="assets/black/black-queen.png" alt="" />
      <img src="assets/black/black-king.png" alt="" />
      <img src="assets/white/white-pawn.png" alt="" />
      <img src="assets/white/white-rook.png" alt="" />
      <img src="assets/white/white-queen.png" alt="" />
      <img src="assets/white/white-knight.png" alt="" />
      <img src="assets/white/white-bishop.png" alt="" />
      <img src="assets/white/white-king.png" alt="" />
    </div>
  )
}

export default App
