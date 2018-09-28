// 导演类，控制游戏逻辑
import {DataStore} from "./base/DataStore.js"
import {UpPipe} from "./runtime/UpPipe.js"
import {DownPipe} from "./runtime/DownPipe.js"

export class Director {
  static getInstance() {
    if (!Director.instance) {
      Director.instance = new Director()
    }
    return Director.instance
  }

  constructor() {
    this.dataStore = DataStore.getInstance()
    this.moveSpeed = 2
  }

  createPipe() {
    const minTop = 512 / 8
    const maxTop = 512 / 2
    const top = minTop + Math.random() * (maxTop - minTop)
    this.dataStore.get('pipes').push(new UpPipe(top))
    this.dataStore.get('pipes').push(new DownPipe(top))
  }

  birdsEvent() {
    const birds = this.dataStore.get('birds')
    for (let i = 0; i <= 2; i++) {
      birds.birdsArr[i][5] = birds.birdsArr[i][5]
      birds.time = 0
    }
  }

  // 判断小鸟撞击水管
  static isStrike(bird, upPipe, downPipe) {
    let s = false
    if (bird.top > upPipe.bottom ||
      bird.bottom < downPipe.top ||
      bird.right < upPipe.left ||
      bird.right < downPipe.left ||
      bird.left > upPipe.right ||
      bird.left > downPipe.right) {
      s = true
    }
    return !s
    // console.log(pipe,top, pipe.right, pipe,bottom, pipe.left)
  }

  // 判断小鸟撞击陆地和水管
  check() {
    const birds = this.dataStore.get('birds').birdsArr[0]
    const land = this.dataStore.get('land')
    const pipes = this.dataStore.get('pipes')
    const score = this.dataStore.get('score')
    if (birds[5] + birds[3] >= land.dy) {
      this.isGameOver = true
      return
    }
    // 小鸟边框模型
    const birdsBorder = {
      top: birds[5],
      bottom: birds[5] + birds[3],
      left: birds[4],
      right: birds[4] + birds[2]
    }

    const length = pipes.length
    for (let i = 0; i < length; i++) {
      const pipe = pipes[i]
      let upPipeBorder = {}
      let downPipeBorder = {}
      if (i === 0 || i === 2) {
        // 上水管边框模型
        upPipeBorder = {
          top: 0,
          bottom: pipe.dy + pipe.dh,
          left: pipe.pipeX,
          right: pipe.pipeX + pipe.dw
        }
      } else {
        // 下水管边框模型
        downPipeBorder = {
          top: pipe.dy,
          bottom: pipe.dy + pipe.dh,
          left: pipe.pipeX,
          right: pipe.pipeX + pipe.dw
        }
      }
      if (Director.isStrike(birdsBorder, upPipeBorder, downPipeBorder)) {
        console.log('strike')
        // 小鸟撞击水管后继续下落
        // const birds = this.dataStore.get('birds')
        // birds.draw()
        this.isGameOver = true
      }
    }

    // 加分逻辑，在循环结束后编写
    // 加分结束后加分开关为false，需要在下次加分前改为true，115行
    if (birds[4] > pipes[0].pipeX + pipes[0].dw && score.isScore) {
      score.isScore = false
      score.scoreNumber++
    }
  }

  run() {
    this.check()
    if (!this.isGameOver) {
      this.dataStore.get('background').draw()
      const pipesArr = this.dataStore.get('pipes')
      if (pipesArr[0].pipeX <= -52 && pipesArr.length === 4) {
        pipesArr.shift()
        pipesArr.shift()
        // 在加分之前开启加分开关
        this.dataStore.get('score').isScore = true
      }
      if (pipesArr[0].pipeX <= (200 - pipesArr[0].sw) / 2 && pipesArr.length === 2) {
        this.createPipe()
      }
      this.dataStore.get('pipes').forEach(function (value, index, array) {
        value.draw()
      })
      this.dataStore.get('land').draw()
      this.dataStore.get('score').draw()
      this.dataStore.get('birds').draw()

      let timer = requestAnimationFrame(() => this.run())
      this.dataStore.put('timer', timer)
    } else {
      this.dataStore.get('startButton').draw()
      cancelAnimationFrame(this.dataStore.get('timer'))
      this.dataStore.destroy()
    }
  }

}