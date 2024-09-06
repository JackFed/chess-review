import "./styles/Board.css";

const Board = ({ playerColor = "black" }) => { 

    const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const rows = ["8", "7", "6", "5", "4", "3", "2", "1"];

    const makeBoard = () => {
        let gameboard = [];
        for (let i=0; i < rows.length; i++) {
            let row = [];
            for (let j=0; j < cols.length; j++) {
                let color = "white";
                let img = ""
                let piece = "";
                
                if ((i+j) % 2 === 1) {
                    color = "black";
                }

                if (playerColor === "black" ) {
                    if (rows[7-i] == 1) {
                        switch (cols[7-j]) {
                            case "a":
                            case "h":
                                img = "assets/white/white-rook.png";
                                piece = "R";
                                break;
                            case "b":
                            case "g":
                                img = "assets/white/white-bishop.png";
                                piece = "B";
                                break;
                            case "c":
                            case "f":
                                img = "assets/white/white-knight.png";
                                piece = "N";
                                break;
                            case "d":
                                img = "assets/white/white-queen.png";
                                piece = "Q";
                                break;
                            case "e":
                                img = "assets/white/white-king.png";
                                piece = "K";
                                break;

                        }
                    }
                    if (rows[7-i] == 8) {
                        switch (cols[7-j]) {
                            case "a":
                            case "h":
                                img = "assets/black/black-rook.png";
                                piece = "R";
                                break;
                            case "b":
                            case "g":
                                img = "assets/black/black-bishop.png";
                                piece = "B";
                                break;
                            case "c":
                            case "f":
                                img = "assets/black/black-knight.png";
                                piece = "N";
                                break;
                            case "d":
                                img = "assets/black/black-queen.png";
                                piece = "Q";
                                break;
                            case "e":
                                img = "assets/black/black-king.png";
                                piece = "K";
                                break;

                        }
                    }
                    if (i == 1) {
                        img = "assets/white/white-pawn.png"
                    }
                    if (i == 6) {
                        img = "assets/black/black-pawn.png"
                    }
                    row.push({
                        pos: cols[7-j].concat(rows[7-i]),
                        color: color,
                        img: img,
                        piece: piece,
                    });
                } else {           
                    if (rows[i] === 1) {
                        console.log(`Rows: ${rows[7-i]}`)
                        img = "assets/white/white-king.png"
                    }               
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