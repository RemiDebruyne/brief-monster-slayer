import { Game } from './Classes/Game';
import { Player } from './Classes/Player';
import { Monster } from './Classes/Monster';

const startButton = document.querySelector('.start-button');
const attackButton = document.querySelector('.attack-button');
const attackSpButton = document.querySelector('.attackSP-button');
const healButton = document.querySelector('.heal-button');
const giveUpButton = document.querySelector('.giveUp-button');
const gameButtons = document.querySelectorAll('[data-game-has-started]');

let game: Game;
let player: Player;
let monster: Monster;
const playerHpElement = document.getElementById('player-hp')!;
const monsterHpElement = document.getElementById('monster-hp')!;

startButton?.addEventListener('click', () => {
  startButton.classList.add('hidden');

  for (const button of gameButtons) {
    button.classList.remove('hidden');
  }
  game = Game.newGame();
  player = game.player;
  monster = game.monster;
  return game;
});

// Could be refactored => attack and attackSP have the same code with different value
attackButton?.addEventListener('click', () => {
  monster.hp = Player.attack(monster, 3, 10);
  player.hp = Monster.attack(player, 5, 10);
  playerHpElement.innerHTML = String(player.hp);
  monsterHpElement.innerHTML = String(monster.hp);
});

attackSpButton?.addEventListener('click', () => {
  monster.hp = Player.attack(monster, 10, 20);
  player.hp = Monster.attack(player, 5, 10);
  playerHpElement.innerHTML = String(player.hp);
  monsterHpElement.innerHTML = String(monster.hp);
});

healButton?.addEventListener('click', () => player.heal());

giveUpButton?.addEventListener('click', () => {
  game.isLost = true;
});
