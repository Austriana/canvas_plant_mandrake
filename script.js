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

    window.addEventListener('click', () => {
                player.flag = true;
                mandrakeArray.push(new Mandrake(canvas.width, canvas.height, player));
    });

    window.addEventListener('mousemove', (event) => {
            player.mouse.x = event.x;
            player.mouse.y = event.y;
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