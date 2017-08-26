var preload = function(game){}

preload.prototype = {
	preload: function() {
		console.log("in preload of preload.js");
		var loadingBar = this.add.sprite(160,240,"loading");
		loadingBar.anchor.setTo(0.5,0.5);
		
		this.game.load.spritesheet("numbers","assets/numbers.png",100,100);
		console.log("loaded numbers");
		this.game.load.image("gametitle","assets/gametitle.png");
		console.log("loaded gametitle");
		this.game.load.image("play","assets/play.png");
		console.log("loaded play");
		this.game.load.image("higher","assets/higher.png");
		console.log("loaded higher");
		this.game.load.image("lower","assets/lower.png");
		console.log("loaded lower");
		this.game.load.image("gameover","assets/gameover.png");
		console.log("loaded gameover");
		this.load.setPreloadSprite(loadingBar);
	},
	create: function(){
		console.log("Starting GameTitle");
		this.temp = this.add.sprite(100,100,"play");
		this.game.state.start("GameTitle");
	}
}