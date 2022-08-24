import { CharactorBase } from "./base/charactorBase.js";

/**
 * 敵用クラス
 * ボス、ボスの周りの玉に使用
 */
export class Enemy extends CharactorBase {
  #damage;
  constructor(h, s, d) {
    super();
    this._health = h;
    this._moveSpeed = s;
    this._topMargin = 30;
    this._bottomMargin = 85;
    this._leftMargin = 30;
    this._rightMargin = 85;
    this.#damage = d;
  }

  getDamage() {
    return this.#damage;
  }
}
