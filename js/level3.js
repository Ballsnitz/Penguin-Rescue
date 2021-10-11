

var Level3State = function(game) {
};

/*
 * Add game variables here
 *
 */
var Level3
var Level3State
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
var Level3releaseenemy;
var Level3releaseenemy2;
var Level3releaseenemy3;
var Level3releaseCoin;
var Level3releaseCoin2;
var Level3releaseCoin3;
var platform2;
var platform3;
var platform5;
var platform22;
var platform32;
var platform52;
var Level3releasePlatform2;
var Level3releasePlatform3;
var Level3releasePlatform5;
var Level3releaseGround1;
var Level3releasePlatform22;
var Level3releasePlatform32;
var Level3releasePlatform52;
var Level3releaseGround2;
var Level3releaseGroundEnemy;
 var Invisibleground;
 var Platforms;

/*
 * Create runs once only when Phaser first loads
 * create the game scene by adding objects to the stage
 */

Level3State.prototype.create=function(){
	this.background3=game.add.sprite (0,0,"background3");
	this.background3.width=game.width;
	this.background3.height=game.height;
	
//	this.clouds=game.add.tileSprite(0,0,game.width,game.height,"clouds")
//	this.clouds.y=game.height-this.clouds.height;
	
//	this.mountain1=game.add.tileSprite(0,0,game.width,game.height,"mountains1")
//	this.mountain1.y=game.height-this.mountain1.height;
	this.mountain4=game.add.tileSprite(0,0,game.width,game.height,"mountains4")
//	this.mountain4.width=game.width-this.mountain4.height;
this.mountain4.tileScale.y = 4;
this.mountain4.tileScale.x = 4;
		this.mountain4.autoScroll(-350/4,0);
//	this.mountain1.autoScroll(-150,0);

//	this.clouds.autoScroll(-450,0);
	
	invisibleWater=game.add.sprite (0,1100,"invisibleWater");
	game.physics.arcade.enable(invisibleWater) ;
	invisibleWater.body.allowGravity=false;
	invisibleWater.body.immovable=true;
	
	
	this.groundWater=game.add.tileSprite(0,1075,game.width,game.height,"groundWater")
	this.groundWater.autoScroll(-400,0);
	
	ground1=game.add.sprite (0,1025,"ground1");
	game.physics.arcade.enable(ground1) ;
	ground1.body.allowGravity=false;
	ground1.body.immovable=true;
	ground1.body.velocity.x=-300;
	
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
	Platforms1 = game.add.group();
	
	Level3releasePlatform2()
	Level3releasePlatform3();
	Level3releasePlatform5();
	Level3releasePlatform7();
	Level3releasePlatform10();
	
//	Level3releasePlatform22();
	Level3releasePlatform32();
	Level3releasePlatform52();
//	Level3releasePlatform72();
	Level3releasePlatform102();	
	
	Level3releasePlatform23()
	Level3releasePlatform33();
		Level3releasePlatform333();
	Level3releasePlatform53();
	//		Level3releasePlatform533();
	Level3releasePlatform73();
	Level3releasePlatform103();

    musicC.stop();	
	music3 = this.game.add.audio('L3A');
    music3.play()
		music3.volume = 0.1
	
		polarBearEat = this.game.add.audio('polarBearEat');
	polarBearHurt = this.game.add.audio('polarBearHurt');	
		polarBearHurt.volume = 0.1
}


