var CompleteState = function(game) {
};


CompleteState.prototype.create = function() {

      	        //complete
        //

		
	this.clouds=game.add.tileSprite(0,0,game.width,game.height,"clouds")
	this.clouds.y=game.height-this.clouds.height;
	this.clouds.autoScroll(-450,0);	
    

		this.complete1 = game.add.sprite(0,0,'complete1');
	    this.complete1.width=game.width;
        this.complete1.height=game.height;
		
	    this.youWin=game.add.sprite(0,0,"youWin");
        this.youWin.width=game.width;
        this.youWin.height=game.height;


	this.groundWater=game.add.tileSprite(0,1075,game.width,game.height,"groundWater")
	this.groundWater.autoScroll(-100,0);
	


      //  initalise keyboard controls.
		enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);


	musicComplete = this.game.add.audio('LCA');
    musicComplete.play();
		musicComplete.volume = 0.1

}


/*
 * Update runs continuously. Its the game loop function.
 * Add collision detections and control events here
 */
CompleteState.prototype.update = function() {

if(enterKey.isDown){
	   startMain();
   }
}

    startMain = function() {
		musicComplete.stop();
    this.game.state.start('MainMenu');
  }