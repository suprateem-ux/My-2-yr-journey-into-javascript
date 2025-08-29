

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["0a551681-e85e-41cd-b3df-30aeeef39126","2e14004c-0bf7-4c83-8fed-5ef67e432e61","6b73b52d-1826-4ebf-a2a4-5db8a6ed9c5f","643a0670-25ef-47e6-863e-5a0b8ca9d943","59e812fa-c3cc-4509-958f-a2451afd1e00","1e860652-f78a-455d-ba1d-a1beeea9dae9","17de7782-ebd5-4652-acbe-f37a1077b662","9c037106-c585-4fee-8191-dfd01eccae4b","3ea92f51-117e-4aea-b146-7110b7e2f869","58d13d53-35c9-41d7-9522-9563b11673e3","939a5ede-fbc0-4c54-a41c-b0f7f72a0475","a9ce8cce-4032-4a19-89ba-8f978518cf9c","4d36b9c5-af44-4a91-a3f2-143c03ce5057"],"propsByKey":{"0a551681-e85e-41cd-b3df-30aeeef39126":{"name":"meadow_1","sourceUrl":"assets/api/v1/animation-library/gamelab/6M6MI5k464mg5p8h89sU8tyvtAbANGea/category_backgrounds/meadow.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"6M6MI5k464mg5p8h89sU8tyvtAbANGea","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6M6MI5k464mg5p8h89sU8tyvtAbANGea/category_backgrounds/meadow.png"},"2e14004c-0bf7-4c83-8fed-5ef67e432e61":{"name":"red_alien_1","sourceUrl":"assets/api/v1/animation-library/gamelab/PHeFO1Wvqtn9yXIG11PmQB9eDVZJgkZV/category_fantasy/red_alien.png","frameSize":{"x":318,"y":333},"frameCount":1,"looping":true,"frameDelay":2,"version":"PHeFO1Wvqtn9yXIG11PmQB9eDVZJgkZV","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":318,"y":333},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PHeFO1Wvqtn9yXIG11PmQB9eDVZJgkZV/category_fantasy/red_alien.png"},"6b73b52d-1826-4ebf-a2a4-5db8a6ed9c5f":{"name":"kid_42_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Ol296q7gAf0h40KzajFDpJw7o6mUWSV6/category_people/kid_42.png","frameSize":{"x":243,"y":331},"frameCount":1,"looping":true,"frameDelay":2,"version":"Ol296q7gAf0h40KzajFDpJw7o6mUWSV6","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":243,"y":331},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Ol296q7gAf0h40KzajFDpJw7o6mUWSV6/category_people/kid_42.png"},"643a0670-25ef-47e6-863e-5a0b8ca9d943":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":8,"y":8},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZITZHDsvUCySi31ri5duc8Q2IWCv0vyG","loadedFromSource":true,"saved":true,"sourceSize":{"x":8,"y":8},"rootRelativePath":"assets/643a0670-25ef-47e6-863e-5a0b8ca9d943.png"},"59e812fa-c3cc-4509-958f-a2451afd1e00":{"name":"goldui28_result_1","sourceUrl":"assets/api/v1/animation-library/gamelab/4yYO_IT42.v0HIIpWPdef86pPtR4_TWf/category_icons/goldui28_result.png","frameSize":{"x":396,"y":392},"frameCount":1,"looping":true,"frameDelay":2,"version":"4yYO_IT42.v0HIIpWPdef86pPtR4_TWf","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":392},"rootRelativePath":"assets/api/v1/animation-library/gamelab/4yYO_IT42.v0HIIpWPdef86pPtR4_TWf/category_icons/goldui28_result.png"},"1e860652-f78a-455d-ba1d-a1beeea9dae9":{"name":"video_game_controller_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Gy0gwj2P1IzLIO0D6ZGfPVgtxfpffxWe/category_household_objects/video_game_controller.png","frameSize":{"x":98,"y":63},"frameCount":1,"looping":true,"frameDelay":2,"version":"Gy0gwj2P1IzLIO0D6ZGfPVgtxfpffxWe","categories":["household_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":63},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Gy0gwj2P1IzLIO0D6ZGfPVgtxfpffxWe/category_household_objects/video_game_controller.png"},"17de7782-ebd5-4652-acbe-f37a1077b662":{"name":"textGameOver_1","sourceUrl":"assets/api/v1/animation-library/gamelab/wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe/category_video_games/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe/category_video_games/textGameOver.png"},"9c037106-c585-4fee-8191-dfd01eccae4b":{"name":"bowArrow_1","sourceUrl":"assets/api/v1/animation-library/gamelab/0G6_ATORAsT1jHbZtamb3LjKpz._KJOv/category_tools/bowArrow.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"0G6_ATORAsT1jHbZtamb3LjKpz._KJOv","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/0G6_ATORAsT1jHbZtamb3LjKpz._KJOv/category_tools/bowArrow.png"},"3ea92f51-117e-4aea-b146-7110b7e2f869":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":51,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"ID3wCEH0NmN9nLnTYzv5Dd6Fppjv_ovU","loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":30},"rootRelativePath":"assets/3ea92f51-117e-4aea-b146-7110b7e2f869.png"},"58d13d53-35c9-41d7-9522-9563b11673e3":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"7vAANt2_JfzeKSD8Fl.L6GpaHokGx8HB","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/58d13d53-35c9-41d7-9522-9563b11673e3.png"},"939a5ede-fbc0-4c54-a41c-b0f7f72a0475":{"name":"animation_4","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"},"a9ce8cce-4032-4a19-89ba-8f978518cf9c":{"name":"kid-right","sourceUrl":"assets/api/v1/animation-library/gamelab/4UkVmv2Wco4FlfzqklXSgV57WwumuZai/category_people/kid_42_side.png","frameSize":{"x":206,"y":330},"frameCount":1,"looping":true,"frameDelay":2,"version":"4UkVmv2Wco4FlfzqklXSgV57WwumuZai","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":206,"y":330},"rootRelativePath":"assets/api/v1/animation-library/gamelab/4UkVmv2Wco4FlfzqklXSgV57WwumuZai/category_people/kid_42_side.png"},"4d36b9c5-af44-4a91-a3f2-143c03ce5057":{"name":"kid-left","sourceUrl":null,"frameSize":{"x":206,"y":330},"frameCount":1,"looping":true,"frameDelay":12,"version":"vuc51m_FA8Z.b9dGoF8W702au.StXTev","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":206,"y":330},"rootRelativePath":"assets/4d36b9c5-af44-4a91-a3f2-143c03ce5057.png"}}};
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

