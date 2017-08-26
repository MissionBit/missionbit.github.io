var boot = function(game){
	console.log("%cStarting my awesome game", "color:white: background:red");
};

boot.prototype = {
	preload: function(){
		this.game.load.image("loading", "assets/loading.png");
		console.log("in preload of boot.js")
	},
	create: function(){
		console.log("in create of boot.js");
		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.refresh();
		this.game.state.start("Preload");
	}
}