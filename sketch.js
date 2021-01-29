
var person;
var bg;
var doc,docImg;
var sick2, sick4, sick1, sick3;
var score=0;


function preload(){
  bg_Img=loadImage("corridor.png")

  Img1=loadImage("doc1.png")
 
  docImg=loadAnimation("doc1.png","doc2.png");

  sick2=loadImage("sick/sick2.png");
  sick3= loadImage("sick/sick 3.png");
  sick1 =loadImage("sick/sick1.png");
  sick4=loadImage("sick/sick4.png");

  vitImg=loadImage("vit.png");

  soapImg=loadImage("pointsImg/soap.png");
  maskImg=loadImage("pointsImg/mask.png");
  sanitizerImg=loadImage("pointsImg/sanitizer.png");
 
}

function setup() {
  createCanvas(1200,780);
  bg=createSprite(600,390,800,1200)
  bg.addImage(bg_Img);
  bg.scale=1.6;
  doc=createSprite(400,600,100,200);
  
  doc.scale=0.7;
  pointGroup=new Group();
  sickGroup=new Group();
  sickGroup2=new Group();
  doc.addImage(Img1);
  doc.debug=true;
  doc.setCollider("rectangle",0,0,180,400)

}


function draw() {
  background("lightblue");

  if(keyDown(RIGHT_ARROW) || doc.x===10 ){
    doc.x =doc.x+10 ;
  }

  /*if(keyDown(UP_ARROW)){
    doc.velocityY=-22;
  }*/
   //doc.velocityY=;


  if(keyDown(LEFT_ARROW)|| doc.x===1190){
    doc.x =doc.x-10 ;
    doc.changeAnimation("doctor",docImg);
  }
   if(pointGroup.isTouching(doc)){
    score=score+1;
    console.log(score);
    pointGroup.destroyEach();
   }
   sickPerson2();
   sickPerson();
   points();
   drawSprites();
  
}

function sickPerson(){
  if(frameCount%200===0){
     sick_person=createSprite(Math.round(random(100,600)),-10,30,30);
    
      var rand=Math.round(random(1,4));
      switch(rand){
        case 1: sick_person.addImage(sick1);
        break;
        case 2:  sick_person.addImage(sick2);
        break;
        case 3:  sick_person.addImage(sick3);
        break;
        case 4:  sick_person.addImage(sick4);
        break;
        default :break;
      }

      sick_person.velocityY=9;
      sick_person.scale=0.5;
      sick_person.lifetime=150;
      sickGroup.add(sick_person);
  }
}

function sickPerson2(){
  if(frameCount%130===0){
     sick_person2=createSprite(Math.round(random(600,1100)),-10,30,30);
    
      var rand=Math.round(random(1,4));
      switch(rand){
        case 1: sick_person2.addImage(sick1);
        break;
        case 2:  sick_person2.addImage(sick2);
        break;
        case 3:  sick_person2.addImage(sick3);
        break;
        case 4:  sick_person2.addImage(sick4);
        break;
        default :break;
      }

      sick_person2.velocityY=9;
      sick_person2.scale=0.5;
      sick_person2.lifetime=150;
      sickGroup2.add(sick_person2);
  }
}

function points(){
  
  if(frameCount%80===0){
     pointSprite=createSprite(Math.round(random(100,1100)),-100,30,30);
     var rand=Math.round(random(1,3));
     switch(rand){
       case 1: pointSprite.addImage(soapImg);
               pointSprite.scale=0.4;
               pointSprite.setCollider("rectangle",0,0,100,100)
       break;
       case 2: pointSprite.addImage(sanitizerImg);
               pointSprite.setCollider("rectangle",0,0,200,200)
               pointSprite.scale=0.3;
       break;
       case 3: pointSprite.addImage(maskImg);
               pointSprite.setCollider("rectangle",0,0,50,100);
               pointSprite.scale=0.3;
       break;
       default :break;
     }
    pointSprite.velocityY=11;
    pointSprite.debug=true;
 //   pointSprite.scale=0.5;
    pointSprite.lifetime=150;
    pointGroup.add(pointSprite);

    }
}


function points(){
  
  if(frameCount%80===0){
     pointSprite=createSprite(Math.round(random(100,1100)),-100,30,30);
     var rand=Math.round(random(1,3));
     switch(rand){
       case 1: pointSprite.addImage(soapImg);
               pointSprite.scale=0.4;
               pointSprite.setCollider("rectangle",0,0,100,100)
       break;
       case 2: pointSprite.addImage(sanitizerImg);
               pointSprite.setCollider("rectangle",0,0,200,200)
               pointSprite.scale=0.3;
       break;
       case 3: pointSprite.addImage(maskImg);
               pointSprite.setCollider("rectangle",0,0,50,100);
               pointSprite.scale=0.3;
       break;
       default :break;
     }
    pointSprite.velocityY=11;
    pointSprite.debug=true;
 //   pointSprite.scale=0.5;
    pointSprite.lifetime=150;
    pointGroup.add(pointSprite);

    }
}
function restart(){

  
}

function keyPressed(){

}
  
  


