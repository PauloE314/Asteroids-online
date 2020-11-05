import { IDimensions } from "..";
import settings from "../settings";
import Sprite from "./Sprite";

/**
 * Base class for player abstraction
 */
export default class Player extends Sprite {
  public accelerating: boolean;
  public rotation: "left" | "right" | null;
  public isMain: boolean;

  private fireImage: HTMLImageElement;
  private acceleration: {
    x: number;
    y: number;
  };

  constructor(isMain: boolean, context: CanvasRenderingContext2D, screen: IDimensions) {
    super(context, settings.playerSize, screen, { x: screen.w / 2, y: screen.h / 2 });
    this.isMain = isMain;
    this.image.src = require("../../assets/sprites/Ship.svg");

    this.fireImage = new Image();
    this.fireImage.src = require("../../assets/sprites/Ship fire.svg");

    this.acceleration = {
      x: 0,
      y: 0,
    };
  }

  /**
   * Updates player data
   */
  update(dt: number) {
    const { dtOffSet, rotationSpeed } = settings;

    // Rotation
    if (this.rotation === "left") this.setAngle(this.angle - rotationSpeed * dt * dtOffSet);
    else if (this.rotation === "right") this.setAngle(this.angle + rotationSpeed * dt * dtOffSet);

    // Moving logic
    this.move(dt);
  }

  /**
   * Moves player
   */
  private move(dt: number) {
    const { dtOffSet, acceleration } = settings;

    // Move
    this.acceleration = this.accelerating
      ? {
          y: Math.sin(this.angle - Math.PI / 2) * acceleration * dt * dtOffSet,
          x: Math.cos(this.angle - Math.PI / 2) * acceleration * dt * dtOffSet,
        }
      : { x: 0, y: 0 };

    // Handle speed logic
    const newX = this.speed.x + this.acceleration.x;
    const newY = this.speed.y + this.acceleration.y;

    this.speed = {
      x: Math.abs(newX) < settings.maxSpeed ? newX : this.speed.x,
      y: Math.abs(newY) < settings.maxSpeed ? newY : this.speed.y,
    };

    super.update(dt);
  }

  /**
   * Draws player
   */
  public render(ctx: CanvasRenderingContext2D) {
    super.render(ctx);

    // Draws fire animation
    if (this.accelerating) {
      this.renderFire(ctx);
    }
  }

  /**
   * Draws fire
   */
  private renderFire(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(
      this.position.x + 0.5 * this.dimensions.w,
      this.position.y + 0.5 * this.dimensions.h
    );
    ctx.rotate(this.angle);

    ctx.drawImage(
      this.fireImage,
      -this.dimensions.w * 0.25,
      this.dimensions.h * 0.6,
      this.dimensions.w * 0.5,
      this.dimensions.h * 0.5
    );

    ctx.restore();
  }
}

/**
 * Main player
 */
export class MainPlayer extends Player {
  /**
   * Handles player movement
   */
  controls(event: KeyboardEvent, dt: number, move: "down" | "up") {
    // Stops rotation
    if ((event.key === "d" || event.key === "a") && move === "up") {
      this.rotation = null;
    }

    // Right rotation
    else if (event.key === "d") {
      this.rotation = "right";
    }

    // Left rotation
    else if (event.key === "a") {
      this.rotation = "left";
    }

    // Moving forwards
    if (event.key === "w" && move === "down") {
      this.accelerating = true;
    }
    // Stop acceleration
    else if (event.key === "w" && move === "up") {
      this.accelerating = false;
    }
  }
}
