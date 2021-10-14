var Menu2_2 = function (game) {
};


Menu2_2.prototype.create = function () {

  //background
  //
  this.background2 = game.add.sprite(0, 0, "background2");
  this.background2.width = game.width;
  this.background2.height = game.height;

  //	this.clouds1=game.add.tileSprite(0,0,game.width,game.height,"clouds1");
  //      this.clouds1.y=game.height-this.clouds1.height;
  //	this.clouds1.autoScroll(-250,0);		



  //mountains

  //      this.mountain1=game.add.sprite(0,0,"mountains1");
  //      this.mountain1.width=game.width;
  //     this.mountain1.height=game.height;

  this.mountain3 = game.add.sprite(0, 0, "mountains3");
  this.mountain3.width = game.width;
  this.mountain3.height = game.height;


  this.floor = game.add.tileSprite(0, 1025, game.width, 100, "floor");

  this.level2 = game.add.sprite(0, 0, 'level2');
  this.level2.width = game.width;
  this.level2.height = game.height;



  ground = game.add.sprite(0, 1025, 'ground');
  game.physics.arcade.enable(ground);
  ground.body.immovable = true;




  //create the player
  // The player at x:480 and y:440 and adjust its settings
  player = game.add.sprite(600, 830, 'player');


  //  initalise keyboard controls.
  enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
  escKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);

  //	music1.stop();
  //	music2.stop();
  //	music3.stop();
  musicC = this.game.add.audio('LCA');
  musicC.play();


}


/*
 * Update runs continuously. Its the game loop function.
 * Add collision detections and control events here
 */
Menu2_2.prototype.update = function () {
  if (enterKey.isDown) {
    musicIntro.stop();
    startGame2();
  }
  if (escKey.isDown) {
    startMain();
  }
}
startGame2 = function () {
  this.game.state.start('level2');
}
startMain = function () {
  this.game.state.start('MainMenu');
}