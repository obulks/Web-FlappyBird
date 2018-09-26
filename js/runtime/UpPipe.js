// 上半部分水管
import {Pipe} from "./Pipe.js"
import {Sprite} from "../base/Sprite.js"

export class UpPipe extends Pipe {
  constructor(top) {
    super(top)
  }

  draw() {
    this.dy = this.top - this.sh
    super.draw()
  }
}