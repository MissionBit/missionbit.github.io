var preload = function(game){}

preload.prototype = {
	preload: function(){ 
        var loadingBar = this.add.sprite(160,240,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);
        
		this.game.load.image("gametitle","assets/gametitle.png");
		this.game.load.image("play","assets/play.png");
		this.game.load.image("higher","assets/higher.png");
		this.game.load.image("lower","assets/lower.png");
		this.game.load.image("gameover","assets/gameover.png");
        
        this.game.load.spritesheet('player', 'assets/man4.png', 88.57, 104.75);
        this.game.load.image('background', 'assets/scenario.jpg');
        this.game.load.image('hp', 'assets/hearts.png');
        this.game.load.image('enemy', 'assets/bear2.png');
//        this.game.load.image('wall', 'assets/wall.PNG');
        this.game.load.image('missile','assets/laser.png');
        this.game.load.image('platform','assets/ground.png');
        this.game.load.spritesheet('bear','assets/bear3trans.png', 83.333, 111);
        this.game.load.spritesheet('bullet','assets/bullets.gif', 47, 55, 8);
        
        //player bullets https://www.spriters-resource.com/custom_edited/mariocustoms/sheet/18057/
    },

  	create: function(){
		this.game.state.start("GameTitle");
	}
}