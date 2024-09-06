import "./styles/Board.css";
import { setupPieces } from "./gameLogic";

const Board = ({ playerColor = "black", oponentColor = "white" }) => { 

    const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const rows = ["8", "7", "6", "5", "4", "3", "2", "1"];

    const makeBoard = () => {
        let gameboard = [];
        for (let i=0; i < rows.length; i++) {
            let row = [];
            for (let j=0; j < cols.length; j++) {
                row = setupPieces(row, rows, cols, i, j, playerColor, oponentColor)
            }
            gameboard.push(row);
        }
        
        console.table(gameboard)
        return gameboard;
        
    }
    
    const gameboard = makeBoard();

    return (
        <div className="chessboard">
            {gameboard.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((tile, colIndex) => (
                        <div key={colIndex} className={`square ${tile.color}`}>
                            {/* {tile.pos} */}
                            <img className="piece" src={tile.img} alt="" />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Board;