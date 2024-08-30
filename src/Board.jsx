import "./styles/Board.css";

const Board = ({ playerColor = "Black" }) => { 

    const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const rows = ["8", "7", "6", "5", "4", "3", "2", "1"];

    const makeBoard = () => {
        let gameboard = [];
        for (let i=0; i < rows.length; i++) {
            let row = [];
            for (let j=0; j < cols.length; j++) {
                let color = "White";
                let img = "assets/black/black-pawn.png"
                
                if ((i+j) % 2 === 1) {
                    color = "Black";
                    img = "assets/white/white-bishop.png"
                }

                if (playerColor === "Black" ) {
                    row.push({
                        pos: cols[7-j].concat(rows[7-i]),
                        color: color,
                        img: img,
                    });
                } else {                          
                    row.push({
                        pos: cols[j].concat(rows[i]),
                        color: color,
                        img: img,
                    });
                }
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
                            
                            <img className="piece" src={tile.img} alt="" />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Board;