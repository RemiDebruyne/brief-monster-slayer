import { Random } from '../Utils/Random.js';
export class Entity {
    constructor(hp) {
        this.hp = hp;
    }
    // attack can be static since there can only be one player and player have no stats that can influence the outcome. If a stat such as force would influence the outcome, then attack can't be static and would need a player pass as an argument
    /**
     * @return the dmg done */
    // static attack(target: Entity, min: number, max: number): number {
    //   const damage = Random.rnd(min, max);
    //   const newTargetHp = target.hp - damage;
    //   return newTargetHp <= 0 ? 0 : newTargetHp;
    // }
    static attack(min, max) {
        return Random.rnd(min, max);
    }
}
