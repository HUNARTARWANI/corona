var corona,coronaImg;
var man1,man2,man3,man4,man5,man6;
var man1img,man2img,man3img,man4img,man5img,man6img;
var background1Img;


function preload() {
  background1Img = loadImage("background.png");
  coronaImg = loadImage("corona.png");
  man1img = loadImage(" mask1.png");
  man2img = loadImage(" no mask1.png");
  man3img = loadImage(" mask1.png");
  man4img = loadImage(" no mask1.png");
  man5img = loadImage(" mask1.png");
  man6img = loadImage("  no mask1.png");


  
  

}


function setup() {
  createCanvas(1200, 800);
  
 
  man1 = createSprite(300,500);
  man1.addImage(man1img);
  man1.scale = 0.2;

 man2 = createSprite(450,500);
 man2.addImage(man2img);
 man2.scale = 0.2;

  man3 = createSprite(600,500);
  man3.addImage(man3img);
  man3.scale = 0.2;

  man4 = createSprite(750,500);
  man4.addImage(man4img);
  man4.scale = 0.2;

 man5 = createSprite(900,500);
 man5.addImage(man5img);
 man5.scale = 0.2;

 man6 = createSprite(1100,500);
 man6.addImage(man6img);
 man6.scale = 0.2;

 corona = createSprite(100,500);
 corona.addImage(coronaImg);
 corona.scale = 0.2;



}

function draw() {
  background(background1Img);
 // backgroundcolor = "black";
  //corona.x = World.mouseX;
 // corona.y = World.mouseY;



 if (keyDown("space")){
    corona .velocityX = 1;
    corona.velocityY = 0;

 }


  

  if (corona.isTouching(man4)){
    man4.destroy();
  }


    if (corona.isTouching(man2)){
     man2.destroy();
    }
    if (corona.isTouching(man6)){
      man6.destroy();


      text("GAME OVER",200,200);
      textSize(20);

      corona.velocityX = 0;
      corona.velocityY = 0;
     }
       

   

  
    if (corona.isTouching(man2,man3,man4)){

      text("GAME OVER", 600,400);
      textSize(20);
     
    }

  drawSprites();

 
}