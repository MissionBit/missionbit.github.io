var mainState = {
    preload: function(){
        this.game.load.image('player', 'player.png');
        this.game.load.image('wall', 'wall.png');
        this.game.load.image('coin', 'coin.png');
        this.game.load.image('lava', 'lava.png');
    },
    
    create: function(){
        
        
        
        this.cursor = this.game.input.keyboard.createCursorKeys();
        
        this.game.stage.backgroundColor = '#3598db';
        
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        
        this.game.world.enableBody = true;
        
        this.player = this.game.add.sprite(70, 100, 'player');
        
        this.player.body.gravity.y = 600;
        
        //create groups
        this.walls = this.game.add.group();
        this.coins = this.game.add.group();
        this.lavas = this.game.add.group();
        
        
        
        //design level x = wall, o = coin, ! = lava.
        var level = [
            'xxxxxxxxxxxxxxxxxxxxxx',
            '!         !          x',
            '!                 o  x',
            '!         o          x',
            '!                    x',
            '!     o   !    x     x',
            'xxxxxxxxxxxxxxxx!!!!!x',
        ];
        
        // Create the level by going through the array
        for (var i = 0; i < level.length; i++) {
            for (var j = 0; j < level[i].length; j++) {

                // Create a wall and add it to the 'walls' group
                if (level[i][j] == 'x') {
                    var wall = this.game.add.sprite(30+20*j, 30+20*i, 'wall');
                    this.walls.add(wall);
                    wall.body.immovable = true; 
                }

                // Create a coin and add it to the 'coins' group
                else if (level[i][j] == 'o') {
                    var coin = this.game.add.sprite(30+20*j, 30+20*i, 'coin');
                    this.coins.add(coin);
                }

                // Create a enemy and add it to the 'enemies' group
                else if (level[i][j] == '!') {
                    var enemy = this.game.add.sprite(30+20*j, 30+20*i, 'lava');
                    this.lavas.add(enemy);
                }
            }
        }
        //create a score
        this.score = 0;
        
        //add text to screen with color and size
        this.text = this.game.add.text(10,10,"Score:" + this.score,{ fontSize: '20px', fill: '#000'});
        this.text.addColor("#ff0000",0);
    },
    
    update: function(){
        this.physics.arcade.collide(this.walls, this.player);
        this.physics.arcade.collide(this.player,this.coins, this.takeCoin, null, this);
        this.physics.arcade.overlap(this.player,this.lavas, this.restart, null, this);
        
        if(this.cursor.left.isDown){
           this.player.body.velocity.x = -200;
        }
        else if(this.cursor.right.isDown){
            this.player.body.velocity.x = 200;
        } 
        else{
            this.player.body.velocity.x = 0;
        }
        
        
        if(this.cursor.up.isDown && this.player.body.touching.down){
            this.player.body.velocity.y = -200;
           
        }
        
    },
    
    takeCoin: function(player, coin){
        coin.kill();
        this.score += 10;
        this.text.text = "Score: "+ this.score;
    },
    
    restart: function(){
        this.game.state.start("state1");
    }
};






