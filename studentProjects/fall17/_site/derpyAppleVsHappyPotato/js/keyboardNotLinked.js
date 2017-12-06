// Keyboard Input for Game
// game speed in a set interval
var gameSpeed = 100;
let interval;

// creating the derpy apple 'player' 
var derp = {
  init: function(w, h, size){
  this.dir = "d";
  this.size = size;
    
    //center of the screen
    var center = {
      x: (w/ 2 / this.size | 0) *this.size,
      y: (w/ 2/ this.size | 0) * this.size
    };
    
    
  this.body = [];
    for (let i = 0; i < 3; i++) {
      this.body.push({
        x: center.x,
        y: center.y - i * this.size
      });
    }
  },
  
  //in need of a drawing function of the player
  
  //changes the direction of the apple
  changeDir: function (dir) {
    if (dir == "u") {
      this.dir = dir;
    }  
    else if (dir == "downArrow") {
      this.dir = dir;
    } 
    else if (dir == "r") {
      this.dir = dir;
    } 
    else if (dir == "l") {
      this.dir = dir;
    } 
    else if (dir == "w") {
      this.dir = dir;
    }
    else if (dir == "a") {
      this.dir = dir;
    }
    else if (dir == "s") {
      this.dir = dir;
    }
    else if (dir == "d") {
      this.dir = dir;
    }
},  
 
  //move function the apple where the apple is pointing towards
  move: function(w, h) { //head of the apple
  var head = {
  x: this.body[0].x,
  y: this.body[0].y
};
    if (this.dir == "u") { // 0 is the head
      this.body[0].y += this.size;
    }
    else if (this.dir == "downArrow") {
      this.body[0].y -= this.size;
    }
    else if (this.dir == "l") {
      this.body[0].x -= this.size;
    }
    else if (this.dir == "r") {
      this.body [0].x += this.size;
    }
    else if (this.dir == "w") {
      this.body[0].y += this.size;
    }
    else if (this.dir == "a") {
      this.body[0].x -= this.size;
    }
    else if (this.dir == "s") {
      this.body[0].y -= this.size;
    }
    else if (this.dir == "d") {
      this.body [0].x += this.size;
    }
    this.body.splice(1, 0, head);
}
  };

//initizilation function to redraw canvas
function init() {
  derp.init(canvas.width, canvas.height, gridSize);
  });
  
  //interval for gamespeed
    clearInterval(interval);
    interval = setInterval(update, gameSpeed);
init();
*/
