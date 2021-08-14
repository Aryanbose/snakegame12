var snake,apple,snakeBody;
var previousx,previousy;
var length = 0;
var direction = 'e';
function setup() {
  createCanvas(800,400);
  
apple = createSprite(400, 200, 10, 10);
apple.shapeColor = "Red"
snake = createSprite(24,45,10,10)
snake.shapeColor = "Green"


snakeBody=[]
}

function draw() {
  background('black');  
  if (keyDown ("Right")&& direction != 'w'){
    snake.velocityX = 5;  snake.velocityY = 0
direction = 'e';  
  }
  if (keyDown ("Left") && direction != 'e'){
    snake.velocityX = -5;  snake.velocityY = 0
  direction = 'w';
  }
  if (keyDown ("Up")&& direction != 's'){ 
    snake.velocityY = -5; 
    snake.velocityX = 0;
  direction = 'n';
  }
  if (keyDown ("Down")&& direction != 'n'){
    snake.velocityY = 5;  
    snake.velocityX = 0;
  direction = 's';

  }
  if (snake.isTouching (apple)){
    grow()

    
  }
drawSnake();
drawSprites();
previousx = snake.x
previousy = snake.y
}

function drawSnake (){

if (snakeBody.length !=0)
{
  snakeBody [0].x = previousx
  snakeBody[0].y = previousy
}


for (var i=snakeBody.length-1;i>=1;i--){
  snakeBody[i].x=snakeBody[i-1].x
  snakeBody[i].y=snakeBody[i-1].y
  
}
}


function grow(){

  var snakeGrowing;
  snakeGrowing = createSprite(24,45,10,10);

  if (direction=='n'){
    snakeGrowing.x = snake.x
    snakeGrowing.y = snake.y+10

  }
  if (direction=='s'){
    snakeGrowing.x = snake.x
    snakeGrowing.y = snake.y-10

}

if (direction=='e'){
  snakeGrowing.y= snake.y
  snakeGrowing.x= snake.x-10

}
if (direction=='w'){
  snakeGrowing.y = snake.y
  snakeGrowing.x = snake.x+10

}
snakeBody.push(snakeGrowing)
}





