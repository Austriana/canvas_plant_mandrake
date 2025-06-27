import { Mandrake } from "./mandrake.js";
import { Player } from "./player.js";

window.addEventListener('load', () =>{
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const player = new Player(canvas.width, canvas.height);
    const mandrake = new Mandrake(canvas.width, canvas.height);

    window.addEventListener('keypress', (event) => {
        let key = event.code;
        if(key === 'Digit0'){
                        console.log(mandrake);

            mandrake.mandrakeArray.splice(0, 1);
        };
        if(key === 'Digit1'){
            console.log(mandrake);
            mandrake.mandrakeArray.push(new Mandrake(canvas.width, canvas.height));
        };
    });
        window.addEventListener('mousemove', (event) => {
        player.mouse.x = event.x;
        player.mouse.y = event.y;
    });

    function animate(){
        ctx.clearRect(0,0,canvas.width, canvas.height)
        player.draw(ctx);
        player.update();
        mandrake.mandrakeArray.forEach(mandrake =>{
            mandrake.draw(ctx);
            mandrake.update();
        });
        requestAnimationFrame(animate);
    };

    animate();

});