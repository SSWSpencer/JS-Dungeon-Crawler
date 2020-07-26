export default class BadGuy{

    constructor(name, gameWidth, gameHeight, badguyImg, initXpos, initYpos){
        this.badguyImg = badguyImg;
        this.name = name

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.width = 25;
        this.height = 25;
        this.counter = 0;

        this.speedX = 4;
        this.speedY = 4;

        this.position = {
            x: initXpos,
            y: initXpos,
        }
    }

    draw(ctx) {
        ctx.drawImage(this.badguyImg, this.position.x, this.position.y, this.width, this.height)
    }
    
    chasePlayer(player){
        if(this.position.x > player.x){
            this.position.x -= this.speedX;
        }
        if(this.position.x < player.x){
            this.position.x += this.speedX;
        }
        if(this.position.y > player.y){
            this.position.y -= this.speedY;
        }
        if(this.position.y < player.y){
            this.position.y += this.speedY;
        }
        if(this.position.x < player.x + player.width && this.position.x + this.width > player.x && this.position.y < player.y + player.height && this.position.y + this.height > player.y){
            
        }
    }

    collisionDetection(others){
        for(let i = 0; i < others.length; i++){
            if(others[i].name != this.name){
                if(this.position.x < others[i].position.x + others[i].width && this.position.x + this.width > others[i].position.x && this.position.y < others[i].position.y + others[i].height && this.position.y + this.height > others[i].position.y){
                    others[i].speedY = -others[i].speedY
                    others[i].speedX = -others[i].speedX
                    this.speedY = -this.speedY
                    this.speedX = -this.speedX
                }
            }
        }
    }

    update(deltaTime, player, others) {
        this.chasePlayer(player);
        this.collisionDetection(others);
        

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