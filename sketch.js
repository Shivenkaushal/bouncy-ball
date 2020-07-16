  var ball,paddle,coin,wall,waal1,wall2,score,gamestate,lives,coinimage,ballimage,ballsound,ballsound1;
function preload() {
  /* preload your images here of the ball and the paddle */
  paddle=loadImage("paddle.png");
  coinimage=loadImage("download.jpg");
  ballimage=loadImage("ball image.jpg");
  ballsound=loadSound("switch.mp3");
  ballsound1=loadSound("BOUNCE+1.mp3");
  }
function setup() {
  createCanvas(400, 400);

/* create the Ball Sprite and the Paddle Sprite and wall sprite and coin sprite*/
  //creating ball
  ball=createSprite(200,200,20,20);
  ball.addImage("bb",ballimage);
  ball.scale=0.1;
  //creating paddle
  paddle=createSprite(200,380,100,20);
  //creating walls
  wall=createSprite(0,200,5,400);
  wall.visible=false;
  wall1=createSprite(200,0,400,5);
  wall1.visible=false;
  wall2=createSprite(400,200,5,400);
  wall2.visible=false;      
  //creating coins
  coin=createSprite(200,100,40,40);
  coin.addImage("gg",coinimage);
  coin.scale=0.3;
  //setting score
  score=0;
  //setting gamestate
  gamestate="serve";
  //setting lives
  lives=5;

}

function draw() {
  background("white");
//adding condition if gamestate is serve
  if (gamestate=="serve"){
    //printing text on the screen if gamestate= serve
    text("press space to serve",150,150);
    //adding velocityY and X in gamestate serve
    ball.velocityY=0;
    ball.velocityX=0;
  }
  
  //controlling the paddle with mouse
  paddle.x = mouseX;

  text("score:"+score,20,20);
  text("lives"+lives,350,20);

  if (keyDown("space") && gamestate=="serve"){
    gamestate="play";
    ball.velocityY=9;
    ball.velocityX=9;

        }

  if (ball.y>400){
    gamestate="serve";
    ball.x=200;
    ball.y=200;
    ball.velocityY=0;
    ball.velocityX=0;
    lives=lives-1;
  }
  if (lives==0&&gamestate=="serve"){
    gamestate="end";
  }

  if (gamestate=="play"){

    }
  else if (gamestate=="end"){
    text("press r to restart",150,150);
  }
  if (keyDown("r") && gamestate=="end"){
    gamestate="serve";
    lives=5;
    score=0;
  }
   /* if (ball.isTouching(paddle)){
    ball.velocityY=-9;
    }
    */
 if (ball.isTouching(paddle)){
  ball.bounceOff(paddle);
   ballsound.play();
 }
   if (ball.isTouching(wall)){
  ball.bounceOff(wall);
   ballsound.play();
 }
 if (ball.isTouching(wall1)){
  ball.bounceOff(wall1);
   ballsound.play();
 }
   if (ball.isTouching(wall2)){
  ball.bounceOff(wall2);
   ballsound.play();
 }
  if (ball.isTouching(coin)){
    coin.x=random(20,380);
    coin.y=random(100,80);
    score=score+1;
    ballsound1.play();
  }


ball.setCollider("circle",0,0,160);
coin.setCollider("circle",0,0,80);
  ball.depth=coin.depth+1;
  paddle.depth=ball.depth+1;
    drawSprites();

  }

  function randomVelocity()
  {


   drawSprites();
  }

