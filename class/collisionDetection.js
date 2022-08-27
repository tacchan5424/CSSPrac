/**
 * 当たり判定用クラス
 */
export class CollisionDetection {
  #centerX;
  #centerY;
  #radius;

  // 中心位置はその時によって変化するため一旦0で初期化
  constructor(radius) {
    this.#centerX = 0;
    this.#centerY = 0;
    this.#radius = radius;
  }

  getCenterX() {
    return this.#centerX;
  }
  getCenterY() {
    return this.#centerY;
  }
  getRadius() {
    return this.#radius;
  }

  calcCenter(coodinate) {
    this.#centerX = coodinate.left + (coodinate.right - coodinate.left) / 2;
    this.#centerY = coodinate.top + (coodinate.bottom - coodinate.top) / 2;
  }

  // 対象同士があたったかどうかをチェックする。
  // 他エンティティを引数として使っているためgetterを使わざるを得なくなっている
  isHit(object) {
    const distanceBetweenCenters = this.calcDistance(object);
    // あたっている場合、中心同士の距離よりも半径の和の方が大きくなる
    return distanceBetweenCenters < this.#radius + object.getRadius();
  }

  calcDistance(object) {
    return Math.sqrt(
      Math.pow(this.#centerX - object.getCenterX(), 2) +
        Math.pow(this.#centerY - object.getCenterY(), 2)
    );
  }
}
