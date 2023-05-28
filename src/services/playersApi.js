import { gameApi } from "./index.js";
import { v4 as uuidv4 } from "uuid";

// get players from the "database"
export const getPlayers = async (callBackFn = null) => {
  try {
    const response = await gameApi.get("players");

    callBackFn && callBackFn(response?.data);
  } catch (err) {
    console.error(err);
  }
};

// delete all players function
export const deletePlayers = async (players) => {
  try {
    for (let i = 0; i < players.length; i++) {
      const playerId = players[i].id;
      await gameApi.delete(`players/${playerId}`, {});
    }
  } catch (err) {
    console.error(err);
  }
};

// delete player function
export const deletePlayer = async (id, callBackFn = null) => {
  try {
    await gameApi.delete(`players/${id}`, {});
    callBackFn && callBackFn();
  } catch (err) {
    console.error(err);
  }
};

// add new player
export const addNewPlayer = async (name, symbol, color, callBackFn = null) => {
  try {
    await gameApi.post("players", {
      id: uuidv4(),
      name: name,
      symbol: symbol,
      color: color,
    });
    callBackFn && callBackFn();
  } catch (err) {
    console.error(err);
  }
};
