/**
 * 弾のベースクラス
 */
export class BulletBase {
  _position;
  _speed;
  _type;
  _direction;
  _damage;

  constructor() {
    this._position = 0;
    this._speed = 0;
    // マイナス→上方向への移動
    this._direction = -1;
    this._damage = 0;
  }
  getDamage() {
    return this._damage;
  }
}
