var demo = {}; 
var speed = 6; 
var adam;

demo.state0 = function(){};


demo.state0.prototype = {
	preload: function(){
		game.load.image('trees', 'assets/background/treeBG.png');
		game.load.spritesheet('adam', 'assets/spritesheets/adamSpritesheet.png', 240, 370);

	},

	create: function(){
		var tree = game.add.sprite(0, 0, 'trees');
		adam = game.add.sprite(0, 450, 'adam');

	},

	update: function(){
		if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
			 adam.x = adam.x + speed;
		}
		// if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
		// 	adam will move to the left
		// }
		// if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
		// 	adam will move up
		// }
		// if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
		// 	adam will move down
		// }
	}

};