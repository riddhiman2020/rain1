const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

  var maxDrops=100;
  var drops1 =[];
  var thunderimg,thunimg,thuimg,thuIng,rand,thunder;
  var thunderCreatedFrame;
    
function preload(){
  thunderimg=loadImage("thunderbolt/1.png")
  thunimg=loadImage("thunderbolt/2.png")
  thuimg=loadImage("thunderbolt/3.png")
  thuIng=loadImage("thunderbolt/4.png")
}

function setup(){
   createCanvas(800,700);
   engine = Engine.create();
   world = engine.world;

   person1=new person(400,450)

   for(var i=0;i<maxDrops;i++){
    drops1.push(new drops(random(-10,750),random(-10,400)));
}
}

function draw(){
    Engine.update(engine);
    background(0);

    person1.display();

     rand=Math.round(random(1,4));
    if(frameCount%80===0){
      thunderCreatedFrame=frameCount;
      thunder=createSprite(random(150,600),random(10,30),10,10)
      switch(rand){
        case 1:thunder.addImage(thunderimg);
        break;
        case 2:thunder.addImage(thunimg);
        break;
        case 3:thunder.addImage(thuimg);
        break;
        case 4:thunder.addImage(thuIng);
        break;
       
      }
      thunder.scale=random(0.3,0.9)
    }

    if(thunderCreatedFrame+10===frameCount&&thunder){
      thunder.destroy();
    }
    console.log(frameCount);
    for(var i=0;i<maxDrops;i++){
        drops1[i].display();
        drops1[i].update();
       }
     
     drawSprites();
}   

