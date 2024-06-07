import { Game } from './Classes/Game';
import { Player } from './Classes/Player';
import { Monster } from './Classes/Monster';
import { Entity } from './Classes/Entity';

var a = 5;
const startButton = document.querySelector('.start-button');
const attackButton = document.querySelector('.attack-button');
const attackSpButton = document.querySelector('.attackSP-button');
const healButton = document.querySelector('.heal-button');
const giveUpButton = document.querySelector('.giveUp-button');
const gameButtons: NodeListOf<Element> = document.querySelectorAll(
  '[data-game-has-started]'
);

let game: Game;
let player: Player;
let monster: Monster;
const playerHpElement = document.getElementById('player-hp')!;
const monsterHpElement = document.getElementById('monster-hp')!;

startButton?.addEventListener('click', () => {
  startButton.classList.add('hidden');

  for (let i = 0; i < gameButtons.length; i++) {
    gameButtons[i].classList.remove('hidden');
  }
  game = Game.newGame();
  player = game.player;
  monster = game.monster;
  return game;
});

// Could be refactored
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
