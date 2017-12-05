//var game = new Phaser.Game(850, 470, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render });
//
//var player;
//var bullets;
//
//var cursors;
//var fireButton;
//var fireButtonUp;
//
//var bulletTime = 0;
//var bullet;
//
//var fire;
//
//var bulletx = 6;
//var bullety = 12;
//var bulletvelx = 600;
//var bulletvely = 0;
//
//var enemyBullet;
//var livingBear = [];
//var firingTimer = 0;
//
//var missileTime = 0;
//var missile;
//var missilex = 6;
//var missiley = 12;
//var missilevel = 600; 
//
////var bear;
//
//   function preload() {
//        game.load.spritesheet('player', 'assets/man4.png', 88.57, 104.75);
//        game.load.image('background', 'assets/scenario.jpg');
//        game.load.image('hp', 'assets/hearts.png');
//        game.load.image('enemy', 'assets/bear2.png');
////        this.game.load.image('wall', 'assets/wall.PNG');
//        game.load.image('bullet','assets/laser.png');
//        game.load.image('platform','assets/ground.png');
//        game.load.spritesheet('bear','assets/bear3trans.png', 83.333, 111);
//        game.load.spritesheet('missile','assets/missile.png', 350, 160, 8)
//    }
//
////this.game.time.events.loop(2000, function() {  this.game.add.tween(powerup).to({x: this.game.world.randomX, y: this.game.world.randomY}, 1750, Phaser.Easing.Quadratic.InOut, true);}, this)
//
//var bear;
//var tween;
//
//    
//   function create() {
//       
//       this.game.world.setBounds(0, 0, 825, 450);
//       
//
////        this.game.load.image = 'assets/scenario.jpg';
//        bear = game.add.sprite(400, 0, 'bear', 0);
//       
//       
//       this.game.time.events.loop(2500, function() {  
//
//            tween = game.add.tween(bear).to( {x: this.game.world.randomX, y: this.game.world.randomY}, 1500, Phaser.Easing.Quadratic.InOut, true);
//
//            //	There is a 2.5 second delay at the start, then it calls this function
//            tween.onStart.add(onStart, this);
//
//            //	This tween will repeat 10 times, calling this function every time it loops
//            tween.onRepeat.add(onLoop, this);
//
//            //	When it completes it will call this function
//            tween.onComplete.add(onComplete, this);
//       }, this)
//       
//       
//       //add in for player also 
//       //display on the screen somewhere
//       //in the hitBear() function 
////       console.log(bear)
////       console.log("bear health " + bear.health);
//       
//
//        background = game.add.tileSprite(0,0,850,470,'background');
//        game.physics.startSystem(Phaser.Physics.ARCADE);
//        game.world.enableBody = true;
//        
//        cursor = 
//        game.input.keyboard.createCursorKeys();
//        
//        player = game.add.sprite(100, 100, 'player');
//        player.animations.add('right', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26], 20, true);
//        player.animations.add('left', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26], 20, true);
//        player.body.setSize(70, 80, 0, 13);
//        player.scale.setTo(0.5, 0.5);
//        player.anchor.x = 0.5;
//        player.anchor.y = 0.5;
//       
//        bear = game.add.sprite(780, 100, 'bear');
//        bear.animations.add('fly');
//        bear.animations.play('fly', 4, true);
//        bear.scale.setTo(0.8, 0.8);
//        bear.anchor.x = 0.5;
//        bear.anchor.y = 0.5;
//        bear.scale.x = -1;
//        bear.enableBody = true;
//        bear.physicsBodyType = Phaser.Physics.ARCADE;
//       
//        bear.health = bear.maxHealth = 10;
//       
//        enemyBullets = game.add.group();
//        enemyBullets.enableBody = true;
//        enemyBullets.physicsBodyType = Phaser.Physics.ARCADE;
//        enemyBullets.createMultiple(30, 'missile', false);
//        enemyBullets.setAll('outOfBoundsKill', true);
//        enemyBullets.setAll('checkWorldBounds', true);
//        cursors = game.input.keyboard.createCursorKeys(); 
//        missilButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);   
//
//
//        bullets = game.add.physicsGroup();
//        bullets.enableBody = true;
//        bullets.physicsBodyType = Phaser.Physics.ARCADE;
//        bullets.createMultiple(32, 'bullet', false);
//        bullets.setAll('checkWorldBounds', true);
//        bullets.setAll('outOfBoundsKill', true);    
//        cursors = game.input.keyboard.createCursorKeys();
//        fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);    
//        fireButtonUp = game.input.keyboard.addKey(Phaser.Keyboard.Z);   
//    
//        platforms = game.add.physicsGroup();
//
//        platforms = game.add.group();
//        walls = game.add.group();
//        player.body.collideWorldBounds = true;
//        
//       platforms = game.add.physicsGroup();
//
//        var platform = game.add.sprite('platform');
//        platform.enableBody = true;
//        platforms.create(530,410, 'platform');
//        platforms.create(180,410, 'platform');
//        platforms.create(35,350, 'platform');
//        platforms.create(355,350, 'platform');
//        platforms.create(530,250, 'platform');
//        platforms.add(platform);
//        platform.body.immovable = true;
//       
//        platforms.setAll('body.immovable', true);
//
//        
////        var platform = game.add.sprite(300,410, 'platform');
//////        this.platform.enableBody = true;
//////        this.platform.create(400,410, 'platform');
////        this.platforms.add(platform);
////        platform.body.immovable = true;
////        
////        var platform = game.add.sprite(400,410, 'platform');
//////        this.platform.enableBody = true;
//////        this.platform.create(400,410, 'platform');
////        this.platforms.add(platform);
////        platform.body.immovable = true;
////        
////        var platform = game.add.sprite(400,410, 'platform');
//////        this.platform.enableBody = true;
//////        this.platform.create(400,410, 'platform');
////        this.platforms.add(platform);
////        platform.body.immovable = true;
//        
//        player.body.gravity.y = 600;
//            
//
//
//    
//    }
//    
//   function update() {
//        game.physics.arcade.collide(player, platforms);
//        
//
////        this.game.physics.arcade.overlap(this.player, this.coins, this.takeCoin, null, this);
////
////        this.game.physics.arcade.overlap(this.player, this.enemies, this.restart, null, this);
//        
//        if(cursor.left.isDown){
//            player.body.velocity.x = -200;
//            player.scale.x = -0.5;
//            player.animations.play('left');
//            bulletx = -25;
//            bullety = 12;
//            bulletvelx = -600;
//            bulletvely = 0;
//        }
//        else if (cursor.right.isDown){
//            player.body.velocity.x = 200;
//            player.scale.x = 0.5;
//            player.animations.play('right');
//            bulletx = 6;
//            bullety = 12;
//            bulletvelx = 600;
//            bulletvely = 0;
//        }
//        else{
//            player.body.velocity.x = 0;
//            player.animations.stop();
//
//            player.frame = 4;
//        }
//        
//        
//        if(cursor.up.isDown && (player.body.onFloor() || player.body.touching.down))
//            {
//            player.body.velocity.y = -300;
//         
//        }
//        
//       
//        
//        if(fireButton.isDown){
//            fireBullet();
//        } 
//       else if(fireButtonUp.isDown) {
//            bulletx = -2;
//            bullety = 20;
//            bulletvelx = 0;
//            bulletvely = -600;
//            fireBullet();
//        }
//        
////        if(missilButton.isDown){
////            fireMissil();
////        }
////        
//        
////               console.log("bear health " + bear.health);
//
//            game.physics.arcade.overlap(bear, bullets, hitBear, null, this);
//        game.physics.arcade.overlap(missile, player, enemyHitsPlayer, null, this);
//        
//        
//    }
//    
////    this.fireBullet: function(){
////    
////        if(this.game.time.now > bulletTime){
////    
////            bullet = this.bullets.getFirstExists(false); 
////    
////            if(this.bullet){
////    this.bullet.reset(player.x,player.y);
////    this.bullet.body.velocity.y = -400;
////    this.bulletTime = game.time.now + 200;
////}
////}
////    
////}
//
//    function render () {
////        game.debug.body(player);
////       
//
//
//
//
//}
////    function enemyFires () {
////
////    //  Grab the first bullet we can from the pool
////    missile = enemyBullets.getFirstExists(false);
////
////    livingBear.length=0;
////
////   bear.forEachAlive(function(bear){
////
////        // put every living enemy in an array
////        livingBear.push(bear);
////    });
////
////
////    if (missile && livingBear.length > 0)
////    {
////        
////        var random=game.rnd.integerInRange(0,livingBear.length-1);
////
////        // randomly select one of them
////        var shooter=livingBear[random];
////        // And fire the bullet from this enemy
////        missile.reset(shooter.body.x, shooter.body.y);
////
////        game.physics.arcade.moveToObject(missile,player,120);
////        firingTimer = game.time.now + 2000;
////    }  
////    }
//
//
//    function fireBullet() {
//
//    if (game.time.time > bulletTime)
//    {
//        bullet = bullets.getFirstExists(false);
//
//        if (bullet)
//        {
//            bullet.reset(player.x + bulletx, player.y - bullety);
//            bullet.anchor.x = 0.5;
//            bullet.anchor.y = 0.5;
//            bullet.angle = 90;
//            bullet.body.velocity.x = bulletvelx;
//            bullet.body.velocity.y = bulletvely;
//            
//            bulletTime = game.time.time + 100;
//
//        }
//    }
//         var fire = bullet.animations.add('fire');
//            bullet.scale.setTo(0.5, 0.5);
//
//            bullet.animations.play('fire', 10, false);
//}
//
////      function fireMissil() {
////
////    if (game.time.time > missileTime)
////    {
////        missile = enemyBullets.getFirstExists(false);
////
////        if (missile)
////        {
////            missile.reset(bear.x + missilex, bear.y - missiley);
////            missile.anchor.x = 0.5;
////            missile.anchor.y = 0.5;
////            missile.angle = 90;
////            missile.body.velocity.x = bulletvelx;
////            bulletTime = game.time.time + 100;
////
////        }
////    }
////         var fire = bullet.animations.add('fire');
////            bullet.scale.setTo(0.5, 0.5);
////
////            bullet.animations.play('fire', 10, false);
////}
//
//function hitBear (bear, bullet) {
//    
//    bullet.kill();
//    //take bear health down by 1 
//    bear.damage(1);
//    
//    if(!bear.alive){
//        
//    }
//}
//
//function enemyHitsPlayer (player,bullet) {
//    
//}
//
//function onStart() {
//
//	//	Turn off the delay, so it loops seamlessly from here on
//	tween.delay(1000);
//
//}
//
//function onLoop() {
//
//	
//
//	if (bear.frame === 5)
//	{
//		bear.frame = 0;
//	}
//	else
//	{
//		bear.frame++;
//	}
//
//}
//
//function onComplete() {
//
//    tween = game.add.tween(bear).to( { x: 750 - bear.width }, 0, Phaser.Easing.Exponential.Out, true);
//
//}
