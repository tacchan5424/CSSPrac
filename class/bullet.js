import { BulletBase } from "./base/bulletBase.js";

export class Bullet extends BulletBase {
  constructor() {
    super();
    this._speed = 40;
    this._damage = 1;
  }
}
