function setupPieces(row, rows, cols, rowIndex, colIndex, playerColor) {
    let color = "white";
    let img = ""
    let piece = "";
    
    if ((rowIndex + colIndex) % 2 === 1) {
        color = "black";
    }

    console.log(colIndex);
    if (playerColor === "black") {
        rowIndex = 7 - rowIndex;
        colIndex = 7 - colIndex;
        console.log(colIndex);
    }
    if (rows[rowIndex] == 1) {
        switch (cols[colIndex]) {
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
    if (rows[rowIndex] == 8) {
        switch (cols[colIndex]) {
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
    if (rowIndex == 6) {
        img = "assets/white/white-pawn.png"
    }
    if (rowIndex == 1) {
        img = "assets/black/black-pawn.png"
    }

    row.push({
        pos: cols[colIndex].concat(rows[rowIndex]),
        color: color,
        img: img,
        piece: piece,
    });
    return row;
}

export { setupPieces };