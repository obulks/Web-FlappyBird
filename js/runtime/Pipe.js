import {Sprite} from "../base/Sprite.js"
import {Director} from "../Director.js"

export class Pipe extends Sprite {
  constructor(top) {
    const image = Sprite.getImage()
    super(image,
      0,
      0,
      52,
      320,
      512,
      0,
      52,
      320)
    this.top = top
    this.pipeX = 0
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