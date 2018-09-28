// 初始化整个游戏的精灵，游戏开始的入口
import {Director} from "./js/Director.js"
import {BackGround} from "./js/runtime/BackGround.js"
import {DataStore} from "./js/base/DataStore.js"
import {Land} from "./js/runtime/Land.js"
import {Birds} from "./js/player/Birds.js"
import {StartButton} from "./js/player/StartButton.js"

export class Main {
  constructor() {
    this.canvas = document.getElementById('game_canvas')
    this.ctx = this.canvas.getContext('2d')
    this.dataStore = DataStore.getInstance()
    this.director = Director.getInstance()
    this.source = new Image()
    this.source.src = './assets/img/source.png'
    this.source.onload = this.init()
  }

  init() {
    this.dataStore.canvas = this.canvas
    this.dataStore.ctx = this.ctx
    this.dataStore.res = this.source
    this.director.isGameOver = false
    this.dataStore
      .put('pipes', [])
      .put('background', BackGround)
      .put('land', Land)
      .put('birds', Birds)
      .put('startButton', StartButton)
    this.registerEvent()
    // 在游戏运行之前要创建好水管
    this.director.createPipe()
    this.director.run()
  }

  registerEvent() {
    this.canvas.addEventListener('touchstart', e => {
      // 屏蔽事件冒泡
      e.preventDefault()
      if (this.director.isGameOver) {
        this.init()
      } else {
        this.director.birdsEvent()
      }
    })
  }
}