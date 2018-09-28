// 小鸟类
// 循环渲染三只小鸟，产生小鸟飞翔动画效果
import {Sprite} from "../base/Sprite.js"

export class Birds extends Sprite {
  constructor() {
    const image = Sprite.getImage()
    super(image, 0, 0, 36, 26, 0, 0, 36, 26)
    this.index = 0
    this.count = 0
    this.time = 0
    this.birdsArr = [
      [929, 11, 36, 26, 288 / 3, 512 / 2, 36, 26],
      [987, 11, 36, 26, 288 / 3, 512 / 2, 36, 26],
      [1045, 11, 36, 26, 288 / 3, 512 / 2, 36, 26]
    ]
  }

  draw() {
    const speed = 0.2
    this.count = this.count + speed
    if (this.index >= 2) {
      this.count = 0
    }
    // 减速器，小数取整，使不同小鸟切换的间隔变长
    this.index = Math.floor(this.count)

    // 重力加速度
    const g = 0.98 / 30

    // 向上偏移量
    const offsetUp = 24
    // 小鸟位移
    const offsetY = (g * this.time * (this.time - offsetUp)) / 2
    for (let i = 0; i <= 2; i++) {
      this.birdsArr[i][5] += offsetY
    }
    super.draw(this.img, ...this.birdsArr[this.index])
    this.time += 0.74
  }
}