Level3releasePlatform2 = function(){
	platform2=game.add.sprite(7300,900, "platform2");
	game.physics.arcade.enable(platform2) ;
	Platforms.add(platform2);
	platform2.body.allowGravity=false;
	platform2.body.immovable=true;
	platform2.body.velocity.x=-300;
	
	coin=game.add.sprite(game.rnd.integerInRange(7300, 7400),800, "goldCoin");
	game.physics.arcade.enable(coin) ;
	Coins.add(coin);
	coin.body.allowGravity=false;
	coin.body.immovable=true;
	coin.body.velocity.x=-300;
}
	
	Level3releasePlatform3 = function(){
	platform3=game.add.sprite(2500,900, "platform3");
	game.physics.arcade.enable(platform3) ;
	Platforms.add(platform3);
	platform3.body.allowGravity=false;
	platform3.body.immovable=true;
	platform3.body.velocity.x=-300;
	
	coin2=game.add.sprite(game.rnd.integerInRange(2500, 2700),800, "goldCoin2");
	game.physics.arcade.enable(coin2) ;
	Coins.add(coin2)
	coin2.body.allowGravity=false;
	coin2.body.immovable=true;
	coin2.body.velocity.x=-300;
}
	
	Level3releasePlatform5 = function(){
	platform5=game.add.sprite(4000,700, "platform5");
	game.physics.arcade.enable(platform5) ;
	Platforms.add(platform5);
	platform5.body.allowGravity=false;
	platform5.body.immovable=true;
	platform5.body.velocity.x=-300;
	
	coin3=game.add.sprite(game.rnd.integerInRange(4000, 4200),600, "goldCoin3");
	game.physics.arcade.enable(coin3) ;
	Coins.add(coin3)
	coin3.body.allowGravity=false;
	coin3.body.immovable=true;
	coin3.body.velocity.x=-300;
	}
	
	Level3releasePlatform7 = function(){
	platform7=game.add.sprite(5000,600, "platform7");
	game.physics.arcade.enable(platform7) ;
	Platforms.add(platform7);
	platform7.body.allowGravity=false;
	platform7.body.immovable=true;
	platform7.body.velocity.x=-300;
	
	coin4=game.add.sprite(game.rnd.integerInRange(5000, 5200),500, "goldCoin4");
	game.physics.arcade.enable(coin4) ;
	Coins.add(coin4)
	coin4.body.allowGravity=false;
	coin4.body.immovable=true;
	coin4.body.velocity.x=-300;
	}

	Level3releasePlatform10 = function(){
	platform10=game.add.sprite(3500,950, "platform10");
	game.physics.arcade.enable(platform10) ;
	Platforms.add(platform10);
	platform10.body.allowGravity=false;
	platform10.body.immovable=true;
	platform10.body.velocity.x=-300;
	
	coin5=game.add.sprite(game.rnd.integerInRange(3500, 3700),850, "goldCoin5");
	game.physics.arcade.enable(coin5) ;
	Coins.add(coin5)
	coin5.body.allowGravity=false;
	coin5.body.immovable=true;
	coin5.body.velocity.x=-300;
	}	
	
//	Level3releasePlatform22 = function(){
//	platform22=game.add.sprite(4500,500, "platform2");
//	game.physics.arcade.enable(platform22) ;
//	Platforms.add(platform22);
//	platform22.body.allowGravity=false;
//	platform22.body.immovable=true;
//	platform22.body.velocity.x=-500;
	
//	enemy=game.add.sprite(game.rnd.integerInRange(4500, 4600),400, "enemy");
//	game.physics.arcade.enable(enemy) ;
//	Enemies.add(enemy);
//	enemy.body.allowGravity=false;
//	enemy.body.immovable=true;
//	enemy.body.velocity.x=-500;}
	
	Level3releasePlatform32 = function(){
	platform32=game.add.sprite(2600,900, "platform3");
	game.physics.arcade.enable(platform32) ;
	Platforms.add(platform32);
	platform32.body.allowGravity=false;
	platform32.body.immovable=true;
	platform32.body.velocity.x=-300;
	
//	enemy2=game.add.sprite(game.rnd.integerInRange(3600, 3700),800, "enemy2");
//	game.physics.arcade.enable(enemy2) ;
//	Enemies.add(enemy2)
//	enemy2.body.allowGravity=false;
//	enemy2.body.immovable=true;
//	enemy2.body.velocity.x=-400;
}
	
	Level3releasePlatform52 = function(){
	platform52=game.add.sprite(3000,700, "platform5");
	game.physics.arcade.enable(platform52) ;
	Platforms.add(platform52);
	platform52.body.allowGravity=false;
	platform52.body.immovable=true;
	platform52.body.velocity.x=-300;
	
//	enemy3=game.add.sprite(game.rnd.integerInRange(3100, 3400),600, "enemy3");
//	game.physics.arcade.enable(enemy3) ;
//	Enemies.add(enemy3)
//	enemy3.body.allowGravity=false;
//	enemy3.body.immovable=true;
//	enemy3.body.velocity.x=-500;
	}
	
