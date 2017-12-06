let canvas = document.getElementById("grid");
let ctx = canvas.getContext("2d")

//28 by 12 
let levelOne = 
    ["    xxxxxxxxxxxxxxxxxxxxxxx",
     "    x                     x",
     "    x                     x   ", 
     "    x                     x   ", 
     "xxxxx                     xxxxx", 
     "x####                     ~~~~x", 
     "x####                     ~~~~x", 
     "xxxxx                     xxxxx", 
     "    x                     x   ", 
     "    x                     x",
     "    x                     x",
     "    xxxxxxxxxxxxxxxxxxxxxxx"];


let playerspd = .1;
const gridSize = 20;
const enemySize = 10;

//kbd obj values
let kbd = {
  u: false,
  d: false,
  l: false,
  r: false
};

let enemy = [
  {
    x: 10,
    y: 10
  },
  {
    x: 15,
    y: 10
  },
  {
    x: 20,
    y: 10
  },
  {
    x: 25,
    y: 10
  }
];

//player obj
let player = {
 isAlive: true,
 x: 2,
 y: 5.5,
 size: 20,
  move: function(direction, map) {
    const s = this.size / gridSize;
    if(direction === "u" 
       && map[this.y-playerspd|0][this.x|0] !== "x" 
       && map[this.y-playerspd|0][this.x+s|0] !== "x") {
       this.y -= playerspd;
    }
    else if(direction === "d"
       && map[this.y+playerspd+s|0][this.x|0] !== "x" 
       && map[this.y+playerspd+s|0][this.x+s|0] !== "x") {    
       this.y += playerspd;
    }
    else if(direction === "l"
      && map[this.y-playerspd|0][this.x|0] !== "x" 
      && map[this.y+s|0][this.x-playerspd|0] !== "x") {
      this.x -= playerspd
    }

    else if(direction === "r"
      && map[this.y|0][this.x+playerspd+s|0] !== "x" 
      && map[this.y+s|0][this.x+playerspd+s|0] !== "x") {     
      this.x += playerspd
    }
  },
  
  //draw function
  draw: function() {
    ctx.fillStyle = "#8CE8FF";
    ctx.fillRect(this.x*gridSize, this.y*gridSize, this.size, this.size);
 }
};

  //draw enemies function
function drawEnemies() {
    for(let i = 0; i < enemy.length; i++){ 
      ctx.fillStyle = "#ff0000";
        ctx.fillRect(enemy[i].x*gridSize, enemy[i].y*gridSize, enemySize, enemySize);
    }
 }

//initializes default values for keypresses
function init() {
  document.addEventListener('keydown', function(e) {
//left move    
  if(e.keyCode === 37) {
        kbd.l = true;
        e.preventDefault();
    }
  
  //right move
    else if(e.keyCode === 39) {       
      kbd.r = true;
      e.preventDefault();
    }
  
  //up move
    else if(e.keyCode === 38) {
      kbd.u = true;
      e.preventDefault();
    }
  
  //down move
  else if(e.keyCode === 40) {
    kbd.d = true;
    e.preventDefault();
  }
});

  document.addEventListener('keyup', function(e) {
//left move    
  if(e.keyCode === 37) {
        kbd.l = false;
        e.preventDefault();
    }
  
  //right move
    else if(e.keyCode === 39) {       
      kbd.r = false;
      e.preventDefault();
    }
  
  //up move
    else if(e.keyCode === 38) {
      kbd.u = false;
      e.preventDefault();
    }

    //down move
    else if(e.keyCode === 40) {
      kbd.d = false;
      e.preventDefault();
    }
  });

  
  update();
}

function collides(a, b, gridSize) {
  return a.x * gridSize < b.x * gridSize + enemySize &&
         a.y * gridSize < b.y * gridSize + enemySize &&
         b.x * gridSize < a.x * gridSize + a.size &&
         b.y * gridSize < a.y * gridSize + a.size;
};
//updates  animation 
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if(kbd.u) {
    player.move("u", levelOne);
  } 
  if(kbd.d)  {
    player.move("d", levelOne);
  } 
  if(kbd.l) {
    player.move("l", levelOne);
  }
  if(kbd.r) {
    player.move("r", levelOne);
  }  

  
for (let i = 0; i < levelOne.length; i++) {
  for (let j = 0; j < levelOne[i].length; j++) {
    let y = i * gridSize;
    let x = j * gridSize;
    
    if (levelOne[i][j] === "#") {
      ctx.fillStyle = "blue";
    }
    
    else if (levelOne[i][j] === "x") {
      ctx.fillStyle = "#de0dd5";      
    }
    
    else if (levelOne[i][j] === " ") {
      ctx.fillStyle = "transparent";
    }
    else if (levelOne[i][j] === "~") {
      ctx.fillStyle = "green";
    }
    ctx.fillRect(x,y,gridSize,gridSize);
  } 
}
  player.draw();
  drawEnemies();
  // check for collisions between player and enemies
  for (let i = 0; i < enemy.length; i++) {
    if (collides(player, enemy[i], gridSize)) {
       player.x = 2;
       player.y = 5.5;
    }
  }
  requestAnimationFrame(update);
}

init();
