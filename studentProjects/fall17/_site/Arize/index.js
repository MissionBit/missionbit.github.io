var upKey;
    var downKey;
    var leftKey;
    var rightKey;
    

var mainState = {
    preload: function() {
        this.game.load.image('player', 'assets/soldier.jpg');
        this.game.load.image('wall', 'assets/wall.PNG');
        this.game.load.image('enemy', 'assets/zombie.jpg')
    },
    
    
    create: function() {
        this.game.stage.backgroundColor = '#FFFFFF';
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.enableBody = true;
        
//        this.cursor = this.game.input.keyboard.createCursorKeys();
    
        upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
        downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
        leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
        rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
        
        this.player = this.game.add.sprite(70, 100, 'player');
       
        this.player.body.gravity.y = 800;
        
        this.walls = this.game.add.group();
        this.enemies = this.game.add.group();
        
        var level = [
            'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'x                                                           x',
            'x                                                           x',
            'x                                                           x',
            'x                                                           x',
            'x                                                           x',
            'x                                                           x',
            'x                                                           x',
            'x                                                           x',
            'x                                                           x',
            'x                                                           x',
            'x                                                           x',
            'x                                                           x',
            'x                                                           x',
            'x                                                           x',
            'x                                                           x',
            'x                                                           x',
            'x                                                           x',
            'x                  x                                        x',
            'x           x                                               x',
            'x          xx                                               x',
            'x         xxx                                               x',
            'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        ];
        
           $(".top-half-black").mousemove(function(event){
        var xPosition = event.pageX;
        var yPosition = event.pageY;
    })


    function placeCursor() {
        var d = document.getElementById('mirror-image');
        d.style.position = "absolute";
        d.style.left = xPosition+'px';
        d.style.top = -yPosition+'px';
    }

    $( ".top-half-black").mouseover(function( event ){
        placeCursor () ; 
    })
        
        for (var i = 0; i < level.length; i++) {
            for (var j = 0; j < level[i].length; j++) {

                if (level[i][j] == 'x') {
                    var wall = game.add.sprite(30+20*j, 30+20*i, 'wall');
                    this.walls.add(wall);
                    wall.body.immovable = true; 
                }

                else if (level[i][j] == '!') {
                    var enemy = game.add.sprite(10+20*j, 10+20*i, 'enemy');
                    this.enemies.add(enemy);
                }
            }
        }
    },
    
    update: function() {
        this.game.physics.arcade.collide(this.player, this.walls);

        this.game.physics.arcade.overlap(this.player, this.enemies, this.restart, null, this);
        
        if(leftKey.isDown)
            this.player.body.velocity.x = -350
           
        else if (rightKey.isDown)
            this.player.body.velocity.x = 350;
        else
            this.player.body.velocity.x = 0;
        
        if(upKey.isDown && this.player.body.touching.down)
            this.player.body.velocity.y = -250;
        
        
    },

    restart: function() {
        game.state.start('main');
    },
}
