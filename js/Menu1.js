var Menu1 = function (game) {
};

var snow0;
var snow1;
var snow2;


Menu1.prototype.create = function () {

  //background
  this.background = game.add.sprite(0, 0, "background");
  this.background.width = game.width;
  this.background.height = game.height;

  // let is snow, let it snow!
  this.snow0 = game.add.tileSprite(0, 0, game.width, game.height, "snow0")
  this.snow0.autoScroll(-80, +80);
  this.snow1 = game.add.tileSprite(0, 0, game.width, game.height, "snow1")
  this.snow1.autoScroll(-60, +45);
  this.snow2 = game.add.tileSprite(0, 0, game.width, game.height, "snow2")
  this.snow2.autoScroll(-40, +25);

  // this.floor = game.add.tileSprite(0, 1025, game.width, 100, "floor");

  this.level1 = game.add.sprite(0, 0, 'level1');
  this.level1.width = game.width;
  this.level1.height = game.height;



  ground = game.add.sprite(0, 1025, 'ground');
  game.physics.arcade.enable(ground);
  ground.body.immovable = true;




  //create the player
  // The player at x:480 and y:440 and adjust its settings
  // player = game.add.sprite(600, 830, 'player');
  // player.visible = false;


  //  initalise keyboard controls.
  enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
  escKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);


  //	music1.stop();
  //	music2.stop();
  //	music3.stop();


}


/*
 * Update runs continuously. Its the game loop function.
 * Add collision detections and control events here
 */
Menu1.prototype.update = function () {
  if (enterKey.isDown) {
    musicIntro.stop();
    startGame1();
  }
  if (escKey.isDown) {
    startMain();
  }
}
startGame1 = function () {
  this.game.state.start('Menu1_2');
}
startMain = function () {
  this.game.state.start('MainMenu');
}