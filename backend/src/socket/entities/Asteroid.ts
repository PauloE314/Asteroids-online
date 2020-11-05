import { gameSettings } from "../../app/settings";
import { getRandomNumber } from "../../utils";
import Base from "./Base";
import { IPosition, ISpeed } from "./Game";

/**
 * Asteroids class
 */
export default class Asteroid extends Base {
  size: number;
  type: number;
  position: IPosition;
  speed: ISpeed;
  angle: number;

  constructor() {
    super();

    const minSpeed = (-gameSettings.asteroids.maxSpeed / 2) * 10;
    const maxSpeed = (gameSettings.asteroids.maxSpeed / 2) * 10;

    this.size = getRandomNumber({ from: 0, to: 3 });
    this.type = getRandomNumber({ from: 0, to: 3 });

    this.position = {
      x: getRandomNumber({ from: 0, to: 9 }),
      y: getRandomNumber({ from: 0, to: 9 }),
    };

    this.speed = {
      x: getRandomNumber({ from: minSpeed, to: maxSpeed }) / 10,
      y: getRandomNumber({ from: minSpeed, to: maxSpeed }) / 10,
    };

    this.setAngle(0);

    console.log(this.speed);
  }

  /**
   * Updates asteroid state
   */
  update() {
    super.update();

    this.setAngle(this.angle + gameSettings.asteroids.angleChange);
  }
}
