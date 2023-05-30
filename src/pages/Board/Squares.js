import React, { useRef } from "react";
import { arrayEquals } from "../../helpers";

const Squares = ({ board, onClick, winner, winnerDirection, winnerCells, players }) => {
  const gap = window.innerWidth > 767 ? 48 : 24;
  const side = window.innerWidth > 767 ? 400 : 60;
  const containerGap = window.innerWidth > 767 ? 48 : 12;
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

  const getCellSize = () => {
    let size = 0;

    if (window.innerWidth - (gap + side) < window.innerHeight) {
      size =
        window.innerWidth < 1200
          ? (window.innerWidth - (gap + side + containerGap) - 8) / board.length
          : 752 / board.length - 8;
    } else {
      size = window.innerHeight < 752 ? (window.innerHeight - gap - 12) / board.length : 752 / board.length;
    }

    return size;
  };

  return (
    <div className="v-centered board-card">
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((col, colIndex) => (
            <div
              className="cell"
              ref={squareRef}
              key={`${rowIndex}${colIndex}`}
              onClick={() => onClick(rowIndex, colIndex)}
              style={{ width: getCellSize(), paddingBottom: getCellSize() }}
            >
              <span
                className="text"
                style={{ color: getColor(board[rowIndex][colIndex]), fontSize: getCellSize() * 0.7 }}
              >
                {board[rowIndex][colIndex]}
              </span>

              {/* show the line in the square if it`s a winner cell */}
              {winner && isWinnerCell(rowIndex, colIndex) ? (
                <div
                  className={`${winnerDirection} line winner-line line-${getIndexOfWinner(rowIndex, colIndex)}`}
                  style={
                    winnerDirection === "diagonal-left-winner" || winnerDirection === "diagonal-right-winner"
                      ? { width: 1.414 * squareRef?.current?.clientWidth + 2 }
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
