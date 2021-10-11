var Menu3 = function(game) {
};


Menu3.prototype.create = function() {

      	        //background
        //
        this.background3=game.add.sprite(0,0,"background3");
        this.background3.width=game.width;
        this.background3.height=game.height;

		
//				this.clouds=game.add.sprite(0,0,"clouds");
//		this.clouds.width=game.width;
 //       this.clouds.height=game.height;
		
        //mountains
        	
  //      this.mountain1=game.add.sprite(0,0,"mountains1");
   //     this.mountain1.width=game.width;
  //      this.mountain1.height=game.height;
//
        this.mountain4=game.add.sprite(0,0,"mountains4");
        this.mountain4.width=game.width;
        this.mountain4.height=game.height;


		
        this.floor=game.add.tileSprite(0,1025,game.width,100,"floor");

		this.level3 = game.add.sprite(0,0,'level3');
	    this.level3.width=game.width;
        this.level3.height=game.height;
	

		
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
Menu3.prototype.update = function() {
if (enterKey.isDown)
   {
	       musicIntro.stop();
     startGame3();
   }
if(escKey.isDown){
	   startMain();
   }
}
  startGame3 = function() {
    this.game.state.start('level3');
  }
    startMain = function() {
    this.game.state.start('MainMenu');
  }