// 开始按钮类
import {Sprite} from "../base/Sprite.js"

export class StartButton extends Sprite {
  constructor() {
    const image = Sprite.getImage()
    super(image,
      944,
      136,
      116,
      70,
      288/2-116/2,
      512/2-70/2,
      116,
      70)
  }
}