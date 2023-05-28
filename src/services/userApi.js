import { gameApi } from "./index.js";

export const getUser = async (callBackFn = null) => {
  try {
    const response = await gameApi.get("user");
    callBackFn && callBackFn(response?.data);
  } catch (err) {
    console.error(err);
  }
};
