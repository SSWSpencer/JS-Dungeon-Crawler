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
let badguy1 = new BadGuy("badguy1", WIDTH, HEIGHT, badGuyImg, (Math.floor(Math.random() * 800) + 1), (Math.floor(Math.random() * 600) + 1));
let badguy2 = new BadGuy("badguy2",WIDTH, HEIGHT, badGuyImg, (Math.floor(Math.random() * 800) + 1), (Math.floor(Math.random() * 600) + 1));
let badguy3 = new BadGuy("badguy3",WIDTH, HEIGHT, badGuyImg, (Math.floor(Math.random() * 800) + 1), (Math.floor(Math.random() * 600) + 1));

const badGuys = [badguy1, badguy2, badguy3]
player.draw(ctx);

new InputHandler(player);


let lastTime = 0;

function gameLoop(timestamp) {
    let playerLoc = {
        x: player.position.x,
        y: player.position.y,
        width: player.width,
        height: player.height
    }
    let deltaTime = timestamp - lastTime
    lastTime = timestamp

    ctx.clearRect(0, 0, WIDTH, HEIGHT)
    player.update(deltaTime);
    player.draw(ctx);

    badguy1.update(deltaTime, playerLoc, badGuys);
    badguy1.draw(ctx);
    badguy2.update(deltaTime, playerLoc, badGuys);
    badguy2.draw(ctx);
    badguy3.update(deltaTime, playerLoc, badGuys);
    badguy3.draw(ctx);

    requestAnimationFrame(gameLoop)
}

requestAnimationFrame(gameLoop)