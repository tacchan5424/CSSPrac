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
    this._topMargin = 30;
    this._bottomMargin = 85;
    this._leftMargin = 30;
    this._rightMargin = 85;
  }

  move(charElement) {
    this._positionX = this._positionX + this._directionX * this._moveSpeed;
    this._positionY = this._positionY + this._directionY * this._moveSpeed;
    Object.assign(charElement.style, {
      left: `${this._positionX}px`,
      top: `${this._positionY}px`,
    });
  }
}
