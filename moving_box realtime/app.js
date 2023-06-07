const my_box = document.querySelector('#my_box_realtime');
let FPS = 10;

let x = 70;
let y = 70;

function move(){
    my_box.style.right = x + 'px';
    my_box.style.bottom = y + 'px';
}

setInterval(() =>{
    x++;
    y++;
    move();
}, 500/FPS);

