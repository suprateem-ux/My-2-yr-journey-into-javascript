

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["cf9a18c8-e7c3-4198-b117-1cf886db1946","4a238632-f0a5-4a5e-8373-1e54234aa330","04b55bfb-b928-46a8-80a7-92e4f722b31f","ed851d20-d7fe-48ba-915e-f804b08f6382","c3ddd8b2-838b-49ff-b6af-8bd5d5098df9"],"propsByKey":{"cf9a18c8-e7c3-4198-b117-1cf886db1946":{"name":"Back.png_1","sourceUrl":"assets/v3/animations/eof_3ASVclqcCGFlFdY-QumIWyFyU-vQ07dSFYOXfFk/cf9a18c8-e7c3-4198-b117-1cf886db1946.png","frameSize":{"x":584,"y":400},"frameCount":1,"looping":true,"frameDelay":4,"version":"2so5Bbp.YP49xFsRc.qUDZNdOK8l_R8H","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":584,"y":400},"rootRelativePath":"assets/v3/animations/eof_3ASVclqcCGFlFdY-QumIWyFyU-vQ07dSFYOXfFk/cf9a18c8-e7c3-4198-b117-1cf886db1946.png"},"4a238632-f0a5-4a5e-8373-1e54234aa330":{"name":"earth.png_1","sourceUrl":"assets/v3/animations/eof_3ASVclqcCGFlFdY-QumIWyFyU-vQ07dSFYOXfFk/4a238632-f0a5-4a5e-8373-1e54234aa330.png","frameSize":{"x":383,"y":319},"frameCount":1,"looping":true,"frameDelay":4,"version":"FoxK.4ty5s7Hnyc242ff6faUzxTcH0Gv","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":383,"y":319},"rootRelativePath":"assets/v3/animations/eof_3ASVclqcCGFlFdY-QumIWyFyU-vQ07dSFYOXfFk/4a238632-f0a5-4a5e-8373-1e54234aa330.png"},"04b55bfb-b928-46a8-80a7-92e4f722b31f":{"name":"gameplay_yellowstar2.png_1","sourceUrl":"assets/v3/animations/eof_3ASVclqcCGFlFdY-QumIWyFyU-vQ07dSFYOXfFk/04b55bfb-b928-46a8-80a7-92e4f722b31f.png","frameSize":{"x":400,"y":390},"frameCount":1,"looping":true,"frameDelay":4,"version":"1xbflnBqnUwpR6osxrWVT3eXtiT3D0j6","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":390},"rootRelativePath":"assets/v3/animations/eof_3ASVclqcCGFlFdY-QumIWyFyU-vQ07dSFYOXfFk/04b55bfb-b928-46a8-80a7-92e4f722b31f.png"},"ed851d20-d7fe-48ba-915e-f804b08f6382":{"name":"Meteors.png_1","sourceUrl":"assets/v3/animations/eof_3ASVclqcCGFlFdY-QumIWyFyU-vQ07dSFYOXfFk/ed851d20-d7fe-48ba-915e-f804b08f6382.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":4,"version":"6bZFhQEZuYy8GhowZCzDRqsJ7iFrd.by","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/v3/animations/eof_3ASVclqcCGFlFdY-QumIWyFyU-vQ07dSFYOXfFk/ed851d20-d7fe-48ba-915e-f804b08f6382.png"},"c3ddd8b2-838b-49ff-b6af-8bd5d5098df9":{"name":"ring.png_1","sourceUrl":"assets/v3/animations/eof_3ASVclqcCGFlFdY-QumIWyFyU-vQ07dSFYOXfFk/c3ddd8b2-838b-49ff-b6af-8bd5d5098df9.png","frameSize":{"x":462,"y":540},"frameCount":1,"looping":true,"frameDelay":4,"version":"dNdiAbqbpx7aKK_SIXplG9hY_.cx6yQ.","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":462,"y":540},"rootRelativePath":"assets/v3/animations/eof_3ASVclqcCGFlFdY-QumIWyFyU-vQ07dSFYOXfFk/c3ddd8b2-838b-49ff-b6af-8bd5d5098df9.png"}}};
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

var back = createSprite(200,200);
back.setAnimation("Back.png_1");
back.scale=1.5;

var earth = createSprite(200,200);
earth.setAnimation("earth.png_1");
earth.scale=0.3;
earth.rotationSpeed=0.45;

var ring = createSprite(200,200);
ring.setAnimation("ring.png_1");
ring.scale=0.3;
ring.rotationSpeed=0.45;
ring.debug=true;
ring.setCollider("circle",0,0,200);

var meteor = createSprite(0,0,3,4);
meteor.setAnimation("Meteors.png_1");
meteor.scale=0.5;
meteor.debug=true;
meteor.setCollider("circle",0,0,40);

 var star=createSprite();
star.setAnimation("gameplay_yellowstar2.png_1");
star.scale=0.1;

var score = 0 


star.visible=false;


var speed = 2;





function draw() {
  
  if(meteor.x>200 &&meteor.y<200){
    meteor.velocityY =speed;
    meteor.velocityX= -speed;
  }
  
  if(meteor.x<200&&meteor.y<200){
    meteor.velocityY= speed;
    meteor.velocityX= speed;
  }
  if(meteor.x<200&&meteor.y>200){
    meteor.velocityX= speed;
    meteor.velocityY= -speed;
  }
  if(meteor.x>200&&meteor.y>200){
    meteor.velocityY = -speed;
    meteor.velocityX= -speed;
  }
  
  if(meteor.x<0||meteor.x>400){
    meteor.y=randomNumber(0,400);
    
  }
  if(mousePressedOver(ring)){
    star.x=World.mouseX;
star.y=World.mouseY;
   star.visible=true;
  }
  
  if(meteor.y<0||meteor.y>400){
    meteor.x=randomNumber(0,400);
  }
  
  if(meteor.isTouching(star)){
    meteor.y=randomNumber(0,400);
    meteor.x=randomNumber(0,400);
    score=score+1;
    star.visible=false;
  }
  if(meteor.isTouching(ring)){
    if(meteor.x%2==0){
      meteor.y=0;
      score=score-1;
      
    }
  else{
    meteor.y=400;
  }
  }
 
  
  
  drawSprites();
   textSize(50);
  fill("blue");
  text(score,179,74);
  if(score==0){
   meteor.velocityX=0;
   meteor.velocityY=0
   background("red")
   
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