//	Level3releasePlatform72 = function(){
//	platform72=game.add.sprite(7900,600, "platform7");
//	game.physics.arcade.enable(platform72) ;
//	Platforms.add(platform72);
//	platform72.body.allowGravity=false;
//	platform72.body.immovable=true;
//	platform72.body.velocity.x=-500;
	
//	enemy4=game.add.sprite(game.rnd.integerInRange(7900, 8600),500, "enemy4");
//	game.physics.arcade.enable(enemy4) ;
//	Enemies.add(enemy4)
//	enemy4.body.allowGravity=false;
//	enemy4.body.immovable=true;
//	enemy4.body.velocity.x=-500;	}

	Level3releasePlatform102 = function(){
	platform102=game.add.sprite(5500,800, "platform10");
	game.physics.arcade.enable(platform102) ;
	Platforms.add(platform102);
	platform102.body.allowGravity=false;
	platform102.body.immovable=true;
	platform102.body.velocity.x=-300;
	
	enemy5=game.add.sprite(game.rnd.integerInRange(5800, 6100),700, "enemy5");
	game.physics.arcade.enable(enemy5) ;
	Enemies.add(enemy5)
	enemy5.body.allowGravity=false;
	enemy5.body.immovable=true;
	enemy5.body.velocity.x=-300;
	}	
		
		
	Level3releasePlatform23 = function(){
	platform23=game.add.sprite((game.rnd.integerInRange(3500, 4000)),(game.rnd.integerInRange(900, 600)), "platform2");
	game.physics.arcade.enable(platform23) ;
	Platforms1.add(platform23);
	platform23.body.allowGravity=false;
	platform23.body.immovable=true;
	platform23.body.velocity.x=-700;
	

}
	
	Level3releasePlatform33 = function(){
	platform33=game.add.sprite((game.rnd.integerInRange(4000, 4500)),(game.rnd.integerInRange(900, 500)), "platform3");
	game.physics.arcade.enable(platform33) ;
	Platforms.add(platform33);
	platform33.body.allowGravity=false;
	platform33.body.immovable=true;
	platform33.body.velocity.x=-850;
	

}

	Level3releasePlatform333 = function(){
	platform333=game.add.sprite((game.rnd.integerInRange(3000, 3500)),(game.rnd.integerInRange(900, 500)), "platform3");
	game.physics.arcade.enable(platform333) ;
	Platforms.add(platform333);
	platform333.body.allowGravity=false;
	platform333.body.immovable=true;
	platform333.body.velocity.x=-950;
	
}


	
	Level3releasePlatform53 = function(){
	platform53=game.add.sprite((game.rnd.integerInRange(3000, 3200)),(game.rnd.integerInRange(900, 600)), "platform5");
	game.physics.arcade.enable(platform53) ;
	Platforms1.add(platform53);
	platform53.body.allowGravity=false;
	platform53.body.immovable=true;
	platform53.body.velocity.x=-1000;
	

	}
	
//	Level3releasePlatform533 = function(){
//	platform533=game.add.sprite((game.rnd.integerInRange(4000, 4200)),(game.rnd.integerInRange(900, 600)), "platform5");
//	game.physics.arcade.enable(platform533) ;
//	Platforms1.add(platform533);
//	platform533.body.allowGravity=false;
//	platform533.body.immovable=true;
//	platform533.body.velocity.x=-700;

