

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["705c7db3-5822-43b2-adb5-813f1693d77d","774e25c8-5860-4591-ae49-dd9db0c06ab1","a683b945-738a-4d8f-8387-6f7bb1fddfa0","28197506-97a9-4c83-8141-7e1eec3696c3","9254c36f-492a-4a3e-a2bd-a521ec42eb29","e79e9b67-d298-4c75-af93-55921905f505","b1ac4306-8c87-4253-b226-1a0a8b2f4354","1f8e3847-2d81-46ac-945c-064b31c6c216","3d84f568-f5bc-40fe-bb9c-5df5999df9ae","815e1f69-a4fc-4110-bd49-24c6ebae1dbc","7d693e41-2705-4117-bb8b-3f4e8f3d558a"],"propsByKey":{"705c7db3-5822-43b2-adb5-813f1693d77d":{"name":"FreeL","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"Nmcwg7vtIErR5D1zAaxJ1vG_qfr.A0ha","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/705c7db3-5822-43b2-adb5-813f1693d77d.png"},"774e25c8-5860-4591-ae49-dd9db0c06ab1":{"name":"FreeR2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"4Q00MtGjoQVFOVwdgF36gpIniRiMr7ou","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/774e25c8-5860-4591-ae49-dd9db0c06ab1.png"},"a683b945-738a-4d8f-8387-6f7bb1fddfa0":{"name":"fish2L","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"qolbHkJR7HE2Qsu9TlsnQnn7IT2L0EsZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/a683b945-738a-4d8f-8387-6f7bb1fddfa0.png"},"28197506-97a9-4c83-8141-7e1eec3696c3":{"name":"fish2R","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"rYIS_jnzwpTSyL.D__cvrTe.0tTQgdC0","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/28197506-97a9-4c83-8141-7e1eec3696c3.png"},"9254c36f-492a-4a3e-a2bd-a521ec42eb29":{"name":"Caught2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":".vWo3KDlkgl7.Ea4sXi7ldmoXV0nUQhQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/9254c36f-492a-4a3e-a2bd-a521ec42eb29.png"},"e79e9b67-d298-4c75-af93-55921905f505":{"name":"Caught","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"ae2c7yWADjWQB0VAEz9G5jNGlpWx27T5","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/e79e9b67-d298-4c75-af93-55921905f505.png"},"b1ac4306-8c87-4253-b226-1a0a8b2f4354":{"name":"Hook","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"7W3FXEjeHgwkWYqBBinfVmHlERXUlzS5","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/b1ac4306-8c87-4253-b226-1a0a8b2f4354.png"},"1f8e3847-2d81-46ac-945c-064b31c6c216":{"name":"Catcher","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"Bp07gPbNIy5RgVAhqCkc64HFIiIQ_hem","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/1f8e3847-2d81-46ac-945c-064b31c6c216.png"},"3d84f568-f5bc-40fe-bb9c-5df5999df9ae":{"name":"Water1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"nBlkRXtaaNC2c0u4XD31FY0EKS0MeHpA","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/3d84f568-f5bc-40fe-bb9c-5df5999df9ae.png"},"815e1f69-a4fc-4110-bd49-24c6ebae1dbc":{"name":"Water2","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"jM2ET5ao_05aZD1eiHowQ1lDH1XR4J4y","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/815e1f69-a4fc-4110-bd49-24c6ebae1dbc.png"},"7d693e41-2705-4117-bb8b-3f4e8f3d558a":{"name":"Water3","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"Camg_StBNxhx1gqpOef_I4WR9UoLRRwc","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/7d693e41-2705-4117-bb8b-3f4e8f3d558a.png"}}};
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

