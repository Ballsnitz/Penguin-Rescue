
//declare a new state



var Level1State = function(game) {
};

/*
 * Add game variables here
 *
 */
var text;
var graphics;
var hsv;
var timerEvents = [];

/*
 * Create runs once only when Phaser first loads
 * create the game scene by adding objects to the stage
 */
function create ()
{
    text = this.add.text(32, 32);

    timerEvents.push(this.time.addEvent({ delay: 10000, loop: true }));

    hsv = Phaser.Display.Color.HSVColorWheel();

    graphics = this.add.graphics({ x: 240, y: 36 });
}

Level1State.prototype.create=function(){
	// init the keys
	escKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
	// background
	this.background=game.add.sprite (0,0,"background");
	this.background.width=game.width;
	this.background.height=game.height;
	// clouds
	this.clouds=game.add.tileSprite(0,0,game.width,game.height,"clouds")
	this.clouds.y=game.height-this.clouds.height;
	// mountains
	this.mountain1=game.add.tileSprite(0,0,game.width,game.height,"mountains1")
	this.mountain1.y=game.height-this.mountain1.height;
	this.mountain2=game.add.tileSprite(0,0,game.width,game.height,"mountains2")
	this.mountain2.y=game.height-this.mountain2.height;
	this.mountain2.tileScale.y = 4;
	this.mountain2.tileScale.x = 4;
	
	this.mountain1.autoScroll(-150,0);
	this.mountain2.autoScroll(-350/4,0);
	this.clouds.autoScroll(-250,0);
	
	this.ground1=game.add.tileSprite(0,1025,game.width,game.height,"ground1")
	this.ground1.autoScroll(-500,0);
	
	Invisibleground=game.add.sprite (0,1025,"Invisibleground");
	game.physics.arcade.enable(Invisibleground) ;
	Invisibleground.body.allowGravity=false;
	Invisibleground.body.immovable=true;
	
	scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '70px', fill: '#FFFFFF'});
	scoreText.fixedToCamera = true;
	score = 0

	player = game.add.sprite(600, 800, 'player');
	game.physics.arcade.enable(player) ;
	player.body.bounce.y=0.2;
	player.body.gravity.y=5000;
	player.body.collideWorldBounds=true;
	
	
	cursors =game.input.keyboard.createCursorKeys();
	
	Coins = game.add.group();
	Platforms = game.add.group();
	// Enemies = game.add.group();
	InvisibleWalls = game.add.group();
	Platforms1 = game.add.group();	
	
	Level1releasePlatform2()
	Level1releasePlatform3();
	
	
	Level1releasePlatform22()
	Level1releasePlatform32();

	Level1releasePlatform23()
	Level1releasePlatform33();
		
	
	/// Level1releaseGroundEnemy ();
	Level1releaseGroundCoin ();
	Level1releaseGroundCoin2 ();
	Level1releaseGroundCoin3 ();
			
			
    musicIntro.stop();
	music1 = this.game.add.audio('L1A');
    music1.play();
	music1.volume = 0.1
		
		
	polarBearEat = this.game.add.audio('polarBearEat');
	polarBearHurt = this.game.add.audio('polarBearHurt');	
	polarBearHurt.volume = 0.1

	// init the timer!
	// Timer adapted from <https://phaser.io/examples/v3/view/time/multiple-timers#> //
}


Level1releasePlatform2 = function(){
	platform2=game.add.sprite(3000,game.rnd.integerInRange(850, 650), "platform2");
	game.physics.arcade.enable(platform2) ;
	Platforms.add(platform2);
	platform2.body.allowGravity=false;
	platform2.body.immovable=true;
	platform2.body.velocity.x=-500;
	
	IW1 =game.add.sprite(3200,000, "invisiblewall500");
	game.physics.arcade.enable(IW1) ;
	InvisibleWalls.add(IW1);
	IW1.visable = false;
//	IW1.body.allowGravity=false;
	IW1.body.immovable=true;
	IW1.body.velocity.x=-500;
	
	coin=game.add.sprite(3100,400, "goldCoin2");
	game.physics.arcade.enable(coin) ;
	Coins.add(coin);
//	coin.body.allowGravity=false;
//	coin.body.immovable=true;
	coin.body.velocity.y=500;
}
	


