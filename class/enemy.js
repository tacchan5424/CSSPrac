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
    this.#damage = d;
  }

  getDamage() {
    return this.#damage;
  }
}
