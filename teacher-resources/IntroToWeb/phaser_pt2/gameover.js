var gameover = function(game){}
 
gameover.prototype = {
	init: function(score){
		alert("You scored: "+score)
	},
  	create: function(){
  		var gameOverTitle = this.game.add.sprite(250,50,"gameover");
		gameOverTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(250,100,"play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
	},
	playTheGame: function(){
		this.game.state.start("state1");
	}
}