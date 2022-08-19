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

  setCenterX(x) {
    this.#centerX = x;
  }
  setCenterY(y) {
    this.#centerY = y;
  }

  // objectにはツインビーか弾が入る
  isHit(object, enemy) {
    const distanceBetweenCenters = this.calcDistance(object, enemy);
    // あたっている場合、中心同士の距離よりも半径の和の方が大きくなる
    return distanceBetweenCenters < object.getRadius() + enemy.getRadius();
  }

  // objectにはツインビーか弾が入る
  calcDistance(object, enemy) {
    return Math.sqrt(
      Math.pow(object.getCenterX() - enemy.getCenterX(), 2) +
        Math.pow(object.getCenterY() - enemy.getCenterY(), 2)
    );
  }
}
