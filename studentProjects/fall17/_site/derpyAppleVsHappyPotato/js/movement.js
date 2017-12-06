// Movement loops code

var updateAllDir = function () {
    if (keyboard.w) {
        derp.changeDir("u");
    }
    else if (keyboard.a) {
        derp.changeDir("l");
    }
    else if (keyboard.s){
        derp.changeDir("d");
    }
    else if (keyboard.d){
        derp.changeDir("r");
    }
    if (keyboard.u){
        potato.changeDir("u");
    }
    else if (keyboard.l){
        potato.changeDir("l");
    }
    else if (keyboard.downArrow){
        potato.changeDir("d");
    }
    else if (keyboard.r){
        potato.changeDir("r");
    }
}

function update() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    derp.draw (ctx);
    potato.draw (ctx);
    updateAllDir();
    derp.move();
    potato.move();
    
    requestAnimationFrame(update);
}

update();
