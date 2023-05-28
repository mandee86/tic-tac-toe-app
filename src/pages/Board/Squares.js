import React, { useRef } from "react";
import { arrayEquals } from "../../helpers";

const Squares = ({ board, onClick, winner, winnerDirection, winnerCells, players }) => {
  //this ref is needed to get the square size
  const squareRef = useRef(null);

  // check if the square (in the parameter) is equal to one of the winner squares
  const isWinnerCell = (x, y) => {
    return winnerCells.find((el) => arrayEquals(el, [x, y]));
  };

  const getIndexOfWinner = (x, y) => {
    return winnerCells.map(String).indexOf(`${x},${y}`);
  };

  const getColor = (cell) => {
    const player = players.find((player) => player.symbol === cell);
    if (!player) return;
    return player.color;
  };

  return (
    <div className="card v-centered board-card">
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((col, colIndex) => (
            <div
              className="cell"
              ref={squareRef}
              key={`${rowIndex}${colIndex}`}
              onClick={() => onClick(rowIndex, colIndex)}
              style={{ width: `calc(100%/${board.length})`, paddingBottom: `calc(100%/${board.length} - 3px)` }}
            >
              <span className="text" style={{ color: getColor(board[rowIndex][colIndex]) }}>
                {board[rowIndex][colIndex]}
              </span>

              {/* show the line in the square if it`s a winner cell */}
              {winner && isWinnerCell(rowIndex, colIndex) ? (
                <div
                  className={`${winnerDirection} line winner-line line-${getIndexOfWinner(rowIndex, colIndex)}`}
                  style={
                    winnerDirection === "diagonal-left-winner" || winnerDirection === "diagonal-right-winner"
                      ? { width: 1.414 * squareRef?.current?.clientWidth }
                      : {}
                  }
                ></div>
              ) : null}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Squares;
