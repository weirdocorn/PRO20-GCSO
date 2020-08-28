var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  changeColor();

  car.display();
  wall.display();
}

function changeColor(){
  if(car.collide(wall)){
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22500;
    if(deformation>180){
      car.shapeColor = color(255,0,0);
    }
    else if(deformation<180 && deformation>100){
      car.shapeColor = color(230,230,0);
    }
    else if(deformation<100){
      car.shapeColor = color(0,255,0);
    }
  }
}