import { Socket } from "socket.io";
import Base from "./Base";
import Game, { IPosition, ISpeed } from "./Game";

interface IAcceleration extends ISpeed {}
/**
 * Game Client
 */
export default class Client extends Base {
  gameId: string | null;
  socket: Socket;

  name: string;
  position: IPosition;
  speed: ISpeed;
  acceleration: IAcceleration;
  angle: number;

  /**
   * Gets game
   */
  get game() {
    return Game.getGame(this.gameId);
  }

  constructor(socket: Socket) {
    super();
    this.socket = socket;
  }

  /**
   * Updates client state
   */
  update() {
    super.update();
  }

  /**
   * Sends message
   */
  send(event: string, data?: any) {
    this.socket.emit(event, data);
  }

  /**
   * Sends error
   */
  sendError(error: { code: number; message: string }) {
    this.socket.emit("game-error", error);
    throw new Error();
  }
}
