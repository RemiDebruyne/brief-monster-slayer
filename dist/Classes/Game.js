import { Player } from './Player.js';
import { Monster } from './Monster.js';
export class Game {
    constructor(player, monster) {
        this.player = player;
        this.monster = monster;
    }
    static newGame() {
        const player = new Player(100);
        const monster = new Monster(100);
        return new Game(player, monster);
    }
}
