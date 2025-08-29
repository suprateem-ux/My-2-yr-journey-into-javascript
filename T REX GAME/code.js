

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["bfc7b86e-d3bd-44e2-8209-6a006135e9da","eb5eea85-0dde-4e32-bbdd-d52d24a89316","b9fb3720-f39e-4d59-8b5d-f3d1dd17dda0","f7e0f2bb-9d65-4ab9-906a-a2786fb1743c","45388f38-f98b-491e-992a-ac33c9c82545","04bcca52-91f4-4402-8fab-d2e36af79dc4","73362818-bc1d-4f89-a08e-32977fcdc9ad","bc30b811-74f4-4228-b26b-2f9703c5dd27","70cd667f-bfcf-417a-8d16-500872484ace","f581e313-c696-4d7b-9055-9bc9320c84ac"],"propsByKey":{"bfc7b86e-d3bd-44e2-8209-6a006135e9da":{"name":"cloud.png_1","sourceUrl":"assets/v3/animations/ZEWh7sIUv52T2VcngqnrsAroicalymHfgP0TWgSNLUM/bfc7b86e-d3bd-44e2-8209-6a006135e9da.png","frameSize":{"x":524,"y":153},"frameCount":1,"looping":true,"frameDelay":4,"version":".yMWgL00ooa5OW9ruZ6TN2ro2n8BAdah","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":524,"y":153},"rootRelativePath":"assets/v3/animations/ZEWh7sIUv52T2VcngqnrsAroicalymHfgP0TWgSNLUM/bfc7b86e-d3bd-44e2-8209-6a006135e9da.png"},"eb5eea85-0dde-4e32-bbdd-d52d24a89316":{"name":"game_over.png_1","sourceUrl":"assets/v3/animations/ZEWh7sIUv52T2VcngqnrsAroicalymHfgP0TWgSNLUM/eb5eea85-0dde-4e32-bbdd-d52d24a89316.png","frameSize":{"x":524,"y":28},"frameCount":1,"looping":true,"frameDelay":4,"version":"4K5ZuHFUjQ8tuoX9O92UGDV1CGYCk1bP","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":524,"y":28},"rootRelativePath":"assets/v3/animations/ZEWh7sIUv52T2VcngqnrsAroicalymHfgP0TWgSNLUM/eb5eea85-0dde-4e32-bbdd-d52d24a89316.png"},"b9fb3720-f39e-4d59-8b5d-f3d1dd17dda0":{"name":"ground.png_1","sourceUrl":"assets/v3/animations/ZEWh7sIUv52T2VcngqnrsAroicalymHfgP0TWgSNLUM/b9fb3720-f39e-4d59-8b5d-f3d1dd17dda0.png","frameSize":{"x":2377,"y":12},"frameCount":1,"looping":true,"frameDelay":4,"version":"oRoXxQG30Ht9yocvoADNs.P7g0oxGU9z","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":2377,"y":12},"rootRelativePath":"assets/v3/animations/ZEWh7sIUv52T2VcngqnrsAroicalymHfgP0TWgSNLUM/b9fb3720-f39e-4d59-8b5d-f3d1dd17dda0.png"},"f7e0f2bb-9d65-4ab9-906a-a2786fb1743c":{"name":"ground2.png_1","sourceUrl":"assets/v3/animations/ZEWh7sIUv52T2VcngqnrsAroicalymHfgP0TWgSNLUM/f7e0f2bb-9d65-4ab9-906a-a2786fb1743c.png","frameSize":{"x":524,"y":8},"frameCount":1,"looping":true,"frameDelay":4,"version":"1gfNCasNQtJILoyoCcnQw2PuuZyz0oug","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":524,"y":8},"rootRelativePath":"assets/v3/animations/ZEWh7sIUv52T2VcngqnrsAroicalymHfgP0TWgSNLUM/f7e0f2bb-9d65-4ab9-906a-a2786fb1743c.png"},"45388f38-f98b-491e-992a-ac33c9c82545":{"name":"h1","sourceUrl":"assets/v3/animations/ZEWh7sIUv52T2VcngqnrsAroicalymHfgP0TWgSNLUM/45388f38-f98b-491e-992a-ac33c9c82545.png","frameSize":{"x":34,"y":70},"frameCount":1,"looping":true,"frameDelay":4,"version":"5AhFJK59RS2ODTOuHbfQDg9gsANg4waM","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":70},"rootRelativePath":"assets/v3/animations/ZEWh7sIUv52T2VcngqnrsAroicalymHfgP0TWgSNLUM/45388f38-f98b-491e-992a-ac33c9c82545.png"},"04bcca52-91f4-4402-8fab-d2e36af79dc4":{"name":"h2","sourceUrl":"assets/v3/animations/ZEWh7sIUv52T2VcngqnrsAroicalymHfgP0TWgSNLUM/04bcca52-91f4-4402-8fab-d2e36af79dc4.png","frameSize":{"x":69,"y":70},"frameCount":1,"looping":true,"frameDelay":4,"version":"M9QGgE4KbM2y_IxovMbv9n6lGOzOjPbd","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":69,"y":70},"rootRelativePath":"assets/v3/animations/ZEWh7sIUv52T2VcngqnrsAroicalymHfgP0TWgSNLUM/04bcca52-91f4-4402-8fab-d2e36af79dc4.png"},"73362818-bc1d-4f89-a08e-32977fcdc9ad":{"name":"h3","sourceUrl":"assets/v3/animations/ZEWh7sIUv52T2VcngqnrsAroicalymHfgP0TWgSNLUM/73362818-bc1d-4f89-a08e-32977fcdc9ad.png","frameSize":{"x":102,"y":70},"frameCount":1,"looping":true,"frameDelay":4,"version":"49S7De32gFYfKW9decnOMXDVESMD46QP","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":102,"y":70},"rootRelativePath":"assets/v3/animations/ZEWh7sIUv52T2VcngqnrsAroicalymHfgP0TWgSNLUM/73362818-bc1d-4f89-a08e-32977fcdc9ad.png"},"bc30b811-74f4-4228-b26b-2f9703c5dd27":{"name":"h4","sourceUrl":"assets/v3/animations/ZEWh7sIUv52T2VcngqnrsAroicalymHfgP0TWgSNLUM/bc30b811-74f4-4228-b26b-2f9703c5dd27.png","frameSize":{"x":150,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"HLdGuuuL4250Ab8MWFfr.V2MhT8owfEv","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":100},"rootRelativePath":"assets/v3/animations/ZEWh7sIUv52T2VcngqnrsAroicalymHfgP0TWgSNLUM/bc30b811-74f4-4228-b26b-2f9703c5dd27.png"},"70cd667f-bfcf-417a-8d16-500872484ace":{"name":"restart.png_1","sourceUrl":"assets/v3/animations/ZEWh7sIUv52T2VcngqnrsAroicalymHfgP0TWgSNLUM/70cd667f-bfcf-417a-8d16-500872484ace.png","frameSize":{"x":524,"y":447},"frameCount":1,"looping":true,"frameDelay":4,"version":"L3CAYhtFkNnVYdkHjoKMAGu4Whby5EWV","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":524,"y":447},"rootRelativePath":"assets/v3/animations/ZEWh7sIUv52T2VcngqnrsAroicalymHfgP0TWgSNLUM/70cd667f-bfcf-417a-8d16-500872484ace.png"},"f581e313-c696-4d7b-9055-9bc9320c84ac":{"name":"T REX","sourceUrl":null,"frameSize":{"x":524,"y":94},"frameCount":3,"looping":true,"frameDelay":15,"version":"WKasTLkaL9sCiwQQxajyYq_9liWbjX_r","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":524,"y":282},"rootRelativePath":"assets/f581e313-c696-4d7b-9055-9bc9320c84ac.png"}}};
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

