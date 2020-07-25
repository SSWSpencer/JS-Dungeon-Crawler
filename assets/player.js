export default class Player {
    constructor(gameWidth, gameHeight, playerImg) {
        this.playerImg = playerImg
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.width = 25;
        this.height = 25;

        this.maxSpeedX = 6;
        this.speedX = 0;
        this.maxSpeedY = 6;
        this.speedY = 0;

        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10,
        }
    }

    moveLeft() {
        this.speedX = -this.maxSpeedX;
    }

    moveRight(){
        this.speedX = this.maxSpeedX;
    }

    moveUp() {
        this.speedY = -this.maxSpeedY;
    }

    moveDown() {
        this.speedY = this.maxSpeedY;
    }
    stopX() {
        this.speedX = 0;
    }
    stopY() {
        this.speedY = 0;
    }


    draw(ctx) {
        ctx.fillStyle = "blue"
        ctx.drawImage(this.playerImg, this.position.x, this.position.y, this.width, this.height)
    }

    update(deltaTime) {
        this.position.x += this.speedX;
        this.position.y += this.speedY;

        if (this.position.x < 0){
            this.position.x = 0;
        }
        if (this.position.y < 0){
            this.position.y = 0;
        }
        if (this.position.x + this.width > this.gameWidth){
            this.position.x = this.gameWidth - this.width;
        }
        if (this.position.y + this.height > this.gameHeight){
            this.position.y = this.gameHeight - this.height;
        }
    }
}