
/*
 * initalise Phaser framework with width:960px, height:540px
 */
var game = new Phaser.Game(2436, 1125, Phaser.AUTO, 'gameContainer');
game.state.add('MainMenu', MainMenu);
game.state.add('Menu1',    Menu1);
game.state.add('Menu1_2',  Menu1_2);
game.state.add('Menu1_3',  Menu1_3);
game.state.add('Menu2',    Menu2);
game.state.add('Menu2_2',  Menu2_2);
game.state.add('Menu2_3',  Menu2_3);
game.state.add('Menu3',    Menu3);
game.state.add('Menu3_2',  Menu3_2);
game.state.add('preload',  PreloadState);
game.state.add('level1',   Level1State);
game.state.add('level2',   Level2State);
game.state.add('level3',   Level3State);
game.state.add('MenuComplete', CompleteState);
game.state.add('Fail',     FailState);


game.state.start('preload');


