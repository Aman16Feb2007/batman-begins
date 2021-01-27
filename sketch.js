const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var B;
var canvas;
var D = [];
function preload(){
    t1 = loadImage("T1.png");
    t2 = loadImage("T2.png");
    t3 = loadImage("T3.png");
    t4 = loadImage("T4.png");


    manImg = loadImage("W1.png");
    backgroundImg = loadImage("background.jpg");
}


function setup(){
    canvas = createCanvas(700,825);
    engine = Engine.create();
    world = engine.world;

    


    B = new Boy(100,450);

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    if(frameCount % 100 === 0){
        t = createSprite(random(0,700), random(10,100));
        t.lifetime = 100;
        switch(Math.round(random(1,4))){
            case 1 : t.addImage(t1);
            break;
            case 2 : t.addImage(t2);
            break;
            case 3 : t.addImage(t3);
            break;
            case 4 : t.addImage(t4);
            break;
            default : break;
        }
    }







    if(frameCount % 40 === 0){
        for(var i = 0; i<50; i++){
            D.push(new Drops(random(0,700),random(0,825))); 
        }
    }


    for(var i = 0; i<D.length; i++){
        D[i].display();
    }

    B.display();
    drawSprites();

}   

