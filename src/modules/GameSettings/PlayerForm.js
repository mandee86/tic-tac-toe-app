import React from "react";
import Button from "../../components/Button/Button";
import ColorPicker from "../../components/ColorPicker/ColorPicker";
const PlayerForm = ({
  addPlayer,
  onDeletePlayer,
  newPlayerName,
  setNewPlayerName,
  newPlayerSymbol,
  setNewPlayerSymbol,
  symbolColor,
  setSymbolColor,
  players,
}) => {
  return (
    <div className="w-500">
      <div className="card h-100">
        <div className="card-header text-center">
          <h2 className="m-0">Játékosok</h2>
          <span>(minimum 2)</span>
        </div>

        {/* players form */}
        <form onSubmit={(e) => addPlayer(e)}>
          <div className="form-inputs">
            <div className="form-item">
              <label htmlFor="newPlayerName">
                Játékos neve<sup className="text-red">*</sup>
              </label>
              <input
                type="text"
                name="newPlayerName"
                id="newPlayerName"
                value={newPlayerName}
                onChange={(e) => setNewPlayerName(e.target.value)}
                required
              />
            </div>
            <div className="symbol-wrapper">
              <div className="form-item p-0">
                <label htmlFor="newPlayerSymbol">
                  Szimbólum<sup className="text-red">*</sup> <br />
                  <span style={{ textTransform: "none" }}>(maximum 1 karakter)</span>
                </label>

                <input
                  type="text"
                  name="newPlayerSymbol"
                  id="newPlayerSymbol"
                  value={newPlayerSymbol}
                  onChange={(e) => setNewPlayerSymbol(e.target.value)}
                  maxLength="1"
                  required
                />
              </div>

              <div className="color-wrapper">
                <label htmlFor="newPlayerSymbol" className="text-center">
                  Szín
                  <br />
                  <span>&nbsp;</span>
                </label>
                <ColorPicker color={symbolColor} setColor={setSymbolColor} />
              </div>
            </div>

            {/* saved players list */}
            {players.length > 0 ? (
              <ul className="players-list">
                {players.map((player, index) => (
                  <li key={player.id}>
                    <div className="player-name">
                      <span>
                        {index + 1}. {player.name}
                      </span>{" "}
                      <span style={{ color: player.color }}>({player.symbol})</span>
                    </div>

                    <Button onClick={() => onDeletePlayer(player.id)} text="törlés" className="outlined btn-small" />
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {/* save the new player button */}
          <div className="card-footer">
            <Button type="submit" text="Hozzáadás" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlayerForm;
