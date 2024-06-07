class Game {
  player: Player;

  monster: Monster;

  isLost: Boolean;

  constructor(player: Player, monster: Monster) {
    this.player = player;
    this.monster = monster;
  }

  static newGame(): Game {
    const player = new Player();
    const monster = new Monster();
    return new Game(player, monster);
  }
}
