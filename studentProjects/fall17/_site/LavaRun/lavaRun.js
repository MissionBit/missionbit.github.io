var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.tilemap('level1', 'assets/level1.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles-1', 'assets/tiles-1.png');
    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
    game.load.image('background', 'assets/background2.png');
    game.load.spritesheet('banana', 'assets/banana.png', 33, 56);
    game.load.spritesheet('lava', 'assets/lava.png', 140, 119);
    game.load.spritesheet('enemy', 'assets/droid.png', 32,32);
//    game.load.image('banana', 'assets/star.png');

}

var map;
var tileset;
var layer;
var player;
var facing = 'left';
var jumpTimer = 0;
var cursors;
var jumpButton;
var bg;
var bananas;
var lava;
var enemies; 

var score = 0;
var scoreText; 

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.stage.backgroundColor = '#000000';

    bg = game.add.tileSprite(0, 0, 800, 600, 'background');
    bg.fixedToCamera = true;

    map = game.add.tilemap('level1');

    map.addTilesetImage('tiles-1');

    map.setCollisionByExclusion([ 13, 14, 15, 16, 46, 47, 48, 49, 50, 51 ]);

    layer = map.createLayer('Tile Layer 1');

    //  Un-comment this on to see the collision tiles
//     layer.debug = true;

    layer.resizeWorld();

    game.physics.arcade.gravity.y = 250;

    player = game.add.sprite(32, 32, 'dude');
    game.physics.enable(player, Phaser.Physics.ARCADE);

    player.body.bounce.y = 0.2;
    player.body.collideWorldBounds = true;
    player.body.setSize(20, 32, 5, 16);

    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('turn', [4], 20, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
    
    bananas = game.add.group();
    bananas.enableBody = true;
    for(var i = 1; i < 30; i++){
        var banana = bananas.create( i * 95, i * 70, 'banana');
        banana.anchor.set(0.5, 0.5);
        banana.scale.setTo(0.5, 0.5);
        game.physics.enable(banana, Phaser.Physics.ARCADE);
        banana.body.allowGravity = true;
        banana.body.gravity.y = 6;
        banana.body.bounce.y = 0.7 + Math.random() * 0.2;
//        banana.animations.add('rotate', [0,1,2,3,4,5], 3, true);
//        banana.animations.play('rotate');
        banana.body.collideWorldBounds = true;
    }
    
    enemies = game.add.group();
    enemies.enableBody = true;
    for(var i = 1; i < 10; i++){
        var enemy = enemies.create(i * 80, i * 70, 'enemy');
        enemy.anchor.set(0.5, 0.5);
//        enemy.scale.setTo(0.8, 0.8);
        game.physics.enable(enemy, Phaser.Physics.ARCADE);
        enemy.body.allowGravity = true;
        enemy.body.gravity.y = 2;
        enemy.body.bounce.y = 0.7 + Math.random() * 0.2;
        enemy.animations.add('crawl', [0,1,2,3], 4, true);
        enemy.animations.play('crawl');
        enemy.body.collideWorldBounds = true;
        
    }
    

//    lava.body.allowGravity = false;
    for(var x = 0; x < game.world.width; x+= 128){
        lava = game.add.sprite(x,0, 'lava');
        lava.animations.add('fall', [0,1,2,3], 4, true);
        lava.animations.play('fall');
    }


    game.camera.follow(player);
//    game.camera.setSize(50,50);

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    
    scoreText = game.add.text(16, 64, 'Score: 0', {fontsize: '32px', fill: '#FFF'});

}

function update() {

    game.physics.arcade.collide(player, layer);
    game.physics.arcade.collide(bananas, layer);
    game.physics.arcade.collide(enemies, layer);
    
    game.physics.arcade.overlap(player, bananas, collectBanana, null, this);
    game.physics.arcade.overlap(player, enemies, attackPlayer, null, this);
    
    scoreText.x = game.camera.x;
    scoreText.y = game.camera.y;
    
    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -150;

        if (facing != 'left')
        {
            player.animations.play('left');
            facing = 'left';
        }
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 150;

        if (facing != 'right')
        {
            player.animations.play('right');
            facing = 'right';
        }
    }
    else
    {
        if (facing != 'idle')
        {
            player.animations.stop();

            if (facing == 'left')
            {
                player.frame = 0;
            }
            else
            {
                player.frame = 5;
            }

            facing = 'idle';
        }
    }
    
    if (jumpButton.isDown && player.body.onFloor() && game.time.now > jumpTimer)
    {
        player.body.velocity.y = -250;
        jumpTimer = game.time.now + 750;
    }

}

function collectBanana(player, banana){
    banana.kill();
    
    score += 10;
    scoreText.text = 'Score: ' + score;
}

function attackPlayer(player, enemy){
    enemy.kill();
    score -= 10;
    scoreText.text = 'Score: ' + score; 
 }

function render () {

}