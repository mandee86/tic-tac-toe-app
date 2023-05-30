import React from "react";

const Players = ({ players, currentPlayer }) => {
  return (
    <div className="players">
      {players?.map((player) => (
        <div key={player.id} className={player.symbol === currentPlayer ? "active-player player" : "player"}>
          <span className="player-name">{player.name}</span> <span>({player.symbol})</span>
        </div>
      ))}
    </div>
  );
};

export default Players;