var ground = createSprite(0,380);
ground.setAnimation("ground.png_1");
ground.height=40;
ground.debug=false
ground.setCollider("rectangle",0,0,790,5)

var trex = createSprite(50,380);
trex.setAnimation("T REX");
trex.scale=0.65432
trex.debug=false
trex.setCollider("rectangle",0,0,100,78)

var cacti = createGroup();

var gamestate = "Start";

var score = 0 

 var r = createSprite(200,250)
r.setAnimation("restart.png_1")
r.scale=0.1
var gover = createSprite(200,200)
gover.setAnimation("game_over.png_1")
gover.scale=0.7
gover.visible=false
r.visible=false






function draw() {
  background("white");
 
  if(gamestate=="Start"){
     obstacle();
     score1=score+1
     
  }

  if(keyWentDown("space")){
    trex.velocityY=-6.75
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3")
  
  }
if(World.frameCount%120<0){
  background("indigo")
}
    
  
  trex.velocityY=trex.velocityY+0.2           ;
  trex.collide(ground);
  clouds()
  
  if(trex.isTouching(cacti)){
   
     trex.pause()
    // clouds.pause()
    gamestate = "stop"
    gover.visible=true
    r.visible=true
    cacti.destroyEach()
    
  
 
    
  }
   if(mousePressedOver(r)){
     gover.visible=false
    r.visible=false
    gamestate="Start";
   
    cacti.setVelocityXEach(-3)
    score=0
    
  }
  
  // trex1()
  
  drawSprites();
  textSize(23)
  text("score="+score1,290,88)
}
function obstacle() {
  
 if(World.frameCount%120==0){
   var obs1 = createSprite(400,350);
   obs1.setAnimation("h"+randomNumber(1,4));
   obs1.velocityX=-(5+score/1000);
   obs1.scale=0.678
   cacti.add(obs1)
   
 }
 
  
  
}
function clouds() {
   if(World.frameCount%60==0){
    var cloud = createSprite(400,randomNumber(0,200))
    cloud.setAnimation("cloud.png_1")
    cloud.scale=0.2
    cloud.velocityX=-4
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
