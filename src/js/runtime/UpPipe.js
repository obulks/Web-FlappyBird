// 上半部分水管
import {Pipe} from "./Pipe.js"
import {Sprite} from "../base/Sprite.js"

export class UpPipe extends Pipe {
  constructor(top) {
    const image = Sprite.getImage()
    super(image,
      576,
      192,
      52,
      320,
      0,
      0,
      52,
      320,
      top)
  }

  draw() {
    this.dy = this.top - this.sh
    // super.draw()
    super.draw(this.img,
      this.sx,
      this.sy,
      this.sw,
      this.sh,
      this.dx,
      this.dy,
      this.dw,
      this.dh,
    )
  }
}