var back = createSprite(200,200)
back.setAnimation("meadow_1")

var boy = createSprite(204,304)
boy.setAnimation("kid_42_1")
boy.scale=0.4

  var aliens1 = createSprite(450,352)
aliens1.setAnimation("red_alien_1")
aliens1.scale=0.2
aliens1.velocityX=-0.734;


var a2 = createSprite(10,350);
a2.setAnimation("red_alien_1");
a2.scale =0.2;
a2.velocityX=1;


// var aliens2 = createSprite(10,352)
// aliens2.setAnimation("red_alien_1")
// aliens2.scale=0.2
// aliens2.velocityX=1

var gamestate = "start"

var w = createSprite()
w.setAnimation("animation_3")
w.scale=1

var bullet1 = createSprite(w.x,354)
bullet1.setAnimation( "animation_1")
bullet1.scale = 2 
bullet1.visible=false

function draw() {
  boy.setAnimation("kid_42_1")
  
  
  
  if(aliens1.isTouching(boy)){
    gamestate="stop"
    background="black"
    var text = createSprite(200,200)
    text.setAnimation("textGameOver_1")
    text.visible=true
  
    aliens1.velocityX=0
    a2.velocityX=0
  }
  
  if(bullet1.isTouching(aliens1)){
    aliens1.x=400
    aliens1.visible="false"
   

  }
  if(bullet1.isTouching(a2)){
    a2.x=0
    a2.visible="false"
  }
  
  // if(bullet1.isTouching(aliens2)){
  //   aliens2.destroy()
  // }
  if(keyDown("right")){
    boy.setAnimation("kid-right")
    boy.x=boy.x+1
    if(keyWentDown("space")){
    bullet1.visible=true
    bullet1.velocityX=5
    bullet1.x=boy.x
    bullet1.y=boy.y+30
  }

  }
   if(keyDown("left")){
    boy.setAnimation("kid-left")
    boy.x=boy.x-1
    if(keyWentDown("space")){
    bullet1.visible=true
    bullet1.velocityX=-5
    bullet1.x=boy.x
    bullet1.y=boy.y+30
  }

  }
  
  
  

  

  
  
  drawSprites()
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