//made by @suprateem11
var Water = createSprite(200, 200);
var Fish = createSprite(200, 350);
var Fish1 = createSprite(200, 350);
var Fish2 = createSprite(250, 350);
var CanFish = 0;
var Amount = 1;
var yay = 0;
var fish0Caught = 0;
var fish1Caught = 0;
var fish2Caught = 0;
var Pfish0Caught = 0;
var Pfish1Caught = 0;
var Pfish2Caught = 0;
var Pfish3Caught = 0;
var Pfish4Caught = 0;
var BackgroundColor = "skyblue";
var FrenzyString = false;
var frenzyX = 0;
var StartingString = true;
var starterX = 0;
var WinnerString = false;
var winner1X = 0;
var WinnerString2 = false;
var winner2X = 325;
var winner1Xcheck = true;
var winner2Xcheck = true;
var lvl1complete = 0;
var lvl2complete = 0;
var Amount2 = 3;
var Catcher = createSprite(200, 0);
var Pfish = createSprite(200, 345);
var Pfish1 = createSprite(200, 350);
var Pfish2 = createSprite(200, 340);
var Pfish3 = createSprite(200, 360);
var Pfish4 = createSprite(200, 365);
var Hook = createSprite(200, 0);
Pfish.visible = false;
Pfish1.visible = false;
Pfish2.visible = false;
Pfish3.visible = false;
Pfish4.visible = false;
var AmountTwo55 = 0;
var extra = 0;

//Setting animations
Water.setAnimation("Water1");
Fish.setAnimation("FreeR2");
Fish1.setAnimation("FreeL");
Fish2.setAnimation("FreeR2");
Catcher.setAnimation("Catcher");
Hook.setAnimation("Hook");
Pfish.setAnimation("fish2L");
Pfish1.setAnimation("fish2L");
Pfish2.setAnimation("fish2L");
Pfish3.setAnimation("fish2R");
Pfish4.setAnimation("fish2R");

//Sprite editing stuff
Hook.height = 200;
Hook.width = 200;
Fish.height = 75;
Fish.width = 75;
Fish1.height = 75;
Fish1.width = 75;
Fish2.height = 75;
Fish2.width = 75;
Catcher.height = 200;
Catcher.width = 200;
Fish.velocityX = 4;
Fish.rotation = 0;
Fish1.velocityX = -3;
Fish1.rotation = 0;
Fish2.velocityX = 5;
Fish2.rotation = 0;
Pfish.width = 75;
Pfish.height = 75;
Pfish.velocityX = -6.5;
Pfish.rotation = 0;
Pfish1.width = 75;
Pfish1.height = 75;
Pfish1.velocityX = -7.75;
Pfish1.rotation = 0;
Pfish2.width = 75;
Pfish2.height = 75;
Pfish2.velocityX = -8;
Pfish2.rotation = 0;
Pfish3.width = 75;
Pfish3.height = 75;
Pfish3.velocityX = 7;
Pfish3.rotation = 0;
Pfish4.width = 75;
Pfish4.height = 75;
Pfish4.velocityX = 67;
Pfish4.rotation = 0;

