// 陆地类
import {Sprite} from "../base/Sprite.js"
import {Director} from "../Director.js"

export class Land extends Sprite {
  constructor() {
    const image = Sprite.getImage()
    super(image,
      696,
      400,
      336,
      112,
      0,
      400,
      336,
      112)
    // 陆地水平变化坐标
    this.landX = 0
    // 陆地移动速度
    this.landSpeed = Director.getInstance().moveSpeed
  }

  draw() {
    this.landX = this.landX + this.landSpeed
    if(this.landX > (this.sw-288)) {
      this.landX = 0
    }
    super.draw(this.img,
      this.sx,
      this.sy,
      this.sw,
      this.sh,
      -this.landX,
      this.dy,
      this.dw,
      this.dh)
  }
}