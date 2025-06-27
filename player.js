

export class Player{
    constructor(canvasWidth, canvasHeigth){
        this.image = new Image();
        this.image.src = 'hand.png';
        this.canvasWidth = canvasWidth;
        this.canvasHeigth = canvasHeigth;
        this.spriteWidth = 74;
        this.spriteHeight = 70;
        this.mouse = {
            x: 0,
            y: 0
        };
        this.x = this.mouse.x;
        this.y = this.mouse.y;
        this.minFrame = 0;
        this.maxFrame = 7;
        this.frameX = this.minFrame;
        this.gameFrame = 0;
        this.flag = false;
    };

    draw(context){
        context.drawImage(this.image, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.spriteWidth, this.spriteHeight);
    };


    update(){
        if(this.flag === true){
            if(this.frameX < this.maxFrame) {
                this.frameX++
            } else {
                this.frameX = this.minFrame;
                this.flag = false;
                this.gameFrame = 0;
            }
        }
        this.x = this.mouse.x - (this.spriteWidth/2);
        this.y = this.mouse.y - (this.spriteHeight/2);
    };
};