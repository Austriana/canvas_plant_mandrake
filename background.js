

export class Background{
    constructor(canvasWidth, canvasHeigth){
        this.image = new Image();
        this.image.src = 'background.avif';
        this.canvasWidth = canvasWidth;
        this.canvasHeigth = canvasHeigth;
        this.width = this.canvasWidth;
        this.height = this.canvasHeigth;
        this.x = 0;
        this.y = 0;
    }
    draw(context){
        context.drawImage(this.image, 0, 0, this.width, this.height)
    }
    update(){

    }
}