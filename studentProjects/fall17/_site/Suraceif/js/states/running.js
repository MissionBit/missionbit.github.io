function running(game) {

    var cursors;
    var player;
    var platforms;
    var robots;
    var robot;
    var jumpAnimation;

    var playerState = "IDLE";
    var playerFacing = "RIGHT";

    function preload() {
        game.load.image('Backgroundz', 'assets/Backgroundz.jpg');
        game.load.image('Stuff', 'assets/Stuff.png');
        game.load.image('star', 'assets/star.png');
        game.load.spritesheet('Running', 'assets/Runstand.png', 50, 50);
        game.load.spritesheet('Shadow', 'assets/Shadow.png', 50, 50);
         game.load.spritesheet('robot', 'assets/robot.png', 50, 50);


    }

    function create() {
        game.world.setBounds(0, 0, 1920, 600);
        game.add.sprite(-300, -300, 'Backgroundz');

        /*
        * Platforms
        */
        platforms = game.add.physicsGroup();

        platforms.create(600, 680, 'Stuff');
        platforms.create(200, 680, 'Stuff');
        platforms.create(0, 680, 'Stuff');
        platforms.create(400, 680, 'Stuff');
        platforms.create(800, 682, 'Stuff');
        platforms.create(10, 680, 'Stuff');

        platforms.setAll('body.allowGravity', false);
        platforms.setAll('body.immovable', true);

        /*
        * Robots
        */
        robots = game.add.physicsGroup();

        robot = robots.create(200, game.world.height - 200, 'robot');
        robots.setAll('body.gravity.y', 1000);



        player = game.add.sprite(32, game.world.height - 300, 'Running');
        game.physics.arcade.enable(player);
        player.animations.add('left', [0, 1, 2, 3, 4, 5, 6, 7], 12, true);
        player.animations.add('right', [19, 20, 21, 22, 23, 24, 25, 26], 12, true);
        player.animations.add('idle', [8, 9, 10 ,11, 12, 13, 14, 15, 16, 17, 18], 8, true);
        jumpAnimation = player.animations.add('jump', [28, 28, 28, 28, 29, 30 ,31, 32, 33, 31, 32, 33, 34, 35, 36, 8], 8, false);



        player.body.bounce.y = 0;
        player.body.gravity.y = 400;
        player.body.offset.y = -8;

        cursors = game.input.keyboard.createCursorKeys();
        game.camera.follow(player);

        game.add.tween(robot).to( { x: 800 }, 2400,  Phaser.Easing.Linear.None, true);

    }

    function update() {
        game.physics.arcade.collide(player, platforms);
        game.physics.arcade.collide(robots, platforms);

        /*
        * State Transitions
        */
        if (playerState == "JUMP") {
            if (player.body.touching.down) {
                player.body.velocity.x = 0;
            }
            if (player.body.touching.down && jumpAnimation.isFinished) {
                playerState = "IDLE";
            }
        }
        else if (playerState == "JUMP_START") {
            playerState = "JUMP";
        }
        else if (cursors.up.isDown && player.body.touching.down) {
            playerState = "JUMP_START";
        }
        else if (cursors.left.isDown) {
            playerState = "WALK_LEFT";
            playerFacing = "LEFT";
        } 
        else if (cursors.right.isDown) {
            playerState = "WALK_RIGHT";
            playerFacing = "RIGHT";
        } 
        else {
            playerState = "IDLE";
        }

        /*
        * Handle player state
        */
        switch (playerState) {
            case "IDLE":
                player.body.velocity.x = 0;
                player.animations.play('idle');
                break;

            case "WALK_LEFT":
                player.body.velocity.x = -150;
                player.animations.play('left');
                break;

            case "WALK_RIGHT":
                player.body.velocity.x = 150;
                player.animations.play('right');
                break;

            case "JUMP_START":
                player.body.velocity.y = -300;
                player.animations.play('jump')
                break;

            case "JUMP":
                break;

            default:
                throw new Error("Invalid player state")
        }

    }

    return {
        preload,
        create,
        update
    }
}