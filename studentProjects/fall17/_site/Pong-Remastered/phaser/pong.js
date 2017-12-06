var game = new Phaser.Game('100%','90%',Phaser.AUTO,'',{preload:preload,create: create,update:update,render:render,resize:resize});

var paddle1;
var paddle2;
var ball;
var ball_launched;
var ball_velocity;
var score1;
var score2;
var score2_text;
var score1_text;
var win_text;
var showDebug = false;
var invisible_ball;
    function preload(){
        game.load.image('paddle','assets/paddle.png');
        game.load.image('ball','assets/ball.png');

        game.load.bitmapFont('font','assets/font.png','assets/font.xml');
        game.load.audio('boop','assets/boop.wav');
        game.load.audio('boop2','assets/boop2.wav');
        game.load.audio('death','assets/death.wav');
    }

    function create(){

        ball_launched = false;
        ball_velocity = game.world.width/2;

        paddle1 = create_paddle(0, game.world.centerY);
        paddle2 = create_paddle(game.world.width - 8 , game.world.centerY);
        ball = create_ball(game.world.centerX,game.world.centerY,false);
        invisible_ball = create_ball(game.world.centerX,game.world.centerY,true);
        game.input.onTap.add(launch_ball,this);

        score1_text = game.add.bitmapText(128,128,'font','0',64);
        score2_text = game.add.bitmapText(game.world.width-128,128,'font','0',64);

        score1 = 0;
        score2 = 0;
    }

    function update(){
        if(check_sounds_loaded()){
            game.ready = true;
            game.start;
        }
        score1_text.text = score1;
        score2_text.text = score2;

        control_paddle(paddle1,game.input.y);

        if(game.physics.arcade.collide(paddle1,ball)){
            game.sound.play('boop');
            invisible_ball.x = ball.body.x;
            invisible_ball.y = ball.body.y;
            ball.body.velocity.x += paddle1.body.velocity.x;
            invisible_ball.body.velocity.setTo(ball.body.velocity.x*2,ball.body.velocity.y*2);
            
        }
        if(invisible_ball.body.blocked.right){
                invisible_ball.body.velocity.setTo(0,0);
                if(!paddle2.body.hitTest(paddle2.body.x,invisible_ball.body.y)){
                    var directionMultiplier = invisible_ball.body.y >= paddle2.body.y ? 1 : -1;
                    paddle2.body.velocity.setTo(directionMultiplier*Math.abs(ball.body.velocity.y));

                }
                else{
                    paddle2.body.velocity.y = 0;
                    invisible_ball.x = game.world.centerX;
                    invisible_ball.y = game.world.centerY;                  
                }
                               
            }

        if(game.physics.arcade.collide(paddle2,ball)){
            game.sound.play('boop2');
            ball.body.velocity.x+=20;
        }

        if(ball.body.blocked.left){
            score2+=1;
            game.sound.play('death');
            launch_ball();
        }
        else if(ball.body.blocked.right){
            score1+=1;
            game.sound.play('death');
            launch_ball();
        }
        
    }

    function render(){
        if(showDebug){
            game.debug.body(paddle1);
            game.debug.bodyInfo(invisible_ball,32,432);
            game.debug.body(paddle2);
            game.debug.body(invisible_ball);
        }
    }
    //On resize we will change the positions and sizes of things.
    function resize(){
        
    }

    function create_paddle(x,y){
        var paddle = game.add.sprite(x,y,'paddle');
        
        
        game.physics.arcade.enable(paddle);
        paddle.body.syncBounds = true;
        paddle.anchor.setTo(0.5,0.5);
        paddle.scale.setTo(.5,game.world.height/5/256);
        paddle.body.collideWorldBounds = true;
        paddle.body.immovable = true;
        return paddle;
    }

    function control_paddle(paddle,y){
        paddle.y = y;
        if(paddle.y < paddle.height / 2){
            paddle.y = paddle.height / 2;
        }
        else if(paddle.y > game.world.height - paddle.height / 2){
            paddle.y = game.world.height - paddle.height / 2;
        }
    }

    function create_ball(x,y,invisible){
        var newBall = game.add.sprite(x,y,'ball');
        newBall.anchor.setTo(0.5,0.5);
        game.physics.arcade.enable(newBall);
        newBall.body.collideWorldBounds = true;
        newBall.body.bounce.setTo(1.1,1.1);
        newBall.renderable = !invisible;


        return newBall;
    }

    function launch_ball(){
        if(ball_launched){
            ball.x = game.world.centerX;
            ball.y = game.world.centerY;
            ball.body.velocity.setTo(0,0);
            ball_launched = false;
        }
        else{
            var direction = Math.floor((Math.random()*2))+1 == 1 ? -1 : 1;
            ball.body.velocity.x = -ball_velocity;
            ball.body.velocity.y = direction*ball_velocity+Math.floor(Math.random()*10);
            ball_launched = true;
        }
        paddle2.body.velocity.setTo(0);
        paddle2.body.maxVelocity.x = 0;
        paddle2.y = game.world.height /2;

    }

    function check_sounds_loaded(){
    var keys = game.cache.getKeys(Phaser.Cache.SOUND);
    keys.forEach(function(element) {
        if(!game.cache.isSoundDecoded(element)){
            return false;
        }

    }, this);
        return true;
    }
