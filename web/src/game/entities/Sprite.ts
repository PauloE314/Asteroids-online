import gsap from 'gsap';
import { IDimensions, IPosition } from "..";

/**
 * Base class for sprites
 */
export default abstract class Sprite {
  public screen: IDimensions;
  public position: IPosition;
  public dimensions: IDimensions;
  public angle: number;
  public speed: {
    x: number;
    y: number;
  };

  public image: HTMLImageElement;

  constructor(
    ctx: CanvasRenderingContext2D,
    dimensions: IDimensions,
    screen: IDimensions,
    position?: IPosition
  ) {
    this.image = new Image();
    this.image.onload = () => this.draw(ctx);
    this.screen = screen;
    this.dimensions = dimensions;
    this.screen = screen;
    this.position = position || { x: 30, y: 30 };
    this.angle = 0;
    this.speed = { x: 0, y: 0 };
  }

  /**
   * Renders sprite
   */
  public render(ctx: CanvasRenderingContext2D) {
    this.draw(ctx);
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.save();

    ctx.translate(
      this.position.x + 0.5 * this.dimensions.w,
      this.position.y + 0.5 * this.dimensions.h
    );
    ctx.rotate(this.angle);

    ctx.drawImage(
      this.image,
      -this.dimensions.w / 2,
      -this.dimensions.h / 2,
      this.dimensions.w,
      this.dimensions.h
    );

    ctx.restore();
  }

  public update(dt: number) {
    gsap.to(this.position, {
      x: this.speed.x + this.position.x,
      y: this.speed.y + this.position.y,
    })
    this.position = {
      y: this.speed.y + this.position.y,
      x: this.speed.x + this.position.x,
    };

    // // left
    // if (this.position.x < 0 - this.dimensions.w - 1) {
    //   this.position.x = this.screen.w;
    // }

    // // right
    // else if (this.position.x > this.screen.w + 1) {
    //   this.position.x = 0 - this.dimensions.w;
    // }

    // // top
    // if (this.position.y < 0 - this.dimensions.h - 1) {
    //   this.position.y = this.screen.h;
    // }

    // // bottom
    // else if (this.position.y > this.screen.h + 1) {
    //   this.position.y = 0 - this.dimensions.h;
    // }
  }

  public setAngle(angle: number) {
    this.angle = angle % (2 * Math.PI);
  }
}
