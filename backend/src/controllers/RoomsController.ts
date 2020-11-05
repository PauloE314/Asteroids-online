import { NextFunction, Request, Response } from "express";

const rooms = [];

/**
 * Room routes manager
 */
export default class RoomsController {
  /**
   * Lists and search for room
   */
  list() {
    return (request: Request, response: Response, next: NextFunction) => {
      try {
        return response.send(rooms);
      } catch (error) {
        next(error);
      }
    };
  }

  /**
   * Creates a new Room
   */
  create() {
    return (request: Request, response: Response, next: NextFunction) => {
      try {
        return response.send({ message: "Room Created" });
      } catch (error) {
        next(error);
      }
    };
  }
}
