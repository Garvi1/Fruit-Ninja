var sword,fruit,monster,fruitGroup,EnemyGroup,
score,r,randomfruit;
var swordImage,fruit1,fruit2,fruit3,fruit4,
monsterImage,gameOverImage,gameOver;

var Play = 1; 
var END  = 0;
var gameState = Play;

function preload(){
 swordImage = loadImage("sword.png"); 
 monsterImage =  loadAnimation("alien1.png","alien2.png");
 fruit1 = loadImage("fruit1.png");  
 fruit2 = loadImage("fruit2.png"); 
 fruit3 = loadImage("fruit3.png");
 fruit4 = loadImage("fruit4.png"); 
 gameOverImage = loadImage("gameover.png"); 
}


function setup() {
  
  createCanvas(600, 400);
  
  sword = createSprite(40,200,40,40);
  sword.addImage(swordImage);
  sword.scale = 0.7;
  
  
  gameOver = createSprite(180,200,40,40);
  gameOver.visible = false;
  
  //sword.setCollider("rectangle",0,0,40,40);
  
  score = 0;
  fruitGroup = new Group();
  enemyGroup = new Group();

}

function draw(){
background("lightblue");
  
  if(gameState === Play){
  sword.y = World.mouseY;
  sword.x = World.mouseX;
  
    
  fruits();
   Enemy();
    
     if (fruitGroup.isTouching(sword)) {
   fruitGroup.destroyEach();
    score = score + 2;
  } 
  
  else {
    
  if (enemyGroup.isTouching(sword)) {
   gameState = END;
   enemyGroup.destroyEach();
    sword.visible = false;
gameOver.addImage("gameOverImage",gameOverImage);
 gameOver.visible = true;
    
  }
  }}
  drawSprites();
  text("Score : " + score,300,30);
  }

function Enemy() {
  if(World.frameCount%200===0){
   monster = createSprite(400,Math.round(random(20,380)),20,20);
monster.addAnimation("monster",monsterImage    )
  monster.velocityX = -3;
  monster.lifetime = 200;
  enemyGroup.add(monster);  
  } 
}

function fruits() {
 
 
 if (frameCount % 150 === 0){
   var fruit = createSprite(400,Math.round(random(20,380)),10,40);
   fruit.velocityX = -6;

    //generate random obstacles
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: fruit.addImage(fruit1);
              break;
      case 2: fruit.addImage(fruit2);
              break;
      case 3: fruit.addImage(fruit3);
              break;
      case 4: fruit.addImage(fruit4);
              break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    fruit.scale = 0.2;
    fruit.lifetime = 300;
   
   //add each obstacle to the group
    fruitGroup.add(fruit);
 }
}
 


