import crypto from "crypto";
import { Server } from "socket.io";

import { gameSettings } from "../../app/settings";
import Asteroid from "./Asteroid";
import Client from "./Client";

// Aux interfaces
export interface IPosition {
  x: number;
  y: number;
}

export interface ISpeed extends IPosition {}

// Game types
type TGameList = { [key: string]: Game };

// Game state
interface IGameState {
  players: {
    name: string;
    position: IPosition;
    angle: number;
  }[];

  asteroids: {
    position: IPosition;
    size: number;
    type: number;
  }[];
}

/**
 * Game manager and abstraction
 */
export default class Game {
  id: string;
  players: Client[];
  asteroids: Asteroid[];
  isMultiplayer: boolean;
  password?: string;
  timer: NodeJS.Timeout;

  constructor(isMultiplayer: boolean, password?: string) {
    this.id = crypto.randomBytes(20).toString("hex");

    this.players = [];
    this.asteroids = [];
    this.isMultiplayer = isMultiplayer;
    this.password = password;

    // Generates asteroids
    for (let i = 0; i < gameSettings.asteroids.initialAmount; i++) {
      this.asteroids.push(new Asteroid());
    }
  }

  /**
   * Returns game state
   */
  gameState(): IGameState {
    const gameState: IGameState = { players: [], asteroids: [] };

    // Stores player state
    this.players.forEach((player) => {
      gameState.players.push({
        angle: player.angle,
        name: player.name,
        position: player.position,
      });
    });

    // Stores asteroid state
    this.asteroids.forEach((asteroid) => {
      gameState.asteroids.push({
        position: asteroid.position,
        size: asteroid.size,
        type: asteroid.type,
      });
    });

    return gameState;
  }

  /**
   * Adds player to game
   */
  addPlayer(io: Server, client: Client) {
    this.players.push(client);

    client.gameId = this.id;
    client.socket.join(this.id);
  }

  /**
   * Remove player from game
   */
  removePlayer(io: Server, client: Client) {
    this.players = this.players.filter((player) => player.name !== client.name);

    client.gameId = null;
    client.socket.leave(this.id);
  }

  /**
   * Sends message to room
   */
  sendToAll(io: Server, name: string, data: any) {
    io.to(this.id).emit(name, data);
  }

  /**
   * Updates the game state
   */
  update() {
    this.players.forEach((player) => player.update());
    this.asteroids.forEach((asteroid) => asteroid.update());
  }

  /**
   * Starts game
   */
  start(cb: () => any) {
    this.stop();

    this.timer = setInterval(cb, 1000 / gameSettings.frameRate);
  }

  /**
   * Stops game loop
   */
  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  /**
   * Handles client disconnection
   */
  handleDisconnection(io: Server, client: Client) {
    this.removePlayer(io, client);
  }

  /**
   * Games container
   */
  static games: TGameList = {};

  /**
   * Deletes game
   */
  static deleteGame(id: string) {
    delete Game.games[id];
  }

  /**
   * Gets game through its id
   */
  static getGame(id: string) {
    return Game.games[id];
  }
}
