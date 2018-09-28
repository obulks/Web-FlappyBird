import {Sprite} from "../base/Sprite.js"
import {Director} from "../Director.js"

export class Pipe extends Sprite {
  constructor(img, sx, sy, sw, sh, dx, dy, dw, dh, top) {
    super(img, sx, sy, sw, sh, dx, dy, dw, dh)
    this.top = top
    this.pipeX = 288
    this.pipeSpeed = Director.getInstance().moveSpeed
  }

  draw() {
    this.pipeX = this.pipeX - this.pipeSpeed
    super.draw(this.img,
      this.sx,
      this.sy,
      this.sw,
      this.sh,
      this.pipeX,
      this.dy,
      this.dw,
      this.dh)
  }
}