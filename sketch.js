var ball,img,paddle;
function preload() {
 
  // preload your images here of the ball and the paddle 
  paddleImage = loadImage("paddle.png");
  ballImage = loadImage("ball.png");
}

function setup() {
  createCanvas(400,400);
   // create the Ball Sprite and the Paddle Sprite 
  paddle=createSprite(350,200,20,20);
  paddle.addImage(paddleImage);

  ball=createSprite(100,200,20,20);
  ball.addImage(ballImage);
  
    //make the ball bounce off the paddle and the boundries
  ball.bounceOff(paddle);
  
  //give an initial velocity to the ball
  ball.velocityX=9;
  

  
  // assign the images to the sprites 

  // give the ball an initial velocity of 9 in the X direction 

} 


                

                              
                
                

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

