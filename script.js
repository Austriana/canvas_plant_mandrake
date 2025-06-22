window.addEventListener('load', () =>{
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    class Mandrake{
        constructor(canvasWidth, canvasHeigth){
            this.canvasWidth = canvasWidth;
            this.canvasHeigth = canvasHeigth;
            this.image = document.getElementById('mandrake');
            this.spriteWidth = 256;
            this.spriteHeight = 256;
            this.width = this.spriteWidth;
            this.height = this.spriteHeight;
            this.scale = 1.0;
            this.x = canvasWidth/2 - this.width * this.scale/2;
            this.y = canvasHeigth/2 - this.height * this.scale/2;
            this.minFrame = 0;
            this.maxFrame = 355;
            this.frame = 0;
            this.frameX = 3;
            this.frameY = 7;
        }

        draw(context){
            context.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, 
                this.spriteWidth, this.spriteHeight, this.x, this.y, this.width * this.scale, 
                this.height * this.scale)
        };

        update(){
            if(this.frame < this.maxFrame) this.frame++;
            else this.frame = this.minFrame;
            this.frameX = this.frame % 18;
            this.frameY = Math.floor(this.frame / 18);
        }
    };

    const mandrake = new Mandrake(canvas.width, canvas.height);

    function animate(){
        ctx.clearRect(0,0, canvas.width, canvas.height)
        mandrake.draw(ctx);
        mandrake.update();
        requestAnimationFrame(animate);
    }
    animate();
})