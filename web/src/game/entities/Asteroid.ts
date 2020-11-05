import { IDimensions } from "..";
import settings from "../settings";
import Sprite from "./Sprite";

interface IAsteroidProps {}

/**
 * Base class for asteroids
 */
export default class Asteroid extends Sprite {
  public size: number;

  constructor(context: CanvasRenderingContext2D, screen: IDimensions) {
    super(context, settings.asteroidSize, screen, { x: 0, y: 0 });
    this.size = Math.floor(Math.random() * 3);
    this.angle = 0;

    this.dimensions = {
      w: this.size * this.dimensions.w,
      h: this.size * this.dimensions.h,
    };
    this.position = {
      x: Math.random() * screen.w * 0.7 - this.dimensions.w + 20,
      y: Math.random() * screen.h * 0.7 - this.dimensions.h + 20,
    };

    this.image.src = require("../../assets/sprites/" +
      spriteList[Math.floor(Math.random()) * 3 + this.size]);

    const speed = settings.maxSpeed * 0.3;
    this.speed = {
      x: Math.random() * speed * 2 - speed,
      y: Math.random() * speed * 2 - speed,
    };
  }

  /**
   * Updates asteroid state
   */
  update(dt: number) {
    this.setAngle(this.angle + settings.rotationSpeed / 5);
    super.update(dt);
  }

  /**
   * Generates asteroid list
   */
  static generateAsteroids(amount: number, ctx: CanvasRenderingContext2D, screen: IDimensions) {
    const asteroids = [];
    for (let n = 0; n < amount; n++) {
      asteroids.push(new Asteroid(ctx, screen));
    }
    return asteroids;
  }
}

const spriteList = [
  "Big asteroid 1.svg",
  "Big asteroid 2.svg",
  "Big asteroid 3.svg",
  "Medium asteroid 1.svg",
  "Medium asteroid 2.svg",
  "Medium asteroid 3.svg",
  "Small asteroid 1.svg",
  "Small asteroid 2.svg",
  "Small asteroid 3.svg",
];
