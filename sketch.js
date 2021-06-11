const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg;
var thor;
function preload() {
bag = loadImage("Bg.jpg");

}


function setup() {  
engine = Engine.create();
world = engine.world;
var canvas = createCanvas(1360,620);
Ground = new ground(10,620,10000,10)
hammer = new Hammer(250,540,165,165);
thor = new Thor(120,480);
thanos = new Enemy1(1000,90);
ultron = new Enemy2(1000,480);
slingShot = new SlingShot(hammer.body,{x:220,y:50});
}


function draw() {
    background(bag);
    Engine.update(engine);
    thor.display();
    thanos.display();
    ultron.display();
    slingShot.display();
    hammer.display();
    Ground.display();

    
}

function mouseDragged(){
      Matter.Body.setPosition(hammer.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    slingShot.fly();
   
}