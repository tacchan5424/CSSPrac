import { CharactorBase } from "./base/charactorBase.js";

export class Twinbee extends CharactorBase {
  constructor() {
    super();
    this._positionX = 925;
    this._positionY = 500;
    this._directionX = 0;
    this._directionY = 0;
    this._moveSpeed = 10;
    this._health = 4;
  }
}
