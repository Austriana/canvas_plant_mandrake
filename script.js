window.addEventListener('load', () =>{
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    class Mandrake{
        constructor(){
            this.canvasWidth = canvas.width;
            this.canvasHeigth = canvas.height;
            this.image = document.getElementById('mandrake');
            this.spriteWidth = 256;
            this.spriteHeight = 256;
            this.x = Math.random() * (this.canvasWidth - this.spriteWidth);
            this.y = Math.random() * (this.canvasHeigth - this.spriteHeight)
            this.minFrame = 0;
            this.maxFrame = 355;
            this.frame = 0;
            this.frameX = 3;
            this.frameY = 0;
            this.speed = Math.floor(Math.random() * 2 - 4)
            
            

        }

        draw(context){
            context.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, 
                this.spriteWidth, this.spriteHeight, this.x, this.y, this.spriteWidth, 
                this.spriteHeight)
        };

        update(){
            if(gameFrame % 5 === 0){
                if(this.x >= 0 ){
                    this.x += Math.random() * 4 - 2;
                }
                if (this.x <= this.canvasWidth - this.spriteWidth){
                    this.x -= Math.random() * 4 - 2
                }
                if(this.y > 0){
                    this.y += Math.random() * 4 - 2;
                }
                if(this.y <= this.canvasHeigth - this.spriteHeight){
                    this.y -= Math.random() * 4 - 2;
                }
            }
            if(this.frame < this.maxFrame) this.frame++;
            else this.frame = this.minFrame;
            this.frameX = this.frame % 18;
            this.frameY = Math.floor(this.frame / 18);
            
        };
    };

    let mandrakeArray = [];
    let maxMandrake = 10;
    let gameFrame = 0;

    function animate(){
        ctx.clearRect(0,0,canvas.width, canvas.height)
        if(mandrakeArray.length < maxMandrake){
        }
        mandrakeArray.forEach(mandrake =>{
            mandrake.draw(ctx);
            mandrake.update();
        })
        requestAnimationFrame(animate);
        gameFrame++
    }

    animate();

    window.addEventListener('keypress', (event) => {
        if(event.code === 'Digit0'){
            console.log(mandrakeArray.length);
            mandrakeArray.splice(0, 1);
        }
        if(event.code === 'Digit1'){
            console.log(mandrakeArray.length)
            mandrakeArray.push(new Mandrake())
        }
    })
})