//	}
	
	Level3releasePlatform73 = function(){
	platform73=game.add.sprite(8000,(game.rnd.integerInRange(900, 800)), "platform7");
	game.physics.arcade.enable(platform73) ;
	Platforms.add(platform73);
	platform73.body.allowGravity=false;
	platform73.body.immovable=true;
	platform73.body.velocity.x=-900;
	

	}

	Level3releasePlatform103 = function(){
	platform103=game.add.sprite(5000,(game.rnd.integerInRange(1010, 900)), "platform10");
	game.physics.arcade.enable(platform103) ;
	Platforms.add(platform103);
	platform103.body.allowGravity=false;
	platform103.body.immovable=true;
	platform103.body.velocity.x=-1000;
	
	}			
		
	Level3State.prototype.update=function()
	{		if(score > 19){
		startComplete();
	}
			if (player.position.x <=1125){
			Level3State.prototype.playerHit;
			}
		game.physics.arcade.collide(player,ground1); 

		game.physics.arcade.overlap(player,Coins,null, this.onCollision,this);
		game.physics.arcade.collide(player,Platforms); 
		game.physics.arcade.collide(player,Platforms1); 
		game.physics.arcade.overlap(player,Enemies,null, this.playerHit,this);
		game.physics.arcade.overlap(player,invisibleWater,null, this.playerHit,this);		
		
		player.body.velocity.x=0;
		
		if(cursors.left.isDown) 
		{player.body.velocity.x=-1100};
	
		if(cursors.right.isDown)
		{player.body.velocity.x=600};
		if(cursors.up.isDown&&player.body.touching.down) {player.body.velocity.y=-2100};
	

			if (platform2.position.x <=-3000){
			platform2.destroy();
			coin.destroy();
			Level3releasePlatform2();
			}		
			
			if (platform3.position.x <=-3000){
			platform3.destroy();
			coin2.destroy();
			Level3releasePlatform3();
			}
			if (platform5.position.x <=-3000){
			platform5.destroy();
			coin3.destroy();
			Level3releasePlatform5();
			}
		
			if (platform7.position.x <=-2500){
			platform7.destroy();
			coin4.destroy();
			Level3releasePlatform7();
			}

			if (platform10.position.x <=-3000){
			platform10.destroy();
			coin5.destroy();
			Level3releasePlatform10();
			}			
		
//			if (platform22.position.x <= -(game.rnd.integerInRange(2000, 5500))){
//			platform22.destroy();
//			enemy.destroy();
//			Level3releasePlatform22();
//			}
			
			if (platform32.position.x <=-600){
			platform32.destroy();
	//		enemy2.destroy();
			Level3releasePlatform32();
			}
			
			if (platform52.position.x <=-3000){
			platform52.destroy();
//			enemy3.destroy();
			Level3releasePlatform52();
			}
//			if (platform72.position.x <= -(game.rnd.integerInRange(3000, 6000))){
//			platform72.destroy();
//			enemy4.destroy();
//			Level3releasePlatform52();	}
	
			if (platform102.position.x <=-3000){
			platform102.destroy();
			enemy5.destroy();
			Level3releasePlatform102();
			}
		
			if (platform23.position.x <=-100){
			platform23.destroy();
		
			Level3releasePlatform23();
			}
			
			if (platform33.position.x <=-300){
			platform33.destroy();
		
			Level3releasePlatform33();
			}
			
			if (platform333.position.x <=-300){
			platform333.destroy();
		
			Level3releasePlatform333();
			}
			
			if (platform53.position.x <=-500){
			platform53.destroy();
		
			Level3releasePlatform53();
			}
			
//				if (platform533.position.x <=-500){
//			platform533.destroy();
//		
//			Level3releasePlatform533();
//			}
			
			if (platform73.position.x <=-2000){
			platform73.destroy();
		
			Level3releasePlatform73();
			}	
			if (platform103.position.x <=-2000){
			platform103.destroy();
		
		//	Level3releasePlatform103();
			}
	
	if(player.position.y >= 1025) {
	player.loadTexture('playerDead');
	player.body.velocity = false;
	sprite2.body.velocity = false;
	game.time.events.add(500 , gameOver3 , this);
   }
		
	}
	
	Level3State.prototype.playerHit = function(sprite1, sprite2) {
		polarBearHurt.play();
    player.loadTexture('playerDead');
	player.body.velocity = false;
	sprite2.body.velocity = false
	onCollision = false
music3.stop();
     game.time.events.add(500 , gameOver3 , this);
}
	
	Level3State.prototype.onCollision=function(sprite1, sprite2){
  polarBearEat.play();
	sprite2.destroy();
		score=score+1;
		scoreText.text='score : '+score;
	}
	
	 gameOver3 = function() {
    this.game.state.start('Menu3');
  }
  startComplete = function() {
	  music3.stop();
    this.game.state.start('MenuComplete');
  }