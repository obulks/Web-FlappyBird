// 精灵的基类，负责初始化精灵加载的资源和大及位置
import {DataStore} from "./DataStore.js"

export class Sprite {
  constructor(img = null,
              sx = 0,
              sy = 0,
              sw = 0,
              sh = 0,
              dx = 0,
              dy = 0,
              dw = 0,
              dh = 0) {
    this.dataStore = DataStore.getInstance()
    this.ctx = this.dataStore.ctx
    this.img = img
    this.sx = sx
    this.sy = sy
    this.sw = sw
    this.sh = sh
    this.dx = dx
    this.dy = dy
    this.dw = dw
    this.dh = dh
  }

  static getImage() {
    return DataStore.getInstance().res
  }

  // img规定要使用的图像、画布
  // sx开始剪切的x坐标位置(图片从哪个x坐标开始剪)
  // sy开始剪切的y坐标位置(图片从哪个y坐标开始剪)
  // sw被剪切图像的宽度(图片要多宽)
  // sh被剪切图像的高度(图片要多高)
  // dx在画布上放置图像的x坐标位置(绘制在哪个x坐标)
  // dy在画布上放置图像的y坐标位置(绘制在哪个y坐标)
  // dw要使用的图像的宽度(绘制多宽)
  // dh要使用的图像的高度(绘制多高)
  draw(img = this.img,
       sx = this.sx,
       sy = this.sy,
       sw = this.sw,
       sh = this.sh,
       dx = this.dx,
       dy = this.dy,
       dw = this.dw,
       dh = this.dh) {
    this.ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
  }
}
