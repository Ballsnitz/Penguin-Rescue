var Menu1 = function (game) {
};

var snow0;
var snow1;
var snow2;
var food;
var selected = 1;


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

  this.food = game.add.sprite(0, 0, 'level1Food3');

  //  initalise keyboard controls.
  enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
  escKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
  cursors = game.input.keyboard.createCursorKeys();
  


}

Menu1.prototype.update = function () {
  if (enterKey.isDown) {
    musicIntro.stop();
    nextMenu1_2();
  }
  if (escKey.isDown) {
    startMain();
  }
  if (cursors.right.isDown) { this.game.state.start('menu1') };
  //this.food.loadTexture('level1Food3');

}

//nextMenu1_2 = function () {
//  this.game.state.start('menu1_2');
//}
startMain = function () {
  this.game.state.start('MainMenu');
}