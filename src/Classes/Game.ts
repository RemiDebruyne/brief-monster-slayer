import { Player } from './Player';
import { Monster } from './Monster';

export class Game {
  player: Player;

  monster: Monster;

  isLost: Boolean = false;

  constructor(player: Player, monster: Monster) {
    this.player = player;
    this.monster = monster;
  }

  static newGame(): Game {
    const player = new Player(100);
    const monster = new Monster(100);
    return new Game(player, monster);
  }
}
