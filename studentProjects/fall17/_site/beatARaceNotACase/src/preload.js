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
        
        this.game.load.image('player', 'assets/New Piskel (2).png');
        this.game.load.image('finishLine', 'assets/finishLine.png');
        this.game.load.image('gasoline', 'assets/gasoline2.PNG');
        this.game.load.image('enemy', 'assets/New P.png');
	},
  	create: function(){
		this.game.state.start("GameTitle");
	}
}