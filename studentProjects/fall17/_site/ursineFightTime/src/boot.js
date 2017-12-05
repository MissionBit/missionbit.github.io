var boot = function(game){
	console.log("%cStarting my awesome game", "color:white; background:red");
};
  
boot.prototype = {
	preload: function(){
        this.game.load.image("loading","assets/loading.png"); 
	},
  	create: function(){
		this.scale.pageAlignHorizontally = true;
		this.game.state.start("Preload");
	}
}