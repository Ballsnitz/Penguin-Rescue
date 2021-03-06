var MainMenu = function (game) {
};

var clouds;
var snow0;
var snow1;
var snow2;
var muteState;

MainMenu.prototype.create = function () {


  //background
  this.background = game.add.sprite(0, 0, "background");
  this.background.width = game.width;
  this.background.height = game.height;

  // place the ground top before the snopw so the snow overlaps in a pleasing way :)
  ground = game.add.tileSprite(0, 975, game.width, game.height, "groundTop")

  // make is snow!!!
  this.snow0 = game.add.tileSprite(0, 0, game.width, game.height, "snow0")
  this.snow0.autoScroll(-80,+80);
  this.snow1 = game.add.tileSprite(0, 0, game.width, game.height, "snow1")
  this.snow1.autoScroll(-60,+45);
  this.snow2 = game.add.tileSprite(0, 0, game.width, game.height, "snow2")
  this.snow2.autoScroll(-40,+25);

  // this.floor = game.add.tileSprite(0, 1025, game.width, 100, "floor");

  this.adventure = game.add.sprite(0, 0, 'adventure');
  this.adventure.width = game.width;
  this.adventure.height = game.height;

  ground = game.add.tileSprite(0, 975, game.width, game.height, "groundBottom")
  game.physics.arcade.enable(ground);
  ground.body.immovable = true;




  //create the player
  // The player at x:480 and y:440 and adjust its settings
  player = game.add.sprite(600, 830, 'player');
  player.visible = false;


  //  initalise keyboard controls.
  enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
  spaceBar =  game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	aKey =  game.input.keyboard.addKey(Phaser.Keyboard.A);
	dKey =  game.input.keyboard.addKey(Phaser.Keyboard.D);


  //	music1.stop();
  //music2.stop();
  //	music3.stop();
  //	musicComplete.stop();
  musicIntro = this.game.add.audio('intro');
  musicIntro.play();
  musicIntro.volume = 0.1

  // soundButton
  // button = game.add.button(game.world.centerX - -1000, 000, 'muteButton', actionOnClick, this, 2, 1, 0);
  muteState = game.add.sprite(game.world.centerX - -1000, 000, "mute");
  muteState.visible = false;
  button = game.add.button(game.world.centerX - -1000, 000, "muteButton", actionOnClick, this, 2, 1, 0);

  button.onInputOver.add(over, this);
  button.onInputOut.add(out, this);
  button.onInputUp.add(up, this);

  // start button image
  buttonFade = start_btn = game.add.sprite(game.world.centerX -395, game.world.centerY+300, 'startButton');
  buttonFade.alpha = 0.5;
  // fade in
  game.add.tween(buttonFade).to( { alpha: 1 }, 500, Phaser.Easing.Bounce.None, true, 1, 500, true);
}

function up() {
  console.log('button up', arguments);
}
function over() {
  console.log('mute');
}
function out() {
  console.log('button out');
}




/*
 * Update runs continuously. Its the game loop function.
 * Add collision detections and control events here
 */
MainMenu.prototype.update = function () {
  if (enterKey.isDown || spaceBar.isDown) {
    startMenu1();
  }
}

startMenu1 = function () {
  this.game.state.start('Menu1');
}
function actionOnClick() {
  muteState.visible = !muteState.visible;
  if (!this.game.sound.mute) {
    this.game.sound.mute = true
  } else {
    this.game.sound.mute = false;
  }

}
