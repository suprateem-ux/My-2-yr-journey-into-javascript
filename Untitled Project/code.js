

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b3fa3532-f57d-41f6-a082-6987cb7b035d","57f53118-d282-4f83-97d2-a0ed4d794799","66e0aee2-772c-4fe0-b695-2e74a304cd42","bd7ac6d1-667f-4277-a1a2-8f8d57d1ae8d","df48ec0d-0d49-4750-a38e-e16e942f7989","0e70d145-0f37-44cb-a130-9073e35b5f45","af80d5db-c391-4a29-8368-2be61bf4fc7b","9784b884-92dd-454e-b216-090b8983a22f"],"propsByKey":{"b3fa3532-f57d-41f6-a082-6987cb7b035d":{"name":"png-transparent-bullet-firearm-ammunition-pistol-bullets-ammunition-weapon-metal.png_1","sourceUrl":"assets/v3/animations/6bum59BUqpSerqZHi86SM3pABcdljlCrXtF7-ny8kHQ/b3fa3532-f57d-41f6-a082-6987cb7b035d.png","frameSize":{"x":920,"y":690},"frameCount":1,"looping":true,"frameDelay":4,"version":"4aP8gOOvwTd0wOWxLLP6w2Nmv7YuEmOw","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":920,"y":690},"rootRelativePath":"assets/v3/animations/6bum59BUqpSerqZHi86SM3pABcdljlCrXtF7-ny8kHQ/b3fa3532-f57d-41f6-a082-6987cb7b035d.png"},"57f53118-d282-4f83-97d2-a0ed4d794799":{"name":"png-transparent-baby-boss-boy-character-illustration-the-boss-baby-brother-dreamworks-animation-film-the-boss-baby-child-toddler-boy.png_1","sourceUrl":"assets/v3/animations/6bum59BUqpSerqZHi86SM3pABcdljlCrXtF7-ny8kHQ/57f53118-d282-4f83-97d2-a0ed4d794799.png","frameSize":{"x":920,"y":1230},"frameCount":1,"looping":true,"frameDelay":4,"version":"sveuCKR3glEYE08Bhc_0U8xxmm9vOuLu","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":920,"y":1230},"rootRelativePath":"assets/v3/animations/6bum59BUqpSerqZHi86SM3pABcdljlCrXtF7-ny8kHQ/57f53118-d282-4f83-97d2-a0ed4d794799.png"},"66e0aee2-772c-4fe0-b695-2e74a304cd42":{"name":"background_landscape01_1","sourceUrl":"assets/api/v1/animation-library/gamelab/O75xN5U40Qc2TA25Y0Qb5wt5W_jPbtoa/category_backgrounds/background_landscape01.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"O75xN5U40Qc2TA25Y0Qb5wt5W_jPbtoa","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/O75xN5U40Qc2TA25Y0Qb5wt5W_jPbtoa/category_backgrounds/background_landscape01.png"},"bd7ac6d1-667f-4277-a1a2-8f8d57d1ae8d":{"name":"istockphoto-1153576618-612x612.jpg_1","sourceUrl":null,"frameSize":{"x":612,"y":408},"frameCount":1,"looping":true,"frameDelay":12,"version":".5LIs.m.m8yFNlxO13KLxku3AGuzzu.t","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":612,"y":408},"rootRelativePath":"assets/bd7ac6d1-667f-4277-a1a2-8f8d57d1ae8d.png"},"df48ec0d-0d49-4750-a38e-e16e942f7989":{"name":"retroship_11_1","sourceUrl":"assets/api/v1/animation-library/gamelab/98CoUDkkxyGlMd6u0aTfZi1984eDgh6g/category_retro/retroship_11.png","frameSize":{"x":257,"y":360},"frameCount":1,"looping":true,"frameDelay":2,"version":"98CoUDkkxyGlMd6u0aTfZi1984eDgh6g","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":257,"y":360},"rootRelativePath":"assets/api/v1/animation-library/gamelab/98CoUDkkxyGlMd6u0aTfZi1984eDgh6g/category_retro/retroship_11.png"},"0e70d145-0f37-44cb-a130-9073e35b5f45":{"name":"green_shirt_one_arm_crossed_1","sourceUrl":"assets/api/v1/animation-library/gamelab/mu4y9wHym.md7dourxlOW2.aYA1vODrc/category_people/green_shirt_one_arm_crossed.png","frameSize":{"x":109,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"mu4y9wHym.md7dourxlOW2.aYA1vODrc","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":109,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/mu4y9wHym.md7dourxlOW2.aYA1vODrc/category_people/green_shirt_one_arm_crossed.png"},"af80d5db-c391-4a29-8368-2be61bf4fc7b":{"name":"sword2_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ao_nAChsEDiE4Ey3LxARAi.M3.360IbA/category_video_games/sword2.png","frameSize":{"x":390,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"ao_nAChsEDiE4Ey3LxARAi.M3.360IbA","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ao_nAChsEDiE4Ey3LxARAi.M3.360IbA/category_video_games/sword2.png"},"9784b884-92dd-454e-b216-090b8983a22f":{"name":"yellow_shirt_cast_1","sourceUrl":"assets/api/v1/animation-library/gamelab/j4dIZ4NbbPf0tn0WcdEPq70sAkFNMI_T/category_people/yellow_shirt_cast.png","frameSize":{"x":177,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"j4dIZ4NbbPf0tn0WcdEPq70sAkFNMI_T","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":177,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/j4dIZ4NbbPf0tn0WcdEPq70sAkFNMI_T/category_people/yellow_shirt_cast.png"}}};
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

var ground = createSprite(200,200);
ground.setAnimation("background_landscape01_1");

var hunter = createSprite(102,40);
hunter.setAnimation("retroship_11_1");
hunter.scale=0.5;

var sword = createSprite(102,40);
sword.setAnimation("sword2_1");
sword.scale=0.3;
sword.velocityX=4;

var man = createSprite(324,291);
man.setAnimation("yellow_shirt_cast_1");
man.scale=0.4;

var state=1;

var score = 0;

function draw() {
  drawSprites();
}
if(state==1){
  man.y=World.mouseY;
}
  if(sword.isTouching(man)){
    score=score+1;
    man.velocityY=0;
    sword.velocityX=0;
    state=0;
    
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