function draw() {
  //Draw background
  background(BackgroundColor);
  stroke(rgb(25, 18, 17));
  strokeWeight(7.5);

  //Calling functions
  MoveFish();
  Hooker();
  Return();
  dedFish();
  
  //Stuff
  textFont("Fantasy");
  stroke("black");
  strokeWeight(6.5);
  textSize(30);
  fill("orange");
  text((Amount2 - Amount) + " Fish", 12.5, 35);
  
  //Check if level 2 is ready
  if (Amount == 3) {
    lvl1complete = 1;
  }
  if (Amount == 5) {
    lvl2complete = 1;
  }
  if (lvl1complete == 1) {
    line(Hook.x + 6.5, Hook.y - 97.5, 400, 160);
    if (CanFish == 0) {
      FrenzyString = true;
      Lvl2();
    }
  }
  if (lvl2complete == 1) {
    line(Hook.x + 6.5, Hook.y - 97.5, 400, 160);
    if (CanFish == 0) {
      Win();
    }
  }
  
  //Level text
  if (FrenzyString == true){
    textFont("Fantasy");
    stroke("yellow");
    strokeWeight(6.5);
    textSize(50);
    fill("pink");
    text("FRENZY-LVL 2", frenzyX, 275);
    frenzyX = frenzyX + 7.5;
  }
  if (StartingString == true){
    textFont("Fantasy");
    stroke("yellow");
    strokeWeight(6.5);
    textSize(50);
    fill("skyblue");
    text("LVL 1", starterX, 275);
    starterX = starterX + 7.5;
  }
  if (WinnerString == true){
    textFont("Fantasy");
    stroke("black");
    strokeWeight(6.5);
    textSize(50);
    fill("yellow");
    text("YOU", winner1X, 225);
    if (winner1Xcheck == true) {
      winner1X = winner1X + 8.5;
    }
    if (winner1X > 150) {
      winner1Xcheck = false;
    }
  }
  if (WinnerString2 == true){
    textFont("Fantasy");
    stroke("black");
    strokeWeight(6.5);
    textSize(50);
    fill("lightgreen");
    text("WIN!", winner2X, 275);
    if (winner2Xcheck == true) {
      winner2X = winner2X - 8.5;
    }
    if (winner2X < 155) {
      winner2Xcheck = false;
      CanFish = 1;
      extra = 1;
    }
  }
  
  //Caught text when fish is caught
  if (yay == 1) {
    textFont("Verdana");
    stroke("black");
    strokeWeight(5);
    textSize(40);
    fill("lightgreen");
    text("CATCH!", 245, 45);
  } else {
    if (yay == 0) {
      if (CanFish == 1) {
        if (extra == 0) {
          textFont("Verdana");
          stroke("black");
          strokeWeight(5);
          textSize(40);
          fill("red");
          text("MISS!", 275, 45);
        }
      }
    } else {
      noFill();
    }
  }
  
  //Check if fish are caught
  if (fish0Caught == 1) {
    fishZeroCaught();
  }
  if (fish1Caught == 1) {
    fishOneCaught();
  }
  if (fish2Caught == 1) {
    fishTwoCaught();
  }
  if (Pfish0Caught == 1) {
    PfishCaught();
  }
  if (Pfish1Caught == 1) {
    PPfishCaught();
  }
  if (Pfish2Caught == 1) {
    PPPfishCaught();
  }
  if (Pfish3Caught == 1) {
    PPPPfishCaught();
  }
  if (Pfish4Caught == 1) {
    PPPPPfishCaught();
  }
  
  //Set colliders
  Pfish.debug = 0;
  Pfish1.debug = 0;
  Pfish2.debug = 0;
  Pfish3.debug = 0;
  Pfish4.debug = 0;
  Catcher.debug = 0;
  Catcher.setCollider("rectangle", -5, 30, 10, 15);
  Fish.setCollider("rectangle", 0, 0, 65, 45);
  Fish1.setCollider("rectangle", 0, 0, 65, 45);
  Fish2.setCollider("rectangle", 0, 0, 65, 45);
  Pfish.setCollider("rectangle", -5, 7, 65, 35);
  Pfish1.setCollider("rectangle", -5, 7, 65, 35);
  Pfish2.setCollider("rectangle", -5, 7, 65, 35);
  Pfish3.setCollider("rectangle", -5, 7, 65, 35);
  Pfish4.setCollider("rectangle", -5, 7, 65, 35);
  if (keyWentDown("F")) {
    if (keyWentDown("I")) {
      if (keyWentDown("S")) {
        if (keyWentDown("H")) {
          Hook.height = 350;
          Hook.height = 350;
          Catcher.width = 350;
          Catcher.width = 350;
        }
      }
    }
  }

  drawSprites();
}

//Level 2 & 3 function
function Lvl2() {
  BackgroundColor = "pink";
  Water.setAnimation("Water2");
  if (AmountTwo55 == 0) {
    AmountTwo5();
    AmountTwo55 = 1;
  }
  Pfish.visible = true;
  Pfish1.visible = true;
  Pfish2.visible = true;
  Pfish3.visible = true;
  Pfish4.visible = true;
}
function AmountTwo5() {
  Amount = 0;
  Amount2 = 5;
}
function Win() {
  WinnerString = true;
  WinnerString2 = true;
  Water.setAnimation("Water3");
}

