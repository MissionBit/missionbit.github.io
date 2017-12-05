var theGame = function(game){}

theGame.prototype = {
  	    create: function() {
        this.game.stage.backgroundColor = '#00008b';
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.world.enableBody = true;
        
        this.cursor = this.game.input.keyboard.createCursorKeys();
        
        this.player = this.game.add.sprite(90, 225, 'player');
        
//        game.physics.enable(this.player, Phaser.Physics.ARCADE);
//        this.player.body.allowRotation = true;
//        this.player.body.immovable = true;
//        this.player.body.collideWorlWall = true;
       this.player.anchor.set(0.5);
        
        this.player.body.gravity.y = 0;
        
        this.finishLines = this.game.add.group() ;
//        this.walls.enableBody = true;
        this.gasolines = this.game.add.group();
        this.enemies = this.game.add.group();
        
        var level = [
            'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'x                                                                        x',
            'x                                                                        x',
            'xxx     xxxxxxxxxxxxxxxxxxxxx     x                                      x',
            'x       x o                       x     x    xxxxxxxxxxxxxxxxxx          x',
            'x       x                         x     x    x                x          x',
            'x     xxx     x       xxxxxxxxxxxxx     x    x  o             x          x',
            'x       x     x                   x     x    x                x          x',
            'xxx     x     x                   x     x    xxxxxxxxxxx                 x',
            'x       x     xxxxx               x     x              x                 x',
            'x     xxx     x                         x              xx                x',
            'xxxxxxxxx     x       xxxxxx            x              xxxx      xxxxxxxxx', 
            'x                                      xxxxxxxxx          x              x',
            'x                                      x                  x              x',
            'xxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                  x              x',
            'x       x                                      xxxxxxxxxxxxxxxxxxx       x',
            'x       x                                      x                 x       x',
            'x     xxx                                      x o               x       x',
            'x       x       xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                 x       x',
            'x       x                            x         xxxxx       x     x       x', 
            'xxx     x                            x             x       x     x   o   x',
            'x       x                            x      x      x       x     x       x',
            'x     xxxxxxxxxxxxxxxxxxxxxxxxx      x      x      x       x     xxxxxxxxx',          
            'x                             x             x      x       x             x',
            'x                         o   x             x              x             !',
            'x                             x             x              x             !',               
            'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            
            
            
        ];
        for (var i = 0; i < level.length; i++) {
            for (var j = 0; j < level[i].length; j++) {

                if (level[i][j] == '!') {
                    var finishLine = this.game.add.sprite(30+20*j, 30+20*i, 'finishLine');
                    this.finishLines.add(finishLine);
//                    var wall = this.walls.create(30+20*j, 30+20*i, 'wall');
                    finishLine.body.immovable = true; 
                }

                else if (level[i][j] == 'o') {
                    var gasoline = this.game.add.sprite(30+20*j, 30+20*i, 'gasoline');
                    this.gasolines.add(gasoline);
                }

                else if (level[i][j] == 'x') {
                    var enemy = this.game.add.sprite(30+20*j, 30+20*i, 'enemy');
                    this.enemies.add(enemy);
                }
            }
        }
    },
    update: function() {
        this.game.physics.arcade.overlap(this.player, this.finishLines, this.win, null, this);

        this.game.physics.arcade.overlap(this.player, this.gasolines, this.takeGasoline, null, this);

        this.game.physics.arcade.overlap(this.player, this.enemies, this.restart, null, this);
        
        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;
        this.player.body.angularVelocity = 0;

        if (this.cursor.left.isDown)
        {
            this.player.body.angularVelocity = -250;
        }
        else if (this.cursor.right.isDown)
        {
            this.player.body.angularVelocity = 250;
        }

        if (this.cursor.up.isDown)
        {
            this.game.physics.arcade.velocityFromAngle(this.player.angle, 250, this.player.body.velocity);
        }

    
        
    },
    
//    update: function() {
//        this.game.physics.arcade.collide(this.player, this.walls);
//
//        this.game.physics.arcade.overlap(this.player, this.gasoline, this.takeGasoline, null, this);
//
//        this.game.physics.arcade.overlap(this.player, this.enemies, this.restart, null, this);
//        
////        this.player.body.angularVelocity = 20;
//        
//        if(this.cursor.left.isDown)
//            this.player.body.velocity.x = -90;
//        else if (this.cursor.right.isDown)
//            this.player.body.velocity.x = 90;
//        if(this.cursor.up.isDown)
//            this.player.body.velocity.y = -90;
//        else if (this.cursor.down.isDown)
//            this.player.body.velocity.y = 90;
//        
//},
    takeGasoline: function(player, gasoline){
        gasoline.kill();
    },
    
    win: function() {
          this.game.state.start('gameOver');
    },

    restart: function() {
        this.game.state.start('main');
    },
}