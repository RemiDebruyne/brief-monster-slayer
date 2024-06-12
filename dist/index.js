import { Game } from './Classes/Game.js';
import { Player } from './Classes/Player.js';
import { Monster } from './Classes/Monster.js';
import { renderHp, renderLogs } from './Utils/Helper.js';
const startButton = document.querySelector('.start-button');
const attackButton = document.querySelector('.attack-button');
const attackSpButton = document.querySelector('.attackSP-button');
const healButton = document.querySelector('.heal-button');
const giveUpButton = document.querySelector('.giveUp-button');
const gameButtons = document.querySelectorAll('[data-game-has-started]');
const playerHpElement = document.getElementById('player-hp');
const monsterHpElement = document.getElementById('monster-hp');
const logsWrapper = document.querySelector('.logs-wrapper');
const entities = Array.from(document.querySelectorAll('[id$=-hp]'));
let game;
let player;
let monster;
let playAgain;
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
    renderHp(entities, [player.hp, monster.hp]);
    renderLogs(logsWrapper, 'player', 'attack', damageDoneByPlayer);
    renderLogs(logsWrapper, 'monster', 'hit', damageDoneByMonster);
    // logsWrapper.insertAdjacentHTML(
    //   'afterbegin',
    //   `<p class="player-log">Player attacks the monster for ${damageDoneByPlayer} </p>`
    // );
    // logsWrapper.insertAdjacentHTML(
    //   'afterbegin',
    //   `<p class="monster-log">Monster attacks the player for ${damageDoneByMonster} </p>`
    // );
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
    renderHp(entities, [player.hp, monster.hp]);
    renderLogs(logsWrapper, 'player', 'attack', damageDoneByPlayer);
    renderLogs(logsWrapper, 'monster', 'hit', damageDoneByMonster);
});
healButton?.addEventListener('click', () => {
    player.hp = player.heal();
    const damageDoneByMonster = Monster.attack(5, 10);
    player.hp -= damageDoneByMonster;
    if (player.hp <= 0) {
        player.hp = 0;
    }
    renderHp(entities, [player.hp, monster.hp]);
    renderLogs(logsWrapper, 'player', 'attack', 10);
    renderLogs(logsWrapper, 'monster', 'hit', damageDoneByMonster);
});
giveUpButton?.addEventListener('click', () => {
    const playAgain = confirm('You fleed the battle... Would you like to play again ?');
    if (playAgain) {
        game = Game.newGame();
        player = game.player;
        monster = game.monster;
    }
    renderHp(entities, [player.hp, monster.hp]);
});
for (const button of gameButtons) {
    button.addEventListener('click', () => {
        if (playerHpElement.innerHTML === '0' ||
            monsterHpElement.innerHTML === '0') {
            playerHpElement.innerHTML > '0'
                ? (playAgain = confirm('Congratulations, you won! Would you like to play again ?'))
                : (playAgain = confirm('You lost... Would you like to try again ?'));
            if (playAgain) {
                game = Game.newGame();
                player = game.player;
                monster = game.monster;
            }
            renderHp(entities, [player.hp, monster.hp]);
        }
    });
}
