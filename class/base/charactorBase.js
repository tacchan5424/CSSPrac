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

  // 以下リファクタリング中
  initDirectionX() {
    this._directionX = 0;
  }
  initDirectionY() {
    this._directionY = 0;
  }

  /**
   *
   * @param {*} fieldCoordinate
   * @param {*} topMargin
   * @param {*} bottomMargin
   * @param {*} leftMargin
   * @param {*} rightMargin
   * @returns
   */
  canMove(fieldCoordinate, topMargin, bottomMargin, leftMargin, rightMargin) {
    // 画面上に来た時に、上方向以外には動ける
    if (
      this._positionY - topMargin < fieldCoordinate.top &&
      this._directionY === -1
    )
      return false;
    // 画面下に来た時に、下方向以外には動ける
    if (
      this._positionY + bottomMargin > fieldCoordinate.bottom &&
      this._directionY === 1
    )
      return false;
    // 画面左に来た時に、左方向以外には動ける
    if (
      this._positionX - leftMargin < fieldCoordinate.left &&
      this._directionX === -1
    )
      return false;
    // 画面右に来た時に、右方向以外には動ける
    if (
      this._positionX + rightMargin > fieldCoordinate.right &&
      this._directionX === 1
    )
      return false;

    return true;
  }
}
