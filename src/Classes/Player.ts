import { Entity } from './Entity';

export class Player extends Entity {
  /**
   *
   * @returns the player's hp after healing
   */
  heal(): number {
    this.hp += 10;
    return this.hp > 100 ? 100 : this.hp;
  }
}
