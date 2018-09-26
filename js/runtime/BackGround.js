// 背景
import {Sprite} from "../base/Sprite.js"

export class BackGround extends Sprite {
  constructor() {
    const image = Sprite.getImage()
    super(image,
      0,
      0,
      288,
      512,
      0,
      0,
      288,
      512)
  }
}