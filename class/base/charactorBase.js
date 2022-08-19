/**
 * 全てのキャラクターのベースクラス
 */
export class CharactorBase {
  _positionX;
  _positionY;
  _directionX;
  _directionY;
  _moveSpeed;
  _health;

  constructor() {
    this._positionX = 0;
    this._positionY = 0;
    this._directionX = 0;
    this._directionY = 0;
    this._moveSpeed = 0;
    this._health = 0;
  }

  getPositionX() {
    return this._positionX;
  }
  getPositionY() {
    return this._positionY;
  }
  getDirectionX() {
    return this._directionX;
  }
  getDirectionY() {
    return this._directionY;
  }
  getMoveSpeed() {
    return this._moveSpeed;
  }
  getHealth() {
    return this._health;
  }

  setPositionX(x) {
    this._positionX = x;
  }
  setPositionY(y) {
    this._positionY = y;
  }
  setDirectionX(x) {
    this._directionX = x;
  }
  setDirectionY(y) {
    this._directionY = y;
  }
  setMoveSpeed(s) {
    this._moveSpeed = s;
  }
  setHealth(h) {
    this._health = h;
  }
}
