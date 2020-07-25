export default class BadGuy{

    constructor(gameWidth, gameHeight, badguyImg, initXpos, initYpos){
        this.badguyImg = badguyImg;

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.width = 25;
        this.height = 25;

        this.speedX = 6.5;
        this.speedY = 6.5;

        this.position = {
            x: initXpos,
            y: initXpos,
        }
    }

    draw(ctx) {
        ctx.drawImage(this.badguyImg, this.position.x, this.position.y, this.width, this.height)
    }

    update(deltaTime) {
        this.position.x += this.speedX;
        this.position.y += this.speedY;

        if (this.position.x < 0){
            this.position.x = 0;
            this.speedX = -this.speedX;
        }
        if (this.position.y < 0){
            this.position.y = 0;
            this.speedY = -this.speedY;
        }
        if (this.position.x + this.width > this.gameWidth){
            this.position.x = this.gameWidth - this.width;
            this.speedX = -this.speedX;
        }
        if (this.position.y + this.height > this.gameHeight){
            this.position.y = this.gameHeight - this.height;
            this.speedY = -this.speedY;
        }

    }
}