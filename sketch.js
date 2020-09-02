const Engine = Matter.Engine;
 const World = Matter.World; 
 const Bodies = Matter.Bodies; 

var ground;
var divisionHeight = 300;

var div=[];
var plinko=[];
var particle = [];
function setup() {
  createCanvas(700,700);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
ground = new Ground(400,600,1000,20)

for(var i=0;i<=innerWidth;i=i+100){
  div.push(new division(i,500,20,190))
}
 
for(var x=100;x<700;x=x+100){
  plinko.push(new pinko(x,100));
}

for(var x=100;x<700;x=x+100){
 plinko.push(new pinko(x,200)) 
}


for(var x=100;x<700;x=x+100){
  plinko.push(new pinko(x,300)) 
 }

}
function draw() {
  background("black");  
ground.display();

for(var i=0;i<plinko.length;i=i+1){
 plinko[i].display();
}

for(var j=0;j<div.length;j++){
  div[j].display();
}
if(frameCount%60===0){
particle.push(new particles(random(50,660),0))
}
for(var j=0; j < particle.length; j++){
particle[j].display();
}

}
