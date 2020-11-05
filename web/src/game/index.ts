import Player, { MainPlayer } from "./entities/Player";
import Asteroid from "./entities/Asteroid";

interface IGameProps {
  screen: IDimensions;
  canvasContext: CanvasRenderingContext2D;
  scale?: number
}

export interface IPosition {
  x: number;
  y: number;
}

export interface IDimensions {
  w: number;
  h: number;
}

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

function draw(ctx: CanvasRenderingContext2D, element: any, screenSize: IDimensions, scale?: number) {
  ctx.save();

  if (scale) {
    ctx.scale(scale, scale);
  }

  // ctx.translate(
  //   element.position.x + 0.5 * element.dimensions.w,
  //   element.position.y + 0.5 * element.dimensions.h
  // );
  // ctx.rotate(element.angle);
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.rect(
    (element.position.x * screenSize.w) / 10,
    (element.position.y * screenSize.h) / 10,
    element.dimensions.w,
    element.dimensions.h
  );
  ctx.stroke();

  // ctx.drawImage(
  //   element.image,
  //   -element.dimensions.w / 2,
  //   -element.dimensions.h / 2,
  //   element.dimensions.w,
  //   element.dimensions.h
  // );

  ctx.restore();
}

/**
 * Here's where all the game logic and game states are stored. Basically, the main class of the game
 */
export default class Game {
  // Attrs
  public scale = 1;
  public screen: IDimensions;
  private ctx: CanvasRenderingContext2D;

  private gameState: IGameState;

  constructor({ screen, canvasContext, scale }: IGameProps) {
    this.screen = screen;
    this.gameState = { asteroids: [], players: [] };
    this.ctx = canvasContext;

    this.scale = scale || 1;
  }

  /**
   * Starts some initial configurations
   */
  public setup() {}

  /**
   * Game loop
   */
  public loop() {
    requestAnimationFrame(this.loop.bind(this));

    this.render(this.screen);
  }

  /**
   * Handles user control
   */
  // public control(event: KeyboardEvent, move: "down" | "up") {
  //   this.mainPlayer.controls(event, this.time.diff, move);
  // }

  /**
   * Renders screen
   */
  public render(screenDimensions: IDimensions) {
    this.ctx.clearRect(0, 0, screenDimensions.w, screenDimensions.h);

    this.gameState.asteroids.forEach((asteroid) => {
      draw(this.ctx, { ...asteroid, dimensions: { w: 30, h: 30 } }, screenDimensions, this.scale);
    });
  }

  /**
   * Updates game state
   */
  public update(gameState: IGameState) {
    this.gameState = gameState;
  }
}
