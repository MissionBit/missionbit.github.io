// Collision detection code

/* DOES NOT WORK!!!!!!!!
OKAY|
WOT
OK
YEA*/

Player.prototype.collidesWith = function(Player) 
{
 for (let i = 0; i < 3; i++) {
          if (this.body[0].x === Player.body[i].x
            &&
            if (this.body[0].y === Player.body[i].y)  
              {
                  return true;   
      }
  }
return false;
};


Player.prototype.selfCollides=function() 
{
    for (let i = 0; i < 3; i++)
 { 
 if (this.body[0].x === this.body[i].x 
    && this.body[0].y === this.body[i].y)
 {
     return true;
    }
 }
    return false;
};


Player.prototype.inCanvas = function (canvas) {
  return this.body[0].x >= 0 && this.body[0].y >= 0 &&
         this.body[0].x < canvas.width &&
         this.body[0].y < canvas.height;
};


Player.prototype.live = function() {
    if (this.collidesWith(Player) &&
       this.inCanvas(canvas) &&
        this.selfCollides();
       )
        {
        return update();
        }
    
};
