var PreloadState = function(game) {
};


/*
 * Preload runs before the game starts. Assets such as images and sounds such be preloaded here.
 * A webserver is required to load assets.
 *
 * Also in this function we set game scale so it full browser width.
 */


PreloadState.prototype.preload = function() {


     // set to scale to full browser width
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.parentIsWindow = true;
    //set the background color so can confirm the game renders in the browser
    this.stage.backgroundColor = '#4488cc';

    //preload images & sounds
    //game.load.image('key', 'folder/filename.png');
	game.load.image('player', 'images/player.png');
	game.load.image('playerDead', 'images/player_dead.png');
	game.load.image('playerJump', 'images/player_jump.png');	
	game.load.image('goldCoin', "images/goldCoin.png");
	game.load.image('goldCoin2', "images/goldCoin2.png");
	game.load.image('goldCoin3', "images/goldCoin3.png");
	game.load.image('goldCoin4', "images/goldCoin4.png");
	game.load.image('goldCoin5', "images/goldCoin5.png");
	game.load.image('ground', "images/ground.png");
	game.load.image('ground1', "images/ground1.png")
	game.load.image('ground2', "images/ground2.png")
	game.load.image("background","images/background.jpg");
	game.load.image("background2","images/background2.jpg");
	game.load.image("background3","images/background3.jpg");
    game.load.image("mountains1","images/mountains1.png");
    game.load.image("mountains2","images/mountains2.png");
	game.load.image("mountains3","images/mountains3.png");
	game.load.image("mountains4","images/mountains4.png");
	game.load.image("mountains41","images/mountains4.png");	
	game.load.image("clouds","images/clouds.png");
	game.load.image("clouds1","images/clouds1.png");
	game.load.image('floor', "images/floor.png");
	game.load.image("enemy","images/enemy.png");
	game.load.image("enemy2","images/enemy2.png");
	game.load.image("enemy3","images/enemy3.png");
	game.load.image("enemy4","images/enemy4.png");
	game.load.image("enemy5","images/enemy5.png");
	game.load.image("platform2","images/platform21.png");
	game.load.image("platform3","images/platform31.png");
	game.load.image("platform5","images/platform51.png");
	game.load.image("platform7","images/platform71.png");
	game.load.image("platform10","images/platform101.png");
	game.load.image("youWin","images/youWin.png");
	game.load.image("complete1","images/Complete1.jpg");
	game.load.image("adventure","images/PolarPower.png");
	game.load.image("level1","images/level1.png");
	game.load.image("level2","images/level2.png");
	game.load.image("level3","images/level3.png");
	game.load.image('Invisibleground', 'images/Invisibleground.png');
	game.load.image('invisiblewall500', 'images/invisiblewall500.png');
	game.load.image("groundWater","images/groundWater.png");
	game.load.image("invisibleWater","images/invisibleWater.png");
	game.load.image("mute","images/Mute.png");	
	game.load.image("unMute","images/UnMute.png");	
	game.load.spritesheet("muteButton","images/MuteSheet.png",150,150);	
	
    game.load.atlasJSONHash('hero', 'images/polarRun.png', 'images/polarRun.json');
	
	game.load.audio('intro', 'audio/Intro.mp3');	
	game.load.audio('L1A', 'audio/Level1Audio.mp3');
    game.load.audio('L2A', 'audio/Level2Audio.mp3');
    game.load.audio('L3A', 'audio/Level3Audio.mp3');
	game.load.audio('LCA', 'audio/LevelCompleteAudio.mp3');
    game.load.audio('polarBearEat', 'audio/polarBearEat.mp3');
	game.load.audio('polarBearHurt', 'audio/polarBearHurt.mp3');
    game.load.audio('youWinAudio', 'audio/youWinAudio.mp3');

	
}
PreloadState.prototype.create = function() {
    game.state.start('MainMenu');
}