//Animate and move the fish
function MoveFish() {
  if (Fish.x > 380) {
    Fish.setAnimation("FreeL");
    Fish.velocityX = -4;
  } else {
    if (Fish.x < 20) {
      Fish.setAnimation("FreeR2");
      Fish.velocityX = 4;
    }
  }
  if (Fish1.x > 380) {
    Fish1.setAnimation("FreeL");
    Fish1.velocityX = -3;
  } else {
    if (Fish1.x < 20) {
      Fish1.setAnimation("FreeR2");
      Fish1.velocityX = 3;
    }
  }
  if (Fish2.x > 380) {
    Fish2.setAnimation("FreeL");
    Fish2.velocityX = -5;
  } else {
    if (Fish2.x < 20) {
      Fish2.setAnimation("FreeR2");
      Fish2.velocityX = 5;
    }
  }
  if (Pfish.x > 380) {
    Pfish.setAnimation("fish2L");
    Pfish.velocityX = -6.5;
  } else {
    if (Pfish.x < 20) {
      Pfish.setAnimation("fish2R");
      Pfish.velocityX = 6.5;
    }
  }
  if (Pfish1.x > 380) {
    Pfish1.setAnimation("fish2L");
    Pfish1.velocityX = -7.75;
  } else {
    if (Pfish1.x < 20) {
      Pfish1.setAnimation("fish2R");
      Pfish1.velocityX = 7.75;
    }
  }
  if (Pfish2.x > 380) {
    Pfish2.setAnimation("fish2L");
    Pfish2.velocityX = -8;
  } else {
    if (Pfish2.x < 20) {
      Pfish2.setAnimation("fish2R");
      Pfish2.velocityX = 8;
    }
  }
  if (Pfish3.x > 380) {
    Pfish3.setAnimation("fish2L");
    Pfish3.velocityX = -7;
  } else {
    if (Pfish3.x < 20) {
      Pfish3.setAnimation("fish2R");
      Pfish3.velocityX = 7;
    }
  }
  if (Pfish4.x > 380) {
    Pfish4.setAnimation("fish2L");
    Pfish4.velocityX = -6;
  } else {
    if (Pfish4.x < 20) {
      Pfish4.setAnimation("fish2R");
      Pfish4.velocityX = 6;
    }
  }
}

//Move the hook with keys
function Hooker() {
  line(Hook.x + 6.5, Hook.y - 97.5, 400, 160);
  if (keyDown("left")) {
    if (CanFish == 0) {
      Hook.x = Hook.x + -1;
      Catcher.x = Catcher.x + -1;
    }
  }
  if (keyDown("right")) {
    if (CanFish == 0) {
      Hook.x = Hook.x + 1;
      Catcher.x = Catcher.x + 1;
    }
  }
  if (keyWentDown("space")) {
    if (CanFish == 0) {
      if (yay == 0) {
        Hook.y = 300;
        Catcher.y = 300;
        Hook.velocityY = -3 ;
        Catcher.velocityY = -3;
        CanFish = 1;
      }
    }
  }
}

//Return the hook to original place
function Return() {
  if (Hook.y<99) {
    CanFish = 0;
    Hook.velocityY = 0;
    Catcher.velocityY = 0;
    Hook.y = 100;
    Catcher.y = 100;
  }
}

