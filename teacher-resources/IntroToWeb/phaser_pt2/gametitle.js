var gametitle = function(game){}
 
gametitle.prototype = {
  	create: function(){
//        add game title image
		var gameTitle = this.game.add.sprite(250,50,"gametitle");
        gameTitle.scale.setTo(.3,.3);
		gameTitle.anchor.setTo(0.5,0.5);
        
//        create a play button
		var playButton = this.game.add.button(250,100,"play",this.playTheGame,this);
        playButton.scale.setTo(.5,.5);
		playButton.anchor.setTo(0.5,0.5);
	},
	playTheGame: function(){
		this.game.state.start("state1");
	}
}