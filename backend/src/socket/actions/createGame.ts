import { Server } from "socket.io";
import { gameErrors, gameEvents } from "../../app/settings";
import { delay } from "../../utils";
import Client from "../entities/Client";
import Game from "../entities/Game";

interface IInput {
  isMultiplayer: boolean;
  password?: string;
  roomName?: string;
}

export default function createGame(io: Server, client: Client, data: IInput) {
  console.log("CREATE GAME");
  try {
    // Ensures unique game
    if (client.game) {
      client.sendError(gameErrors.AlreadyInRoom);
    }

    // Creates new game
    const game = new Game(data.isMultiplayer, data.password);
    game.addPlayer(io, client);

    // Delays
    delay(2000);

    // Starts game loop
    game.start(() => {
      // Updates game state
      game.update();

      // Gets current game state
      const state = game.gameState();

      // io.to(game.id).emit(gameEvents.StateUpdate, state);

      // Sends current state to all
      game.sendToAll(io, gameEvents.StateUpdate, state);
    });
  } catch (error) {}
}
