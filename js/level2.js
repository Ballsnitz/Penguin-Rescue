
//declare a new state
var Level2State = function(game) {
};

/*
 * Add game variables here
 *
 */
var level2
var Level2State
var player;
var playerDead
var ground;
var ground1;
var ground2;
var goldCoin, scoreText;
var goldCoin2, scoreText;
var goldCoin3, scoreText;
var score=0;
var scoreText;
var enemy;
var spawnAllowed = true;
var enemyGroup;
var timer = 0; 
var total = 0; 
var coin, scoreText;
var coins = [];
var coinNumber = 0;
var Level2releaseenemy;
var Level2releaseenemy2;
var Level2releaseenemy3;
var Level2releaseCoin;
var Level2releaseCoin2;
var Level2releaseCoin3;
var platform2;
var platform3;
var platform5;
var platform22;
var platform32;
var platform52;
var Level2releasePlatform2;
var Level2releasePlatform3;
var Level2releasePlatform5;
var Level2releaseGround1;
var Level2releasePlatform22;
var Level2releasePlatform32;
var Level2releasePlatform52;
var Level2releaseGround2;
var Level2releaseGroundEnemy;
 var Invisibleground;
 var Platforms;

/*
 * Create runs once only when Phaser first loads
 * create the game scene by adding objects to the stage
 */

Level2State.prototype.create=function(){
	this.background2=game.add.sprite (0,0,"background2");
	this.background2.width=game.width;
	this.background2.height=game.height;
	
//	this.clouds1=game.add.tileSprite(0,0,game.width,game.height,"clouds1")
//	this.clouds1.y=game.height-this.clouds1.height;
	
//	this.mountain1=game.add.tileSprite(0,0,game.width,game.height,"mountains1")
//	this.mountain1.y=game.height-this.mountain1.height;
	this.mountain3=game.add.tileSprite(0,0,game.width*4,game.height*4,"mountains3")
//	this.mountain3.y=game.height-this.mountain3.height;
this.mountain3.tileScale.y = 4;
this.mountain3.tileScale.x = 4;
this.mountain3.autoScroll(-350/4,0);
//	this.mountain1.autoScroll(-150,0);

//	this.clouds1.autoScroll(-250,0);
	
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
	Enemies = game.add.group();
	
	Level2releasePlatform2()
	Level2releasePlatform3();
	Level2releasePlatform5();
	
	Level2releasePlatform22()
	Level2releasePlatform32();
	Level2releasePlatform52();
	
	Level2releaseGroundEnemy ();
	Level2releaseGroundCoin ();

	  musicC.stop();	
	music2 = this.game.add.audio('L2A');
    music2.play()
		music2.volume = 0.1
	
		polarBearEat = this.game.add.audio('polarBearEat');
	polarBearHurt = this.game.add.audio('polarBearHurt');	
		polarBearHurt.volume = 0.1
	
}



