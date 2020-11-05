import { Server } from "socket.io";
import Client from "../entities/Client";

export default function clientDisconnect(io: Server, client: Client) {
  if (client.game) {
    client.game.handleDisconnection(io, client);
  }
}
