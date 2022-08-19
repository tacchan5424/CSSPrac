/**
 * キー操作用クラス
 */
export class Key {
  #xArrowLeft;
  #xArrowRight;
  #yArrowLeft;
  #yArrowRight;
  #moveXKey;
  #moveYKey;
  #attackKey;

  constructor() {
    this.#xArrowLeft = -1;
    this.#xArrowRight = 1;
    this.#yArrowLeft = -1;
    this.#yArrowRight = 1;
    this.#moveXKey = ["ArrowLeft", "ArrowRight"];
    this.#moveYKey = ["ArrowUp", "ArrowDown"];
    this.#attackKey = ["a", "A"];
  }

  getXArrowLeft() {
    return this.#xArrowLeft;
  }
  getXArrowRight() {
    return this.#xArrowRight;
  }
  getYArrowLeft() {
    return this.#yArrowLeft;
  }
  getYArrowRight() {
    return this.#yArrowRight;
  }
  getMoveXKey() {
    return this.#moveXKey;
  }
  getMoveYKey() {
    return this.#moveYKey;
  }
  getAttackKey() {
    return this.#attackKey;
  }

  setXArrowLeft(xLeft) {
    this.#xArrowLeft = xLeft;
  }
  setXArrowRight(xRight) {
    this.#xArrowRight = xRight;
  }
  setYArrowLeft(yLeft) {
    this.#yArrowLeft = yLeft;
  }
  setYArrowRight(yRight) {
    this.#yArrowRight = yRight;
  }

  isMoveX(pushedKey) {
    return this.getMoveXKey().includes(pushedKey);
  }
  isMoveY(pushedKey) {
    return this.getMoveYKey().includes(pushedKey);
  }
  isAttack(pushedKey) {
    return this.getAttackKey().includes(pushedKey);
  }

  whichMoveX(pushedKey) {
    if (this.getMoveXKey()[0] === pushedKey) return this.getXArrowLeft();
    return this.getXArrowRight();
  }
  whichMoveY(pushedKey) {
    if (this.getMoveYKey()[0] === pushedKey) return this.getYArrowLeft();
    return this.getYArrowRight();
  }
}
