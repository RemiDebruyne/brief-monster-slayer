import { Game } from './Classes/Game.js';
import { Player } from './Classes/Player.js';
import { Monster } from './Classes/Monster.js';

const startButton = document.querySelector('.start-button');
const attackButton = document.querySelector('.attack-button');
const attackSpButton = document.querySelector('.attackSP-button');
const healButton = document.querySelector('.heal-button');
const giveUpButton = document.querySelector('.giveUp-button');
const gameButtons = document.querySelectorAll('[data-game-has-started]');
const playerHpElement = document.getElementById('player-hp')!;
const monsterHpElement = document.getElementById('monster-hp')!;
const logsWrapper = document.querySelector('.logs-wrapper')!;

let game: Game;
let player: Player;
let monster: Monster;

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
  const damageDoneByPlayer = Player.attack(3, 10);
  monster.hp -= damageDoneByPlayer;
  if (monster.hp <= 0) {
    monster.hp = 0;
  }

  const damageDoneByMonster = Monster.attack(5, 10);
  player.hp -= damageDoneByMonster;

  if (player.hp <= 0) {
    player.hp = 0;
  }

  playerHpElement.innerHTML = String(player.hp);
  playerHpElement.style.width = `${player.hp}%`;

  monsterHpElement.innerHTML = String(monster.hp);
  monsterHpElement.style.width = `${monster.hp}%`;

  logsWrapper.insertAdjacentHTML(
    'afterbegin',
    `<p>Player attacks the monster for ${damageDoneByPlayer} </p>`
  );
  logsWrapper.insertAdjacentHTML(
    'afterbegin',
    `<p>Monster attacks the player for ${damageDoneByMonster} </p>`
  );
});

attackSpButton?.addEventListener('click', () => {
  const damageDoneByPlayer = Player.attack(10, 20);
  monster.hp -= damageDoneByPlayer;
  if (monster.hp <= 0) {
    monster.hp = 0;
  }

  const damageDoneByMonster = Monster.attack(5, 10);
  player.hp -= damageDoneByMonster;

  if (player.hp <= 0) {
    player.hp = 0;
  }

  playerHpElement.innerHTML = String(player.hp);
  playerHpElement.style.width = `${player.hp}%`;

  monsterHpElement.innerHTML = String(monster.hp);
  monsterHpElement.style.width = `${monster.hp}%`;

  logsWrapper.insertAdjacentHTML(
    'afterbegin',
    `<p>Player attacks the monster for ${damageDoneByPlayer} </p>`
  );
  logsWrapper.insertAdjacentHTML(
    'afterbegin',
    `<p>Monster attacks the player for ${damageDoneByMonster} </p>`
  );
});

healButton?.addEventListener('click', () => {
  player.hp = player.heal();
  const damageDoneByMonster = Monster.attack(5, 10);
  player.hp -= damageDoneByMonster;

  if (player.hp <= 0) {
    player.hp = 0;
  }

  playerHpElement.innerHTML = String(player.hp);
  playerHpElement.style.width = `${player.hp}%`;

  monsterHpElement.innerHTML = String(monster.hp);
  monsterHpElement.style.width = `${monster.hp}%`;

  logsWrapper.insertAdjacentHTML('afterbegin', `<p>Player heals for 10 </p>`);
  logsWrapper.insertAdjacentHTML(
    'afterbegin',
    `<p>Monster attacks the player for ${damageDoneByMonster} </p>`
  );
});

giveUpButton?.addEventListener('click', () => {
  game.isLost = true;
  const playAgain = confirm(
    'You fleed the battle... Would you like to play again ?'
  );

  if (playAgain) {
    game = Game.newGame();
    player = game.player;
    monster = game.monster;
  }
  playerHpElement.innerHTML = String(player.hp);
  playerHpElement.style.width = `${player.hp}%`;

  monsterHpElement.innerHTML = String(monster.hp);
  monsterHpElement.style.width = `${monster.hp}%`;
});
