

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["581f5d69-913c-482f-853c-0ce9c82f4b4b","1af9eab3-e541-4a64-af5e-11576dedba2a","17cf5387-b9c2-41ec-b173-e01a8011e077","a367ef12-088f-4e35-8201-7c1c74cd32f1"],"propsByKey":{"581f5d69-913c-482f-853c-0ce9c82f4b4b":{"name":"animalhead_chimp_1","sourceUrl":"assets/api/v1/animation-library/gamelab/hj3pdrtW9.qD8_mUB8ER3kwpAXPXMCoc/category_animals/animalhead_chimp.png","frameSize":{"x":392,"y":350},"frameCount":1,"looping":true,"frameDelay":2,"version":"hj3pdrtW9.qD8_mUB8ER3kwpAXPXMCoc","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":392,"y":350},"rootRelativePath":"assets/api/v1/animation-library/gamelab/hj3pdrtW9.qD8_mUB8ER3kwpAXPXMCoc/category_animals/animalhead_chimp.png"},"1af9eab3-e541-4a64-af5e-11576dedba2a":{"name":"box","sourceUrl":null,"frameSize":{"x":35,"y":35},"frameCount":1,"looping":true,"frameDelay":12,"version":"yoNI8Vq4Quv4zLMppR.I6nCVuVP5JcUw","loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":35},"rootRelativePath":"assets/1af9eab3-e541-4a64-af5e-11576dedba2a.png"},"17cf5387-b9c2-41ec-b173-e01a8011e077":{"name":"hammer_bronze_1","sourceUrl":null,"frameSize":{"x":86,"y":97},"frameCount":1,"looping":true,"frameDelay":12,"version":"zbFbRT.V.w9PLmlNuSXFo5fU7E3mQSPI","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":97},"rootRelativePath":"assets/17cf5387-b9c2-41ec-b173-e01a8011e077.png"},"a367ef12-088f-4e35-8201-7c1c74cd32f1":{"name":"red","sourceUrl":null,"frameSize":{"x":100,"y":94},"frameCount":1,"looping":true,"frameDelay":12,"version":"yRgYjg9fuazmPPmz4EBaWZit0P0qUYp_","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":94},"rootRelativePath":"assets/a367ef12-088f-4e35-8201-7c1c74cd32f1.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var box1=createSprite(200,200);
box1.setAnimation("box");
box1.scale=3

var box2=createSprite(70,84);
box2.setAnimation("box")
box2.scale=3

var box3=createSprite(326,84);
box3.setAnimation("box")
box3.scale=3

var box4=createSprite(70,315);
box4.setAnimation("box")
box4.scale=3


var box5 = createSprite(326,315);
box5.setAnimation("box");
box5.scale=3;

var monkey = createSprite(200,200);
monkey.setAnimation("animalhead_chimp_1");
monkey.scale=0.25;

var hammer = createSprite(374,344);
hammer.setAnimation("hammer_bronze_1");

var a ;

var score = 0

var hit = 0





function draw() {
  background("saffron")
  hammer.x=World.mouseX
  hammer.y=World.mouseY
 
 

if(mousePressedOver(monkey)){
  a=randomNumber(1,5);
  score=score+1
  if(a==1){
    monkey.x=box1.x;
    monkey.y=box1.y;
    
   
    }
     if(a==2){
      monkey.x=box2.x
      monkey.y=box2.y
      
  }
  if(a==3){
    monkey.x=box3.x
    monkey.y=box3.y
    
  }
  if(a==4){
    monkey.x=box4.x
    monkey.y=box4.y
  
  }
  if(a==5){
    monkey.x=box5.x
    monkey.y=box5.y
    
}





}
if(mousePressedOver(box1)||mousePressedOver(box2)||mousePressedOver(box3)||mousePressedOver(box4)||mousePressedOver(box5)){
  hit=hit+1
}



drawSprites();
textSize(50)
fill("yellow")
text("score="+score,75,27)
text("hit="+hit,62,378)

if(hit>10){
  monkey.visible=false
  // background("red")
  var bg=createSprite(200,200);
  bg.setAnimation("red");
  bg.scale=5;
  
  textSize(20);
  fill("blue");
  text("GAME OVER.PRESS RESTART TO START",50,200)
}

relocate()




}


function relocate(){
if(World.frameCount%30==0){
  a=randomNumber(1,5);

  if(a==1){
    monkey.x=box1.x;
    monkey.y=box1.y;
    
   
    }
     if(a==2){
      monkey.x=box2.x
      monkey.y=box2.y
      
  }
  if(a==3){
    monkey.x=box3.x
    monkey.y=box3.y
    
  }
  if(a==4){
    monkey.x=box4.x
    monkey.y=box4.y
  
  }
  if(a==5){
    monkey.x=box5.x
    monkey.y=box5.y
    
}





}

}  
  
  
  
  
  
  
  
  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
