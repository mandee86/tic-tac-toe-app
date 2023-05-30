import React, { useState, useEffect } from "react";
import "./Board.scss";
import { checkHorizontalWinner, checkVerticallylWinner, checkDiagonallylWinner, checkGameOver } from "../../helpers";
import { useNavigate } from "react-router-dom";
import { createEmptyBoard } from "../../helpers";

import Modal from "../../components/Modal/Modal";
import Players from "./Players";
import Squares from "./Squares";
import BoardButtons from "./BoardButtons";

import { getPlayers, deletePlayers } from "../../services/playersApi";

const Board = () => {
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);

  const [board, setBoard] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [winner, setWinner] = useState(null);

  // these are needed, to style the  line of "winner" squares
  const [winnerDirection, setWinnerDirection] = useState("");
  const [winnerCells, setWinnerCells] = useState([]);

  const [isGameOver, setIsGameOver] = useState(false);

  const [showWinnerModal, setShowWinnerModal] = useState(false);
  const [showGameOverModal, setShowGameOverModal] = useState(false);

  // restart the game function
  const restartGame = () => {
    // get the saved size from the localseStorage
    const size = localStorage.getItem("size");
    // create a new empty board
    const createdBoard = createEmptyBoard(Number(size));
    // set the new board in localStorage
    localStorage.setItem("board", JSON.stringify(createdBoard));

    //"reset" everything in the state
    setBoard(createdBoard);
    setWinner(null);
    setWinnerDirection("");
    setWinnerCells([]);
    setCurrentPlayer(players[0].symbol);
    setIsGameOver(false);
  };

  // reset the game function -> add new settings  (players, board)
  const resetGame = () => {
    // navigate to the settings page
    navigate("/game-settings");
  };

  // quit game funciton - logout
  const quitGame = () => {
    // remove the board, and the size from localeStorage
    localStorage.removeItem("board");
    localStorage.removeItem("size");
    // remove the loggedin user form the localseStorage
    localStorage.removeItem("user");

    // delete the players form the "database"
    // after deleting navigate to the login page
    deletePlayers(players).then(() => {
      navigate("/");
    });
  };

  useEffect(() => {
    getPlayers((players) => {
      setPlayers(players);
      setCurrentPlayer(players[0]?.symbol);
    });

    const board = JSON.parse(localStorage.getItem("board"));
    setBoard(board);
  }, []);

  // click the square function
  const handleClickSquare = (row, column) => {
    // if the square is not empty, do nothing
    if (board[row][column] !== "") {
      return;
    }
    // if there is a winner, or the game is over
    // do nothing
    if (winner && isGameOver) {
      return;
    }

    // else
    // mutate the board (from the state)
    const newBoard = [...board];
    // set the value of the square (currentPlayer)
    newBoard[row][column] = currentPlayer;
    // if it`s done, set the state with the new board
    setBoard(newBoard);
    // and set the new in the localeStorage
    localStorage.setItem("board", JSON.stringify(newBoard));

    // check the winner cases (horizontal, vertical, diagonal)
    if (checkHorizontalWinner(board, (val) => setWinnerCells(val))) {
      setWinner(currentPlayer);
      setWinnerDirection("horizontal-winner");
      setIsGameOver(true);
      setTimeout(() => {
        setShowWinnerModal(true);
      }, "500");

      return;
    }
    if (checkVerticallylWinner(board, (val) => setWinnerCells(val))) {
      setWinner(currentPlayer);
      setWinnerDirection("vertical-winner");
      setIsGameOver(true);
      setTimeout(() => {
        setShowWinnerModal(true);
      }, "500");
      return;
    }
    if (
      checkDiagonallylWinner(
        board,
        (val) => setWinnerCells(val),
        (val) => setWinnerDirection(val)
      )
    ) {
      setWinner(currentPlayer);
      setIsGameOver(true);
      setTimeout(() => {
        setShowWinnerModal(true);
      }, "500");
      return;
    }

    // check if the game is over (and no winner is there)
    if (checkGameOver(board)) {
      setIsGameOver(true);
      setShowGameOverModal(true);
      return;
    }

    // if there is no winner and the game is not over, set the current player for the next player from the players array
    const currentPlayerIndex = players.findIndex((player) => player.symbol === currentPlayer);
    setCurrentPlayer(
      currentPlayerIndex < players.length - 1 ? players[currentPlayerIndex + 1].symbol : players[0].symbol
    );
  };

  return (
    <>
      {board?.length ? (
        <div className="board-page">
          <div className="buttons-wrapper">
            {/* restart, new settings and logout buttons */}
            <BoardButtons restartGame={restartGame} resetGame={resetGame} quitGame={quitGame} isGameOver={isGameOver} />
          </div>
          <div className="board-wrapper">
            {/* board */}
            <Squares
              board={board}
              onClick={handleClickSquare}
              winner={winner}
              winnerDirection={winnerDirection}
              winnerCells={winnerCells}
              players={players}
            />
          </div>
          <div className="players-wrapper">
            {/* players */}
            <Players players={players} currentPlayer={currentPlayer} />
          </div>

          <Modal
            show={showWinnerModal}
            title={`Gratulálunk! ${winner} nyert!!!`}
            onClose={() => setShowWinnerModal(false)}
          />
          <Modal show={showGameOverModal} title={`Game over! :(`} onClose={() => setShowGameOverModal(false)} />
        </div>
      ) : null}
    </>
  );
};

export default Board;
