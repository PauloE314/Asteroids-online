export const codes = {
  SERVER_ERROR: 500,
};

export const gameSettings = {
  asteroids: {
    maxSpeed: 0.05,
    angleChange: 1,
    initialAmount: 5,
  },
  players: {
    maxSpeed: 1,
  },
  frameRate: 60,
};

export const gameEvents = {
  ClientConnection: "connect",
  ClientDisconnection: "disconnecting",
  CreateGame: "create-game",
  StateUpdate: "state-update",
};

export const gameErrors = {
  AlreadyInRoom: { code: 1, message: "User already in room" },
};
