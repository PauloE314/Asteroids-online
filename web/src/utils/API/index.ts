import axios from "axios";
import { configs } from "../index";

export const api = axios.create({
  baseURL: configs.apiUrl,
});

export const gameEvents = {
  StateUpdate: "state-update",
  CreateGame: "create-game",
};
