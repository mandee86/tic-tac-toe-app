import React, { useEffect, useState } from "react";
import "./GameSettings.scss";
import { createEmptyBoard } from "../../helpers";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import PlayerForm from "./PlayerForm";
import BoardForm from "./BoardForm";
import { getPlayers, addNewPlayer, deletePlayer } from "../../services/playersApi";

const GameSettings = () => {
  const navigate = useNavigate();

  const [newPlayerName, setNewPlayerName] = useState("");
  const [newPlayerSymbol, setNewPlayerSymbol] = useState("");
  const [symbolColor, setSymbolColor] = useState("#000000");

  const [players, setPlayers] = useState([]);
  const [size, setSize] = useState(0);

  const [showSize, setShowSize] = useState(false);
  const [savedSize, setSavedSize] = useState(0);

  useEffect(() => {
    getPlayers((players) => setPlayers(players));

    // when refreshing the page, data won`t be lost if we set it in localStorage,
    // and get it from localeStorage after rerender
    // if the size is not 0, set the local state
    const size = localStorage.getItem("size");
    if (size) {
      setSize(size);
      setSavedSize(size);
      setShowSize(true);
    }
  }, []);

  // add player function
  const addPlayer = async (e) => {
    // it`s necessery, otherwise the page will reload
    e.preventDefault();

    // if the entered name already exist throw an error
    if (players.find((player) => player.name === newPlayerName)) {
      toast("Ez a felhasználónév már foglalt!");
      return;
    }

    // if the entered symbol already exist throw an error
    if (players.find((player) => player.symbol === newPlayerSymbol)) {
      toast("Ez a szimbólum már foglalt!");
      return;
    }

    // if the choosen color already taken throw an error
    if (players.find((player) => player.color === symbolColor)) {
      toast("Ez a szín már foglalt!");
      return;
    }

    // otherwise save the player into "database"

    addNewPlayer(newPlayerName, newPlayerSymbol, symbolColor, () => {
      setNewPlayerName("");
      setNewPlayerSymbol("");
      setSymbolColor("#000000");
      getPlayers((players) => setPlayers(players));
    });
  };

  const handleDeletePlayer = (id) => {
    deletePlayer(id, () => {
      getPlayers((players) => setPlayers(players));
    });
  };

  // create a board function
  const handleCreateBoard = async (e) => {
    // it`s necessery, otherwise the page will reload
    e.preventDefault();

    // if the user didn`t set the board size, throw an error and do nothing
    if (!size) {
      toast("Add meg a pálya méretét!");
      return;
    }

    // else create an empty board
    const createdBoard = createEmptyBoard(Number(size));
    // set the board and the size in the localStorage, so if refreshing the page the data won`t be lost
    localStorage.setItem("board", JSON.stringify(createdBoard));
    localStorage.setItem("size", size);

    // show the user the saved size
    setSavedSize(size);
    setShowSize(true);
  };

  // start the game function
  const startGame = () => {
    // if there is no player throw an error and do nothing
    if (players.length < 2) {
      toast("Adj meg legalább 2 játékost");
      // if there is no created board throw an error and do nothing
      if (localStorage.getItem("board") === null) {
        toast("Add meg a pálya méretét!");
        return;
      }
      return;
    }
    // if there is no created board throw an error and do nothing
    if (localStorage.getItem("board") === null) {
      toast("Add meg a pálya méretét!");
      return;
    }

    // else create an empty board
    const createdBoard = createEmptyBoard(Number(size));
    // set the board and the size in the localStorage, so if refreshing the page the data won`t be lost
    localStorage.setItem("board", JSON.stringify(createdBoard));
    localStorage.setItem("size", size);

    //and navigate to the board page
    navigate("/board");
  };

  return (
    <>
      <h1 className="text-center">Beállítások</h1>
      <div className="content">
        <div className="settings-wrapper">
          {/* players form */}
          <PlayerForm
            addPlayer={addPlayer}
            newPlayerName={newPlayerName}
            setNewPlayerName={setNewPlayerName}
            newPlayerSymbol={newPlayerSymbol}
            setNewPlayerSymbol={setNewPlayerSymbol}
            players={players}
            onDeletePlayer={handleDeletePlayer}
            symbolColor={symbolColor}
            setSymbolColor={(color) => setSymbolColor(color)}
          />

          {/* board form */}
          <BoardForm
            onCreateBoard={handleCreateBoard}
            size={size}
            setSize={setSize}
            savedSize={savedSize}
            showSize={showSize}
          />
        </div>

        {/* if there is an error, show a toastify to the user */}
        <ToastContainer />

        <br />

        {/* start the game button -> navigate to the board page */}
        <div className="text-center">
          <Button type="submit" className="start-game-btn btn-primary" text="Játék indítása" onClick={startGame} />
        </div>

        <br />
        <br />
      </div>
    </>
  );
};

export default GameSettings;