//Start and stop hook movement until ready
function dedFish() {
  if (Fish.isTouching(Catcher)) {
    if (yay == 0) {
      yay = 1;
      fish0Caught = 1;
      Amount = Amount + 1;
    }
    if (Fish.y < 190) {
      Fish.visible = false;
      Fish.x = -50;
      Fish.y = -50;
      Fish.height = 50;
      Fish.width = 50;
      fish0Caught = 0;
      yay = 0;
    }
  }
  if (Fish1.isTouching(Catcher)) {
    if (yay == 0) {
      yay = 1;
      fish1Caught = 1;
      Amount = Amount + 1;
    }
    if (Fish1.y < 190) {
      Fish1.visible = false;
      Fish1.x = -50;
      Fish1.y = -50;
      Fish1.height = 50;
      Fish1.width = 50;
      fish1Caught = 0;
      yay = 0;
    }
  }
  if (Fish2.isTouching(Catcher)) {
    if (yay == 0) {
      yay = 1;
      fish2Caught = 1;
      Amount = Amount + 1;
    }
    if (Fish2.y < 190) {
      Fish2.visible = false;
      Fish2.x = -50;
      Fish2.y = -50;
      Fish2.height = 50;
      Fish2.width = 50;
      fish2Caught = 0;
      yay = 0;
    }
  }
  
  if (Pfish.isTouching(Catcher)) {
    if (lvl1complete == 1) {
      if (yay == 0) {
        yay = 1;
        Pfish0Caught = 1;
        Amount = Amount + 1;
      }
      if (Pfish.y < 190) {
        Pfish.visible = false;
        Pfish.x = -50;
        Pfish.y = -50;
        Pfish.height = 50;
        Pfish.width = 50;
        Pfish0Caught = 0;
        yay = 0;
      }
    }
  }
  if (Pfish1.isTouching(Catcher)) {
    if (lvl1complete == 1) {
      if (yay == 0) {
        yay = 1;
        Pfish1Caught = 1;
        Amount = Amount + 1;
      }
      if (Pfish1.y < 190) {
        Pfish1.visible = false;
        Pfish1.x = -50;
        Pfish1.y = -50;
        Pfish1.height = 50;
        Pfish1.width = 50;
        Pfish1Caught = 0;
        yay = 0;
      }
    }
  }
  if (Pfish2.isTouching(Catcher)) {
    if (lvl1complete == 1) {
      if (yay == 0) {
        yay = 1;
        Pfish2Caught = 1;
        Amount = Amount + 1;
      }
      if (Pfish2.y < 190) {
        Pfish2.visible = false;
        Pfish2.x = -50;
        Pfish2.y = -50;
        Pfish2.height = 50;
        Pfish2.width = 50;
        Pfish2Caught = 0;
        yay = 0;
      }
    }
  }
  if (Pfish3.isTouching(Catcher)) {
    if (lvl1complete == 1) {
      if (yay == 0) {
        yay = 1;
        Pfish3Caught = 1;
        Amount = Amount + 1;
      }
      if (Pfish3.y < 190) {
        Pfish3.visible = false;
        Pfish3.x = -50;
        Pfish3.y = -50;
        Pfish3.height = 50;
        Pfish3.width = 50;
        Pfish3Caught = 0;
        yay = 0;
      }
    }
  }
  if (Pfish4.isTouching(Catcher)) {
    if (lvl1complete == 1) {
      if (yay == 0) {
        yay = 1;
        Pfish4Caught = 1;
        Amount = Amount + 1;
      }
      if (Pfish4.y < 190) {
        Pfish4.visible = false;
        Pfish4.x = -50;
        Pfish4.y = -50;
        Pfish4.height = 50;
        Pfish4.width = 50;
        Pfish4Caught = 0;
        yay = 0;
      }
    }
  }
}

//Check if fish are caught
function fishZeroCaught() {
  Fish.setAnimation("Caught");
  Fish.rotation = 270;
  Fish.velocityX = 0;
  Fish.y = Catcher.y + 90;
  Fish.x = Catcher.x + 0;
}
function fishOneCaught() {
  Fish1.setAnimation("Caught");
  Fish1.rotation = 270;
  Fish1.velocityX = 0;
  Fish1.y = Catcher.y + 90;
  Fish1.x = Catcher.x + 0;
}
function fishTwoCaught() {
  Fish2.setAnimation("Caught");
  Fish2.rotation = 270;
  Fish2.velocityX = 0;
  Fish2.y = Catcher.y + 90;
  Fish2.x = Catcher.x + 0;
}
function PfishCaught() {
  Pfish.setAnimation("Caught2");
  Pfish.rotation = 270;
  Pfish.velocityX = 0;
  Pfish.y = Catcher.y + 90;
  Pfish.x = Catcher.x + 0;
}
function PPfishCaught() {
  Pfish1.setAnimation("Caught2");
  Pfish1.rotation = 270;
  Pfish1.velocityX = 0;
  Pfish1.y = Catcher.y + 90;
  Pfish1.x = Catcher.x + 0;
}
function PPPfishCaught() {
  Pfish2.setAnimation("Caught2");
  Pfish2.rotation = 270;
  Pfish2.velocityX = 0;
  Pfish2.y = Catcher.y + 90;
  Pfish2.x = Catcher.x + 0;
}
function PPPPfishCaught() {
  Pfish3.setAnimation("Caught2");
  Pfish3.rotation = 270;
  Pfish3.velocityX = 0;
  Pfish3.y = Catcher.y + 90;
  Pfish3.x = Catcher.x + 0;
}
function PPPPPfishCaught() {
  Pfish4.setAnimation("Caught2");
  Pfish4.rotation = 270;
  Pfish4.velocityX = 0;
  Pfish4.y = Catcher.y + 90;
  Pfish4.x = Catcher.x + 0;
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
