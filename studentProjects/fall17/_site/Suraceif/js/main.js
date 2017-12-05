var game = new Phaser.Game(1440, 760, Phaser.AUTO, '');

game.state.add("running", running(game));
//game.states.add("gameover", gameover(game));

game.state.start("running");