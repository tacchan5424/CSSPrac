import { BulletBase } from "./base/bulletBase.js";

export class Bullet extends BulletBase {
  constructor() {
    super();
    this._speed = 40;
    this._damage = 1;
  }

  move(bulletElement, isAttack) {
    this._position = this._position + this._direction * this._speed * isAttack;
    Object.assign(bulletElement.style, {
      top: `${this._position}px`,
    });
  }

  initPositionWhenOverField(bulletElement) {
    if (parseInt(bulletElement.style.top) < -1000) {
      this._position = 0;
    }
  }
  initPosition() {
    this._position = 0;
  }
}
