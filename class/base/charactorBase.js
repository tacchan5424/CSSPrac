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
  _topMargin;
  _bottomMargin;
  _leftMargin;
  _rightMargin;

  constructor() {
    this._positionX = 0;
    this._positionY = 0;
    this._directionX = 0;
    this._directionY = 0;
    this._moveSpeed = 0;
    this._health = 0;
    this._topMargin = 0;
    this._bottomMargin = 0;
    this._leftMargin = 0;
    this._rightMargin = 0;
  }
  getDirectionX() {
    return this._directionX;
  }
  getDirectionY() {
    return this._directionY;
  }

  setDirectionX(x) {
    this._directionX = x;
  }
  setDirectionY(y) {
    this._directionY = y;
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
  canMove(fieldCoordinate) {
    // 画面上に来た時に、上方向以外には動ける
    if (
      this._positionY - this._topMargin < fieldCoordinate.top &&
      this._directionY === -1
    )
      return false;
    // 画面下に来た時に、下方向以外には動ける
    if (
      this._positionY + this._bottomMargin > fieldCoordinate.bottom &&
      this._directionY === 1
    )
      return false;
    // 画面左に来た時に、左方向以外には動ける
    if (
      this._positionX - this._leftMargin < fieldCoordinate.left &&
      this._directionX === -1
    )
      return false;
    // 画面右に来た時に、右方向以外には動ける
    if (
      this._positionX + this._rightMargin > fieldCoordinate.right &&
      this._directionX === 1
    )
      return false;

    return true;
  }

  isDead(element) {
    if (this._health <= 0) {
      Object.assign(element.style, {
        display: "none",
      });
    }
  }

  // getterありきの処理
  takeDamage(damage) {
    this._health = this._health - damage;
  }

  move(element) {
    this._positionX = this._positionX + this._directionX * this._moveSpeed;
    this._positionY = this._positionY + this._directionY * this._moveSpeed;
    Object.assign(element.style, {
      left: `${this._positionX}px`,
      top: `${this._positionY}px`,
    });
  }

  changeAnimation(element, animation) {
    Object.assign(element.style, {
      animation: animation,
    });
  }

  reverseDierction() {
    this._directionX = -this._directionX;
    this._directionY = -this._directionY;
  }
}
