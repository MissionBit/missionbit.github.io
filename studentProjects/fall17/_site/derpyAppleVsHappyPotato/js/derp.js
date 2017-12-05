// Object creation

// Function for creating a new player
var Player = function (x, y, image, color, size, score, dir) {
    this.x = x;
    this.y = y;
    this.image = image;
    this.color = color;
    this.size = size;
    this.score = score;
    this.dir = dir;
};

// Create new player, Derpy Apple
var derp = new Player(0, 275, null, "#c11313", 10, 10, "r");
console.log(derp);

// Create new player, Happy Potato
var potato = new Player(835, 275, null, "#e2bf93", 10, 10, "l");
console.log(potato);

// Draw players
Player.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
};



Player.prototype.move = function () {
    if (this.dir == "u") {
      this.y--;
    }
    else if (this.dir == "d") {
      this.y++;
    }
    else if (this.dir == "l") {
     this.x--;
    }
    else if (this.dir == "r") {
     this.x++;
    }
};

Player.prototype.changeDir = function (dir) {
    this.dir = dir;
};