Level1releasePlatform3 = function(){
	platform3=game.add.sprite(4000,game.rnd.integerInRange(850, 650), "platform3");
	game.physics.arcade.enable(platform3) ;
	Platforms.add(platform3);
	platform3.body.allowGravity=false;
	platform3.body.immovable=true;
	platform3.body.velocity.x=-500;
	
	IW2 =game.add.sprite(4200,000, "invisiblewall500");
	game.physics.arcade.enable(IW2) ;
	InvisibleWalls.add(IW2);
	IW2.visable = false;
//	IW2.body.allowGravity=false;
	IW2.body.immovable=true;
	IW2.body.velocity.x=-500;
	
	coin2=game.add.sprite(4100,400, "goldCoin");
	game.physics.arcade.enable(coin2) ;
	Coins.add(coin2);
//	coin2.body.allowGravity=false;
//	coin2.body.immovable=true;
	coin2.body.velocity.y=500;
}



	
	
Level1releasePlatform22 = function(){
	platform22=game.add.sprite(6000,game.rnd.integerInRange(950, 850), "platform2");
	game.physics.arcade.enable(platform22) ;
	Platforms.add(platform22);
	platform22.body.allowGravity=false;
	platform22.body.immovable=true;
	platform22.body.velocity.x=-500;
	
	IW3 =game.add.sprite(6200,000, "invisiblewall500");
	game.physics.arcade.enable(IW3) ;
	InvisibleWalls.add(IW3);
	IW3.visable = false;
//	IW3.body.allowGravity=false;
	IW3.body.immovable=true;
	IW3.body.velocity.x=-500;
	
	// removed enemy spawn //
	
	// enemy=game.add.sprite(6100,400, "enemy");
	// game.physics.arcade.enable(enemy) ;
	// Enemies.add(enemy);
//	enemy.body.allowGravity=false; // this line was disabled in original source
//	enemy.body.immovable=true; // this line was disabled in original source
	// enemy.body.velocity.y=500;
	//                     */
}
	
