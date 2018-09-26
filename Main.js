// 初始化整个游戏的精灵，游戏开始的入口
import {Director} from "./js/Director.js"
import {BackGround} from "./js/runtime/BackGround.js"
import {DataStore} from "./js/base/DataStore.js"
import {Land} from "./js/runtime/Land.js"

export class Main {
  constructor() {
    this.canvas = document.getElementById('game_canvas')
    this.ctx = this.canvas.getContext('2d')
    this.dataStore = DataStore.getInstance()
    this.director = Director.getInstance()
    this.source = new Image()
    this.source.src = './assets/img/source.png'
    this.init()
  }

  init() {
    this.source.onload = () => {
      this.dataStore.ctx = this.ctx
      this.dataStore.res = this.source
      this.dataStore
        .put('background', BackGround)
        .put('pipes', [])
        .put('land', Land)
      this.director.run()
    }
  }
}