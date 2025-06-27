import { Background } from "./background.js";
import { Mandrake } from "./mandrake.js";
import { Player } from "./player.js";

window.addEventListener('load', () =>{
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const background = new Background(canvas.width, canvas.height);
    const player = new Player(canvas.width, canvas.height);
    const mandrakeArray = [];
    let touch = false;

    window.addEventListener('touchmove', () => {
        touch = true;
        if(touch)
            player.flag = true;
            mandrakeArray.push(new Mandrake(canvas.width, canvas.height, player));
    });
    
    window.addEventListener('touchmove', (event) => {
        touch = true;
        if(touch){
            player.mouse.x = event.touches[0].clientX;
            player.mouse.y = event.touches[0].clientY;
        }
    });

    window.addEventListener('mousedown', (event) => {
        touch = false;
        if(!touch){
            let key = event.button;
            if(key === 2){
                mandrakeArray.splice(0, 1);
            };
            if(key === 0){
                player.flag = true;
                mandrakeArray.push(new Mandrake(canvas.width, canvas.height, player));
            };
        }
    });

    window.addEventListener('mousemove', (event) => {
        touch = false;
        if(!touch){
            player.mouse.x = event.x;
            player.mouse.y = event.y;
        }
    });

    function animate(){
        ctx.clearRect(0,0,canvas.width, canvas.height)
        background.draw(ctx);
        mandrakeArray.forEach(mandrake =>{
            mandrake.draw(ctx);
            mandrake.update();
            if(mandrake.frame === 355){
                 mandrakeArray.splice(mandrake,1)
            }
        });
        player.draw(ctx);
        player.update();
        requestAnimationFrame(animate);
    };

    animate();

});