

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["f5d2e662-9e19-41f2-94a4-170c98574c2d","28d36079-a6a5-421d-be24-3b75875909c0","e16a705d-fd92-4eb7-aef9-c937484fd711","992f55c6-6394-41f1-b1e7-f050187a979d","5905476c-dbf8-439e-a9a0-97c4766674ec","1ead28d6-33f1-4302-8ab9-512fa4ccdeb5","fc9d8596-137c-4b10-8bc3-f739185ab102","4c95b7b5-11ae-474a-8c0e-38e875123a02","9ce49344-d934-47e1-af59-d98a2d291fb0","fde0dc9a-9d5e-4f1f-8c21-9e3985e65d49"],"propsByKey":{"f5d2e662-9e19-41f2-94a4-170c98574c2d":{"name":"birdside_13_1","sourceUrl":"assets/api/v1/animation-library/gamelab/tjQX5O3sDxZyN99A_gK_QCfm14o_lVW3/category_animals/birdside_13.png","frameSize":{"x":400,"y":232},"frameCount":1,"looping":true,"frameDelay":2,"version":"tjQX5O3sDxZyN99A_gK_QCfm14o_lVW3","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":232},"rootRelativePath":"assets/api/v1/animation-library/gamelab/tjQX5O3sDxZyN99A_gK_QCfm14o_lVW3/category_animals/birdside_13.png"},"28d36079-a6a5-421d-be24-3b75875909c0":{"name":"birdside_11_1","sourceUrl":null,"frameSize":{"x":400,"y":232},"frameCount":2,"looping":true,"frameDelay":12,"version":"3CJNNkr8KhOBU3f3f9SK9oLYIktKgNqP","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":464},"rootRelativePath":"assets/28d36079-a6a5-421d-be24-3b75875909c0.png"},"e16a705d-fd92-4eb7-aef9-c937484fd711":{"name":"cloud_1","sourceUrl":"assets/api/v1/animation-library/gamelab/wl6Ri3OYCiAXmoAVo8Gw3t5nYBx9iHyg/category_video_games/cloud.png","frameSize":{"x":260,"y":134},"frameCount":1,"looping":true,"frameDelay":2,"version":"wl6Ri3OYCiAXmoAVo8Gw3t5nYBx9iHyg","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":134},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wl6Ri3OYCiAXmoAVo8Gw3t5nYBx9iHyg/category_video_games/cloud.png"},"992f55c6-6394-41f1-b1e7-f050187a979d":{"name":"gradient_31_1","sourceUrl":"assets/api/v1/animation-library/gamelab/bV0x7r2rhSV.MriAceAMnppv0jBTOo_K/category_backgrounds/gradient_31.png","frameSize":{"x":400,"y":330},"frameCount":1,"looping":true,"frameDelay":2,"version":"bV0x7r2rhSV.MriAceAMnppv0jBTOo_K","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":330},"rootRelativePath":"assets/api/v1/animation-library/gamelab/bV0x7r2rhSV.MriAceAMnppv0jBTOo_K/category_backgrounds/gradient_31.png"},"5905476c-dbf8-439e-a9a0-97c4766674ec":{"name":"coin_gold_1","sourceUrl":"assets/api/v1/animation-library/gamelab/pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y/category_board_games_and_cards/coin_gold.png","frameSize":{"x":61,"y":61},"frameCount":1,"looping":true,"frameDelay":2,"version":"pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":61},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y/category_board_games_and_cards/coin_gold.png"},"1ead28d6-33f1-4302-8ab9-512fa4ccdeb5":{"name":"sun_and_rainbow_1","sourceUrl":"assets/api/v1/animation-library/gamelab/U_B34s7WuMGQBIqtrDWle53mf8DRkN9h/category_backgrounds/sun_and_rainbow.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"U_B34s7WuMGQBIqtrDWle53mf8DRkN9h","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/U_B34s7WuMGQBIqtrDWle53mf8DRkN9h/category_backgrounds/sun_and_rainbow.png"},"fc9d8596-137c-4b10-8bc3-f739185ab102":{"name":"bird.jpg_1","sourceUrl":"assets/v3/animations/2j8oz3WdKoRcClFUU_wm5DJTEj6a8LfSZcGyxhxPoPg/fc9d8596-137c-4b10-8bc3-f739185ab102.png","frameSize":{"x":612,"y":612},"frameCount":1,"looping":true,"frameDelay":4,"version":"WcCJAAS3codSILShC37zxFVS_Jcf5KDd","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":612,"y":612},"rootRelativePath":"assets/v3/animations/2j8oz3WdKoRcClFUU_wm5DJTEj6a8LfSZcGyxhxPoPg/fc9d8596-137c-4b10-8bc3-f739185ab102.png"},"4c95b7b5-11ae-474a-8c0e-38e875123a02":{"name":"pngtree-you-lose-cartoon-game-interface-creative-design-png-image_2974559.png_1","sourceUrl":"assets/v3/animations/2j8oz3WdKoRcClFUU_wm5DJTEj6a8LfSZcGyxhxPoPg/4c95b7b5-11ae-474a-8c0e-38e875123a02.png","frameSize":{"x":360,"y":360},"frameCount":1,"looping":true,"frameDelay":4,"version":"iYV5a3pueWIUmlpZLA7_HfnsQE5SX.no","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":360,"y":360},"rootRelativePath":"assets/v3/animations/2j8oz3WdKoRcClFUU_wm5DJTEj6a8LfSZcGyxhxPoPg/4c95b7b5-11ae-474a-8c0e-38e875123a02.png"},"9ce49344-d934-47e1-af59-d98a2d291fb0":{"name":"textGameOver_1","sourceUrl":"assets/api/v1/animation-library/gamelab/wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe/category_video_games/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe/category_video_games/textGameOver.png"},"fde0dc9a-9d5e-4f1f-8c21-9e3985e65d49":{"name":"goldui28_result_1","sourceUrl":"assets/api/v1/animation-library/gamelab/4yYO_IT42.v0HIIpWPdef86pPtR4_TWf/category_icons/goldui28_result.png","frameSize":{"x":396,"y":392},"frameCount":1,"looping":true,"frameDelay":2,"version":"4yYO_IT42.v0HIIpWPdef86pPtR4_TWf","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":392},"rootRelativePath":"assets/api/v1/animation-library/gamelab/4yYO_IT42.v0HIIpWPdef86pPtR4_TWf/category_icons/goldui28_result.png"}}};
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



var bird = createSprite(200,200)
bird.setAnimation(  "birdside_11_1")
bird.scale=0.3

// var cloud=createSprite(430,randomNumber(0,400))
// cloud.setAnimation("cloud_1")
// cloud.velocityX=-5

var gamestate="Start"

var cloud = createGroup()

var co = createGroup()

 var gover = createSprite(190,276)
gover.setAnimation("goldui28_result_1")
gover.scale=0.2
gover.visible=false
      
var m = createSprite(200,200)
m.setAnimation("textGameOver_1")
m.visible=false

var score = 0

function draw() {
  background("skyblue")

  if(gamestate=="Start"){
    clouds()
    coins()
    bird.visible=true
   textSize(100/2-30)
   text("score="+score,296,30)
  cloud.velocityX=-5
    
  }
    
    if(bird.isTouching(cloud)){
      bird.visible=false
     m.visible=true
     gover.visible=true
     gamestate="stop"
   }
      
      if(mousePressedOver(gover)){
        bird.visible=true;
        bird.y=0
        
       gamestate="Start";
       m.visible= false;
       gover.visible= false;
       cloud.visible=true;
      // bird.visible=true;
      
       co.visible=true;
       co.setVelocityEach(-4);
       cloud.setVelocityEach(-5);
       score=0;
     }
  
  
  if(keyWentDown("space")){
    bird.velocityY=-10;
  }
 bird.velocityY=bird.velocityY+0.5;
 
if(bird.y==0){
  var g = createSprite(200,200);
  g.setAnimation("pngtree-you-lose-cartoon-game-interface-creative-design-png-image_2974559.png_1")
  co.visible=false;
  cloud.visible=false;
}
 if(bird.y==400){
   var g = createSprite(200,200);
  g.setAnimation("pngtree-you-lose-cartoon-game-interface-creative-design-png-image_2974559.png_1")
  co.visible=false;
  cloud.visible=false;
 }
 
 
 
 if(score==500){
   var back = createSprite(200,200)
     back.setAnimation("sun_and_rainbow_1")
   
   text(" YOU HAVE BEEN PROMOTED TO ",170,102)
 var vg = createSprite(180,242)
  vg.setAnimation("bird.jpg_1") 
  gamestate="stop"
   
   
 }
 

 
 
drawSprites() 
}

function clouds(){

  if(World.frameCount%70==0){
    var clouds=createSprite(405,randomNumber(0,400))
    clouds.setAnimation("cloud_1")
    clouds.velocityX=-5
    clouds.scale=0.8
          cloud.add(clouds)}
          
   
}

  
  function coins(){
    if(World.frameCount%30==0){
    var coin = createSprite(403,randomNumber(0,200))
coin.setAnimation("coin_gold_1")
coin.rotationSpeed=21
coin.velocityX=-4
co.add(coin)
if(bird.isTouching(co)){
  co.destroyEach()
  score=score+1
  playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3")
  
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
