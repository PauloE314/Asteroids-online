import { Server, Socket } from "socket.io";
import { gameEvents } from "../app/settings";
import clientDisconnect from "./actions/clientDisconnect";
import createGame from "./actions/createGame";
import Client from "./entities/Client";

export function useSocket(io: Server) {
  io.on(gameEvents.ClientConnection, (socket: Socket) => {
    // Created client
    const client = new Client(socket);

    // Handles create game
    socket.on(gameEvents.CreateGame, (data: any) => {
      createGame(io, client, data);
    });

    // Handles disconnect
    socket.on(gameEvents.ClientDisconnection, () =>
      clientDisconnect(io, client)
    );
  });
}