Level1releasePlatform32 = function(){
	platform32=game.add.sprite(5000,game.rnd.integerInRange(750, 600), "platform3");
	game.physics.arcade.enable(platform32) ;
	Platforms.add(platform32);
	platform32.body.allowGravity=false;
	platform32.body.immovable=true;
	platform32.body.velocity.x=-500;
	
	IW4 =game.add.sprite(5300,000, "invisiblewall500");
	game.physics.arcade.enable(IW4) ;
	InvisibleWalls.add(IW4);
	IW4.visable = false;
//	IW4.body.allowGravity=false;
	IW4.body.immovable=true;
	IW4.body.velocity.x=-500;
	
	// removed enemy spawn //

	// enemy2=game.add.sprite(5000,400, "enemy2");
	// game.physics.arcade.enable(enemy2) ;
	// Enemies.add(enemy2);
//	enemy2.body.allowGravity=false; // this line was disabled in original source
//	enemy2.body.immovable=true; // this line was disabled in original source
	// enemy2.body.velocity.y=500;
	//** */
}
	

	//** */
	// Level1releaseGroundEnemy = function(){
	// enemy4 = game.add.sprite(game.rnd.integerInRange(2500, 6000),925, "enemy4");
	// game.physics.arcade.enable(enemy4) ;
	// Enemies.add(enemy4);
	// enemy4.body.allowGravity=false;
	// enemy4.body.immovable=true;
	// enemy4.body.velocity.x=-500;
	// }
	//** */
	
	
	
	
	Level1releaseGroundCoin = function(){
	coin4 = game.add.sprite(game.rnd.integerInRange(2500, 6000),925, "goldCoin4");
	game.physics.arcade.enable(coin4) ;
	Coins.add(coin4);
	coin4.body.allowGravity=false;
	coin4.body.immovable=true;
	coin4.body.velocity.x=-500;
	}

	Level1releaseGroundCoin2 = function(){
	coin3 = game.add.sprite(game.rnd.integerInRange(2500, 6000),925, "goldCoin");
	game.physics.arcade.enable(coin3) ;
	Coins.add(coin3);
	coin3.body.allowGravity=false;
	coin3.body.immovable=true;
	coin3.body.velocity.x=-500;
	}
	Level1releaseGroundCoin3 = function(){
	coin5 = game.add.sprite(game.rnd.integerInRange(2500, 6000),925, "goldCoin2");
	game.physics.arcade.enable(coin5) ;
	Coins.add(coin5);
	coin5.body.allowGravity=false;
	coin5.body.immovable=true;
	coin5.body.velocity.x=-500;
	}
	
	Level1releasePlatform23 = function(){
	platform23=game.add.sprite((game.rnd.integerInRange(3500, 4000)),(game.rnd.integerInRange(900, 600)), "platform2");
	game.physics.arcade.enable(platform23) ;
	Platforms1.add(platform23);
	platform23.body.allowGravity=false;
	platform23.body.immovable=true;
	platform23.body.velocity.x=-800;
	

}
	
	Level1releasePlatform33 = function(){
	platform33=game.add.sprite((game.rnd.integerInRange(4000, 4500)),(game.rnd.integerInRange(900, 500)), "platform3");
	game.physics.arcade.enable(platform33) ;
	Platforms1.add(platform33);
	platform33.body.allowGravity=false;
	platform33.body.immovable=true;
	platform33.body.velocity.x=-750;
	

}	
	
	Level1State.prototype.update=function()
	{

		


		// win condition
		if(score > 9){
		startMenu2();
		}
		
		game.physics.arcade.collide(player,Invisibleground); 
		game.physics.arcade.overlap(player,Coins,null, this.onCollision,this);
		game.physics.arcade.collide(player,Platforms); 
		game.physics.arcade.collide(player,Platforms1);
		// game.physics.arcade.overlap(player,Enemies,null, this.playerHit,this);
		game.physics.arcade.collide(Coins, Platforms); 
		game.physics.arcade.collide(Coins, InvisibleWalls); 
		game.physics.arcade.collide(coin,Invisibleground); 
		// game.physics.arcade.collide(Enemies, Platforms); 
		// game.physics.arcade.collide(Enemies, InvisibleWalls); 
		
		
		player.body.velocity.x=0;
		if(cursors.left.isDown) 
		{player.body.velocity.x=-1100};
		if(cursors.right.isDown)
		{player.body.velocity.x=600};
		if(cursors.up.isDown&&player.body.touching.down) {
		player.loadTexture('playerJump');
		player.body.velocity.y=-2100
		player.loadTexture('player')
		};
		if(escKey.isDown){startMain();} //exit game
//		if else {player.loadTexture('player')};


			
			if (platform2.position.x <= -(game.rnd.integerInRange(1000, 3000))){
			platform2.destroy();
			coin.destroy();
			Level1releasePlatform2();
			}
			
			if (platform3.position.x <= -(game.rnd.integerInRange(1000, 3000))){
			platform3.destroy();
			coin2.destroy();
			Level1releasePlatform3();
			}			
			
			if (platform23.position.x <=-2050){
			platform23.destroy();
		
			Level1releasePlatform23();
			}
			
			if (platform33.position.x <=-5000){
			platform33.destroy();
		
			Level1releasePlatform33();
			}
			
			if (coin4.position.x <= -1000){
			coin4.destroy();
			Level1releaseGroundCoin();
			}	
			if (coin3.position.x <= -1000){
			coin3.destroy();
			Level1releaseGroundCoin2();
			}	
			if (coin5.position.x <= -1000){
			coin5.destroy();
			Level1releaseGroundCoin3();
			}	
	
	if(player.position.y >= 1025) {
	player.loadTexture('playerDead');
	player.body.velocity = false;
	sprite2.body.velocity = false;
	game.time.events.add(500 , gameOver2 , this);
   }
		
	}
	
	Level1State.prototype.playerHit = function(sprite1, sprite2) {
	polarBearHurt.play();
      //change sprite image
    player.loadTexture('playerDead');
	player.body.velocity = false;
	sprite2.body.velocity = false
	onCollision = false
      //go to gameover after a few miliseconds
	        //stop moving to the right
	music1.stop();
     game.time.events.add(500 , gameOver1 , this);
}
	
	Level1State.prototype.onCollision=function(sprite1, sprite2){
  polarBearEat.play();	
	sprite2.destroy();
		score=score+1;
		scoreText.text='score : '+score;
	}
	
	 gameOver1 = function() {
    this.game.state.start('Menu1');
  }
  startMenu2 = function() {
	  music1.stop();
    this.game.state.start('Menu2');
  }