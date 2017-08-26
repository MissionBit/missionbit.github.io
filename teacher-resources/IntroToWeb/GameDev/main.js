var game = new Phaser.Game(1500, 1000, Phaser.AUTO);
game.state.add('state0', demo.state0);
game.state.start('state0');