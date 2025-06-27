

export class Player{
    constructor(canvasWidth, canvasHeigth){
        this.image = new Image();
        this.image.src = '';
        this.canvasWidth = canvasWidth;
        this.canvasHeigth = canvasHeigth;
        this.spriteWidth = 100;
        this.spriteHeight = 100;
        this.mouse = {
            x: this.spriteWidth/2,
            y: this.spriteHeight/2
        };
        this.x = this.mouse.x;
        this.y = this.mouse.y;
    };

    draw(context){
        context.fillRect(this.x, this.y, this.spriteWidth, this.spriteHeight);
    };

    update(){
        this.x = this.mouse.x - this.spriteWidth/2;
        this.y = this.mouse.y - this.spriteHeight/2;
    };
};