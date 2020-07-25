import Player from './assets/player.js';
import BadGuy from './assets/badguy.js';
import InputHandler from "./assets/input.js";



let playerImg = document.getElementById("player")
let badGuyImg = document.getElementById("badguy")

let canvas = document.getElementById("gameBoard");
let ctx = canvas.getContext("2d");

const WIDTH = 800;
const HEIGHT = 600;

ctx.clearRect(0,0, WIDTH, HEIGHT)

let player = new Player(WIDTH, HEIGHT, playerImg);
let badguy1 = new BadGuy(WIDTH, HEIGHT, badGuyImg, (Math.floor(Math.random() * 800) + 1), (Math.floor(Math.random() * 600) + 1));
let badguy2 = new BadGuy(WIDTH, HEIGHT, badGuyImg, (Math.floor(Math.random() * 800) + 1), (Math.floor(Math.random() * 600) + 1));
let badguy3 = new BadGuy(WIDTH, HEIGHT, badGuyImg, (Math.floor(Math.random() * 800) + 1), (Math.floor(Math.random() * 600) + 1));

player.draw(ctx);

new InputHandler(player);


let lastTime = 0;

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime
    lastTime = timestamp

    ctx.clearRect(0, 0, WIDTH, HEIGHT)
    player.update(deltaTime);
    player.draw(ctx);

    badguy1.update(deltaTime);
    badguy1.draw(ctx);
    badguy2.update(deltaTime);
    badguy2.draw(ctx);
    badguy3.update(deltaTime);
    badguy3.draw(ctx);

    requestAnimationFrame(gameLoop)
}

requestAnimationFrame(gameLoop)