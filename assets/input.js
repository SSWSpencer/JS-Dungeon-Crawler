export default class InputHandler{
    constructor(player) {
        document.addEventListener('keydown', (event) => {
            switch(event.keyCode){
                case 37:
                    player.moveLeft();
                    break;
                
                case 39:
                    player.moveRight();
                    break;
                
                case 38:
                    player.moveUp();
                    break;
                
                case 40:
                    player.moveDown();
                    break;
            }
        })
        document.addEventListener('keyup', (event) => {
            switch(event.keyCode){
                case 37:
                    if(player.speedX < 0){
                        player.stopX();
                    }
                    break;
                
                case 39:
                    if(player.speedX > 0){
                        player.stopX();
                    }
                    break;
                
                case 38:
                    if(player.speedY < 0){
                        player.stopY();
                    }
                    break;
                
                case 40:
                    if(player.speedY > 0){
                        player.stopY();
                    }
                    break;
            }
        })
    }

}

// left = 37, right = 39, up = 38, down = 40