Level2releasePlatform2 = function(){
	platform2=game.add.sprite(2500,800, "platform2");
	game.physics.arcade.enable(platform2) ;
	Platforms.add(platform2);
	platform2.body.allowGravity=false;
	platform2.body.immovable=true;
	platform2.body.velocity.x=-500;
	
	coin=game.add.sprite(game.rnd.integerInRange(2500, 2600),700, "goldCoin");
	game.physics.arcade.enable(coin) ;
	Coins.add(coin);
	coin.body.allowGravity=false;
	coin.body.immovable=true;
	coin.body.velocity.x=-500;
}
	
	Level2releasePlatform3 = function(){
	platform3=game.add.sprite(3000,500, "platform3");
	game.physics.arcade.enable(platform3) ;
		Platforms.add(platform3);
	platform3.body.allowGravity=false;
	platform3.body.immovable=true;
	platform3.body.velocity.x=-500;
	
	coin2=game.add.sprite(game.rnd.integerInRange(3000, 3300),400, "goldCoin2");
	game.physics.arcade.enable(coin2) ;
	Coins.add(coin2)
	coin2.body.allowGravity=false;
	coin2.body.immovable=true;
	coin2.body.velocity.x=-500;
}
	
	Level2releasePlatform5 = function(){
	platform5=game.add.sprite(3500,700, "platform5");
	game.physics.arcade.enable(platform5) ;
	Platforms.add(platform5);
	platform5.body.allowGravity=false;
	platform5.body.immovable=true;
	platform5.body.velocity.x=-500;
	
	coin3=game.add.sprite(game.rnd.integerInRange(3500, 4000),600, "goldCoin3");
	game.physics.arcade.enable(coin3) ;
	Coins.add(coin3)
	coin3.body.allowGravity=false;
	coin3.body.immovable=true;
	coin3.body.velocity.x=-500;
	}
	
	Level2releasePlatform22 = function(){
	platform22=game.add.sprite(4500,500, "platform2");
	game.physics.arcade.enable(platform22) ;
	Platforms.add(platform22);
	platform22.body.allowGravity=false;
	platform22.body.immovable=true;
	platform22.body.velocity.x=-500;
	
	enemy=game.add.sprite(4600,400, "enemy");
	game.physics.arcade.enable(enemy) ;
	Enemies.add(enemy);
	enemy.body.allowGravity=false;
	enemy.body.immovable=true;
	enemy.body.velocity.x=-500;
}
	
	Level2releasePlatform32 = function(){
	platform32=game.add.sprite(8500,700, "platform3");
	game.physics.arcade.enable(platform32) ;
		Platforms.add(platform32);
	platform32.body.allowGravity=false;
	platform32.body.immovable=true;
	platform32.body.velocity.x=-500;
	
	enemy2=game.add.sprite(game.rnd.integerInRange(8700, 8800),600, "enemy2");
	game.physics.arcade.enable(enemy2) ;
	Enemies.add(enemy2)
	enemy2.body.allowGravity=false;
	enemy2.body.immovable=true;
	enemy2.body.velocity.x=-500;
}
	
	Level2releasePlatform52 = function(){
	platform52=game.add.sprite(5500,900, "platform5");
	game.physics.arcade.enable(platform52) ;
	Platforms.add(platform52);
	platform52.body.allowGravity=false;
	platform52.body.immovable=true;
	platform52.body.velocity.x=-500;
	
	enemy3=game.add.sprite(game.rnd.integerInRange(5700, 6000),800, "enemy3");
	game.physics.arcade.enable(enemy3) ;
	Enemies.add(enemy3)
	enemy3.body.allowGravity=false;
	enemy3.body.immovable=true;
	enemy3.body.velocity.x=-500;
	}
	
	Level2releaseGroundEnemy = function(){
	enemy4 = game.add.sprite(game.rnd.integerInRange(2500, 3000),925, "enemy4");
	game.physics.arcade.enable(enemy4) ;
	Enemies.add(enemy4);
	enemy4.body.allowGravity=false;
	enemy4.body.immovable=true;
	enemy4.body.velocity.x=-500;
	
	Level2releaseGroundCoin = function(){
	coin4 = game.add.sprite(game.rnd.integerInRange(2500, 4000),925, "goldCoin4");
	game.physics.arcade.enable(coin4) ;
	Coins.add(coin4);
	coin4.body.allowGravity=false;
	coin4.body.immovable=true;
	coin4.body.velocity.x=-500;
	}
}
	
	
	Level2State.prototype.update=function()
	{
		if(score > 29){
		startMenu3();
	}

		
		game.physics.arcade.collide(player,Invisibleground); 
		game.physics.arcade.overlap(player,Coins,null, this.onCollision,this);
		game.physics.arcade.collide(player,Platforms); 
		game.physics.arcade.overlap(player,Enemies,null, this.playerHit,this);
		
		player.body.velocity.x=0;
		
		if(cursors.left.isDown) 
		{player.body.velocity.x=-1100};
	
		if(cursors.right.isDown)
		{player.body.velocity.x=600};
		if(cursors.up.isDown&&player.body.touching.down) {player.body.velocity.y=-2100};
	
			if (platform2.position.x <= -(game.rnd.integerInRange(1500, 2000))){
			platform2.destroy();
			coin.destroy();
			Level2releasePlatform2();
			}
			
			if (platform3.position.x <= -(game.rnd.integerInRange(1000, 1500))){
			platform3.destroy();
			coin2.destroy();
			Level2releasePlatform3();
			}
			if (platform5.position.x <= -(game.rnd.integerInRange(800, 1300))){
			platform5.destroy();
			coin3.destroy();
			Level2releasePlatform5();
			}
		
		
		
			if (platform22.position.x <= -(game.rnd.integerInRange(1000, 1500))){
			platform22.destroy();
			enemy.destroy();
			Level2releasePlatform22();
			}
			
			if (platform32.position.x <= -(game.rnd.integerInRange(900, 1400))){
			platform32.destroy();
			enemy2.destroy();
			Level2releasePlatform32();
			}
			
			if (platform52.position.x <= -(game.rnd.integerInRange(1000, 1500))){
			platform52.destroy();
			enemy3.destroy();
			Level2releasePlatform52();
			}
			
			if (enemy4.position.x <= -2000){
			enemy4.destroy();
			Level2releaseGroundEnemy();
			}
	

			if (coin4.position.x <= -1000){
			coin4.destroy();
			Level2releaseGroundCoin();
			}	
	
	if(player.position.y >= 1025) {
	player.loadTexture('playerDead');
	player.body.velocity = false;
	sprite2.body.velocity = false;
	game.time.events.add(500 , gameOver2 , this);
   }
		
	}
	
	Level2State.prototype.playerHit = function(sprite1, sprite2) {
		polarBearHurt.play();
      //change sprite image
    player.loadTexture('playerDead');
	player.body.velocity = false;
	sprite2.body.velocity = false
	onCollision = false
      //go to gameover after a few miliseconds
	        //stop moving to the right
 music2.stop();
     game.time.events.add(500 , gameOver2 , this);
}
	
	Level2State.prototype.onCollision=function(sprite1, sprite2){
  polarBearEat.play();
	sprite2.destroy();
		score=score+1;
		scoreText.text='score : '+score;
	}
	
	 gameOver2 = function() {
    this.game.state.start('Menu2');
  }
  startMenu3 = function() {
	  music2.stop();
    this.game.state.start('Menu3');
	
  }