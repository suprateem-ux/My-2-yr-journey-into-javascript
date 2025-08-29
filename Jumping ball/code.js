

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["699c884f-280d-4f2b-b172-09d6e7b2d679","bf77f2c5-2798-4207-89eb-3b7f098c8fb5","265fdd5d-32b2-4ad4-ab70-f56b826e7293","7b82555a-aa6f-4436-83b7-ba65ac2a84e1","82fe103b-faab-441b-bf10-985245e150b0","be54eb7a-bd25-474c-ab36-fe0543c552b4","2ce93f72-6c5a-4735-95c7-8c544a3f710d","8d022a89-9a31-4990-bf04-abee6fdf5121","39884045-4837-4b4e-a163-2178d776f2ef","7be7b2f6-f0b9-4082-904d-43829aab6974","0cd2c452-5069-4b30-8167-bbca8b08b60b"],"propsByKey":{"699c884f-280d-4f2b-b172-09d6e7b2d679":{"name":"beachball_1","sourceUrl":"assets/api/v1/animation-library/gamelab/vGWAFa.mUne7tCUqj7VEz594sKyohbhM/category_sports/beachball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"vGWAFa.mUne7tCUqj7VEz594sKyohbhM","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/vGWAFa.mUne7tCUqj7VEz594sKyohbhM/category_sports/beachball.png"},"bf77f2c5-2798-4207-89eb-3b7f098c8fb5":{"name":"obstacle 1","sourceUrl":null,"frameSize":{"x":2,"y":37},"frameCount":1,"looping":true,"frameDelay":12,"version":"627wBgZRUE.JMUgcp1YPqoBaSihm8iqX","loadedFromSource":true,"saved":true,"sourceSize":{"x":2,"y":37},"rootRelativePath":"assets/bf77f2c5-2798-4207-89eb-3b7f098c8fb5.png"},"265fdd5d-32b2-4ad4-ab70-f56b826e7293":{"name":"obstacle 2","sourceUrl":null,"frameSize":{"x":2,"y":37},"frameCount":1,"looping":true,"frameDelay":12,"version":"rTzf6SSCMK5R3HeN.AdIT.YRU8QWy66a","loadedFromSource":true,"saved":true,"sourceSize":{"x":2,"y":37},"rootRelativePath":"assets/265fdd5d-32b2-4ad4-ab70-f56b826e7293.png"},"7b82555a-aa6f-4436-83b7-ba65ac2a84e1":{"name":"red ","sourceUrl":null,"frameSize":{"x":2,"y":37},"frameCount":1,"looping":true,"frameDelay":12,"version":"IlxG3RpbiZtqugLm3J0w1.oKhdykzs7F","loadedFromSource":true,"saved":true,"sourceSize":{"x":2,"y":37},"rootRelativePath":"assets/7b82555a-aa6f-4436-83b7-ba65ac2a84e1.png"},"82fe103b-faab-441b-bf10-985245e150b0":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":61,"y":56},"frameCount":1,"looping":true,"frameDelay":12,"version":"FaMfVqQpjlj4A.xyoN_sB.mxGopEg7gp","loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":56},"rootRelativePath":"assets/82fe103b-faab-441b-bf10-985245e150b0.png"},"be54eb7a-bd25-474c-ab36-fe0543c552b4":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"sISmnFKmA8zNBNuNiGPsN6s.1sg.VbVc","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/be54eb7a-bd25-474c-ab36-fe0543c552b4.png"},"2ce93f72-6c5a-4735-95c7-8c544a3f710d":{"name":"animation_2_copy_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"QttpCRDf7KCZvvX2lv5QbO2A9fbXDyEo","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/2ce93f72-6c5a-4735-95c7-8c544a3f710d.png"},"8d022a89-9a31-4990-bf04-abee6fdf5121":{"name":"animation_2_3","sourceUrl":null,"frameSize":{"x":80,"y":62},"frameCount":1,"looping":true,"frameDelay":12,"version":"V9m2.InVvlZnPoMo89S9YdigDwoMtf5z","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":62},"rootRelativePath":"assets/8d022a89-9a31-4990-bf04-abee6fdf5121.png"},"39884045-4837-4b4e-a163-2178d776f2ef":{"name":"animation_2_copy_2","sourceUrl":null,"frameSize":{"x":80,"y":62},"frameCount":1,"looping":true,"frameDelay":12,"version":"Cx7mzJnKuk70gZk5lHk5bCyHXsPw.JgR","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":62},"rootRelativePath":"assets/39884045-4837-4b4e-a163-2178d776f2ef.png"},"7be7b2f6-f0b9-4082-904d-43829aab6974":{"name":"animation_2_4","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"},"0cd2c452-5069-4b30-8167-bbca8b08b60b":{"name":"score","sourceUrl":null,"frameSize":{"x":39,"y":38},"frameCount":1,"looping":true,"frameDelay":12,"version":"1ceggId5eCdUbcuVsNpNyCZz5XDLIpkb","loadedFromSource":true,"saved":true,"sourceSize":{"x":39,"y":38},"rootRelativePath":"assets/0cd2c452-5069-4b30-8167-bbca8b08b60b.png"}}};
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


var obs1=createSprite(420,50);
obs1.setAnimation("obstacle 1");
obs1.height=randomNumber(130,200);
obs1.width=20;
obs1.velocityX=-5;

var life = 3;


stopSound("assets/default.mp3");

var obs2 = createSprite(420,350);
obs2.setAnimation("obstacle 2");
obs2.height=randomNumber(130,200);
obs2.width=20;
obs2.velocityX=-5;

var ball = createSprite(200,200);
ball.setAnimation("beachball_1");
ball.scale=0.15;

var score = 0;


function draw() {
  background("black");
  if(obs1.x<200){
    
     obs1=createSprite(420,50);
obs1.setAnimation("obstacle 1");
obs1.height=randomNumber(130,200);
obs1.width=20;
obs1.velocityX=-6;
score ++;
var sco = createSprite(200,200);
sco.setAnimation("score");
sco.setSpeedAndDirection(5,30);
playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");

  }
  if(obs2.x<200){
    obs2 = createSprite(420,350);
obs2.setAnimation("obstacle 2");
obs2.height=randomNumber(130,200);
obs2.width=20;
obs2.velocityX=-6;
  }
  
  if(keyWentDown("space")){
    ball.velocityY=-7.-score/3;
    
  }
  
    
  ball.velocityY=ball.velocityY+0.5;
  
  if(ball.isTouching(obs1)||ball.y<0){
    obs1.setAnimation("red ");
    life=life-1;
    ball.velocityX=5
  

    
    
    
  }
  
  if(ball.isTouching(obs2)||ball.y>400){
    obs2.setAnimation("red ");
     
  life=life-1;


    
  
   
  }
  textSize(30);
  text("score="+score,202,45);
  text("life="+life,200,100);
  
  if(life==0){
   ball.velocityY=0;
    obs1.velocityX=0;
    obs2.velocityX=0;
    textSize(40);
  fill("red");
  text("GAME OVER",45,216);
  var rec = createSprite(179,204);
  rec.setAnimation("animation_2_3");
  rec.scale=4.956; 
  }
  
 
  drawSprites();
  
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
