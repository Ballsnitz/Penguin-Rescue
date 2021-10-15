var Menu2_2 = function (game) {
};

var snow0;
var snow1;
var snow2;
var food;
var selected = 1;


Menu2_2.prototype.create = function () {


  //background
  this.background = game.add.sprite(0, 0, "background2");
  this.background.width = game.width;
  this.background.height = game.height;

  // let is snow, let it snow!
  // this.snow0 = game.add.tileSprite(0, 0, game.width, game.height, "snow0")
  // this.snow0.autoScroll(-80, +80);
  // this.snow1 = game.add.tileSprite(0, 0, game.width, game.height, "snow1")
  // this.snow1.autoScroll(-60, +45);
  // this.snow2 = game.add.tileSprite(0, 0, game.width, game.height, "snow2")
  // this.snow2.autoScroll(-40, +25);

  this.food = game.add.sprite(0, 0, 'level2Enemy2');

  //  initalise keyboard controls.
  enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
  escKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
  cursors = game.input.keyboard.createCursorKeys();
  


}

Menu2_2.prototype.update = function () {
  if (enterKey.isDown) {
    startLevel2();
  }
  if (escKey.isDown) {
    startMain();
  }
  if (cursors.right.isDown) {
    nextMenu2_3();
  }
  if (cursors.left.isDown) {
    nextMenu2_1();
  }
  //this.food.loadTexture('level1Food3');

}

nextMenu2_1 = function () {
  this.game.state.start('Menu2');
}
nextMenu2_2 = function () {
  this.game.state.start('Menu2_2');
}
nextMenu2_3 = function () {
  this.game.state.start('Menu2_3');
}
startMain = function () {
  this.game.state.start('MainMenu');
}
startLevel2 = function () {
  this.game.state.start('level2');
}