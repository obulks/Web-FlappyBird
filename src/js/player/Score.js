// 计分器类
import {DataStore} from "../base/DataStore.js"

export class Score {
  constructor() {
    this.ctx = DataStore.getInstance().ctx
    this.scoreNumber = 0;
    // canvas刷新频率快，需要一个加分开关控制加分，只加一次
    this.isScore = true
  }

  draw() {
    this.ctx.font = '28px Arial'
    this.ctx.fillStyle = '#ffffff'
    this.ctx.fillText(
      this.scoreNumber,
      288/2,
      512/16,
      1000
    )
  }
}