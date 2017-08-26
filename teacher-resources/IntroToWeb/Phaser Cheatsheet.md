-<strong> <u>Creating a game object:</u></strong>
  
  - function(){
    var game = new Phaser.Game(320,480, Phaser.CANVAS, "game");
  }
  
-<strong> adding states to your game:</strong>
  - game.state.add("State_name1", state_name2);
  

<strong>Note:</strong> make sure that state_name2 matches the var name in that State

<strong>Note:</strong> to call that state from a different state:
  - game.state.start("State_name1");
  

-<strong> Start a state:</strong>
  - game.state.start("State_name");


-<strong> Make a Prototype:</strong>
  - state.prototype = {
    ...
   }
   

-<strong> Make a function:</strong>
  - func_name : function(){
    ....
  },
  func_name: function(){
   ....
  }
  


-<strong> When having multiple functions, put a comma after each one except the last one.</strong>



-<strong> Loading an image:</strong>
  - this.game.load.image("var_name","path_to_img");
 
-<strong> Loading a spritesheet:</strong>
  - this.game.load.spritesheet("var_name","path_to_img",x_frame_size, y_frame_size);

-<strong> Adding a loading bar to your preload state:</strong>
  - var loadingBar = this.add.sprite(x_location,y_location,"var_name");
  
-<strong> Set a loading bar to visibly load on your game:</strong>
  - this.load.setPreloadSprite(loadingBar);
  
-<strong> Anchor a sprite:</strong>
  - var_name.anchor.setTo(x_location, y_location);
 
-<strong> Add a button:</strong>
  - this.game.add.button(x_location, y_location, "var_name", button_action, this);
  
-<strong> Building a level (this goes in the create function):</strong>
  - var level = [xxxxxxxxxx,
                 x   o  i x,
                 x     ii x,
                 x i      x,
                 x        x,
                 xxxxxxxxxx]
 
                 
              
-<strong> Displaying a level (this goes in the create function):</strong>

          for (var i = 0; i < level.length; i++) {
            for (var j = 0; j < level[i].length; j++) {

                if (level[i][j] == 'x') {
                    var group_elem = this.game.add.sprite(30+20*j//pos relative to j, 30+20*i //pos relative to i, 'wall'//name of sprite that you preloaded);
                    this.walls.add(wall); //add group_elem to group
                    wall.body.immovable = true; //if this elem shouldn't move, make it immovable
                }

                // Create a coin and add it to the 'coins' group
                else if (level[i][j] == 'o') {
                    var coin = this.game.add.sprite(30+20*j, 30+20*i, 'coin');
                    this.coins.add(coin);
                }

                // Create a enemy and add it to the 'enemies' group
                else if (level[i][j] == 'i') {
                    var enemy = this.game.add.sprite(30+20*j, 30+20*i, 'lava');
                    this.lavas.add(enemy);
                }
            }
        }
