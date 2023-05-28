// create num X rows and num X columns
export const createEmptyBoard = (num) => {
  return [...Array(num)].map((row) => Array(num).fill(""));
};

// check if the user won horizontally
export const checkHorizontalWinner = (board, setWinnerCells) => {
  for (let i = 0; i < board.length; i++) {
    const row = board[i];

    for (let y = 0; y < row.length; y++) {
      if (
        row[y] !== "" &&
        row[y] === row[y + 1] &&
        row[y] === row[y + 2] &&
        row[y] === row[y + 3] &&
        row[y] === row[y + 4]
      ) {
        setWinnerCells([
          [i, y],
          [i, y + 1],
          [i, y + 2],
          [i, y + 3],
          [i, y + 4],
        ]);
        return true;
      }
    }
  }
};

//check if the user won vertically horizontally
export const checkVerticallylWinner = (board, setWinnerCells) => {
  //transpose the board and navigate through columns as if they were rows
  const transposeBoard = (board) => {
    return board.map((_, index) => board.map((row) => row[index]));
  };

  for (let i = 0; i < board.length; i++) {
    const row = transposeBoard(board)[i];

    for (let y = 0; y < row.length; y++) {
      if (
        row[y] !== "" &&
        row[y] === row[y + 1] &&
        row[y] === row[y + 2] &&
        row[y] === row[y + 3] &&
        row[y] === row[y + 4]
      ) {
        setWinnerCells([
          [y, i],
          [y + 1, i],
          [y + 2, i],
          [y + 3, i],
          [y + 4, i],
        ]);
        return true;
      }
    }
  }
};

// check if hte user won diagonally
export const checkDiagonallylWinner = (board, setWinnerCells, setWinnerDirection) => {
  for (let i = 0; i < board.length; i++) {
    const row = board[i];

    for (let y = 0; y < row.length; y++) {
      if (
        row[y] !== "" &&
        row[y] === board[i + 1]?.[y + 1] &&
        row[y] === board[i + 2]?.[y + 2] &&
        row[y] === board[i + 3]?.[y + 3] &&
        row[y] === board[i + 4]?.[y + 4]
      ) {
        setWinnerDirection("diagonal-left-winner");
        setWinnerCells([
          [i, y],
          [i + 1, y + 1],
          [i + 2, y + 2],
          [i + 3, y + 3],
          [i + 4, y + 4],
        ]);
        return true;
      }

      if (
        row[y] !== "" &&
        row[y] === board[i + 1]?.[y - 1] &&
        row[y] === board[i + 2]?.[y - 2] &&
        row[y] === board[i + 3]?.[y - 3] &&
        row[y] === board[i + 4]?.[y - 4]
      ) {
        setWinnerDirection("diagonal-right-winner");
        setWinnerCells([
          [i, y],
          [i + 1, y - 1],
          [i + 2, y - 2],
          [i + 3, y - 3],
          [i + 4, y - 4],
        ]);
        return true;
      }
    }
  }
};

// check if all the moves are filled
export const checkGameOver = (board) => board.every((row) => row.every((move) => !!move));

// check if 2 arrays is equal
export const arrayEquals = (a, b) => {
  return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);
};
