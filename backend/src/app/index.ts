import express, { Express } from "express";
import { Server, createServer } from "http";
import Socket, { Server as SocketServer } from "socket.io";

import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

import routes from "../routes";
import { errorHandler } from "./errors";
import { useSocket } from "../socket";

/**
 * Abstração da aplicação do backend do projeto Cidade de Goiás
 */
export class App {
  app: Express;
  server: Server;
  socket: SocketServer;

  constructor() {
    this.app = express();

    dotenv.config();

    this.middlewares();
    this.routes();
    this.errors();

    this.server = createServer(this.app);
    this.socket = Socket();
    this.socket.listen(this.server, { path: "/game" });

    useSocket(this.socket);
  }

  /**
   * Applies global middlewares
   */
  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(helmet());
  }

  /**
   * Applies app's routes
   */
  routes() {
    this.app.use(routes);
  }

  /**
   * Handles app's errors
   */
  errors() {
    this.app.use(errorHandler);
  }

  /**
   * Runs app
   */
  async run() {
    this.server.listen(process.env.PORT);
  }
}
