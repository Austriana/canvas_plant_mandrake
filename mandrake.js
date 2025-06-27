

export class Mandrake{

    constructor(canvasWidth, canvasHeigth, player){
        this.player = player;
        this.image = new Image();
        this.image.src = 'mandrake.png';
        this.canvasWidth = canvasWidth;
        this.canvasHeigth = canvasHeigth;
        this.spriteWidth = 256;
        this.spriteHeight = 256;
        this.x = this.player.x - (this.spriteWidth * 0.40);
        this.y = this.player.y - (this.spriteHeight * 0.75);
        this.minFrame = 0;
        this.maxFrame = 355;
        this.frame = 0;
        this.frameX = 0;
        this.frameY = 0;
    }
    
    draw(context){
        context.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, 
            this.spriteWidth, this.spriteHeight, this.x, this.y, this.spriteWidth, 
            this.spriteHeight);
    };

    update(){
        if(this.frame < this.maxFrame) this.frame++;
        else {
            this.frame = this.minFrame};
        this.frameX = this.frame % 18;
        this.frameY = Math.floor(this.frame / 18);
    };
};