import React from "react";

const Players = ({ players, currentPlayer }) => {
  return (
    <div className="players">
      {players?.map((player) => (
        <div key={player.id} className={player.symbol === currentPlayer ? "active-player player" : "player"}>
          {player.name} ({player.symbol})
        </div>
      ))}
    </div>
  );
};

export default Players;
