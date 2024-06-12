import { Entity } from './Entity.js';
export class Player extends Entity {
    /**
     * @returns the player's hp after healing */
    heal() {
        this.hp += 10;
        return this.hp > 100 ? 100 : this.hp;
    }
}
