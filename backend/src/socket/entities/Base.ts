import { IPosition, ISpeed } from "./Game";

/**
 * Base game entity
 */
export default abstract class Base {
  position: IPosition;
  speed: ISpeed;
  angle: number;

  constructor() {
    this.position = { x: 5, y: 5 };
    this.speed = { x: 0, y: 0 };
  }

  /**
   * Updates position
   */
  update() {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // Handles x overflow
    if (this.position.x + 0.5 < 0) {
      this.position.x = 10;
    } else if (this.position.x > 10) {
      this.position.x = 0;
    }

    // Handles y overflow
    if (this.position.y + 0.5 < 0) {
      this.position.y = 10;
    } else if (this.position.y > 10) {
      this.position.y = 0;
    }
  }

  /**
   * Set angle
   */
  setAngle(angle: number) {
    this.angle = angle % (2 * Math.PI);
  }
}
