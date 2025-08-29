

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["75654d0c-cc54-4cbd-9248-c0a680c9b841","c5c4876a-65ae-4622-8955-0aa5fea3055b"],"propsByKey":{"75654d0c-cc54-4cbd-9248-c0a680c9b841":{"name":"1.png_1","sourceUrl":null,"frameSize":{"x":46,"y":46},"frameCount":12,"looping":true,"frameDelay":60,"version":"4TsTnkhZQ_S5ym0TN3Jj_Bdlv0o3j8r3","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":184},"rootRelativePath":"assets/75654d0c-cc54-4cbd-9248-c0a680c9b841.png"},"c5c4876a-65ae-4622-8955-0aa5fea3055b":{"name":"earth.png_1","sourceUrl":"assets/v3/animations/ejNMyTJNiqhgm6lNurJCVmwKIDDZyXCLgFiWK-_JGb0/c5c4876a-65ae-4622-8955-0aa5fea3055b.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":4,"version":"yon1jRFgFXQpY5sV7H5FhrzR1cckcD8f","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/v3/animations/ejNMyTJNiqhgm6lNurJCVmwKIDDZyXCLgFiWK-_JGb0/c5c4876a-65ae-4622-8955-0aa5fea3055b.png"}}};
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

var earth = createSprite(200,200);
earth.setAnimation("earth.png_1");
earth.rotationSpeed=-10
var moon = createSprite(78,74);
moon.setAnimation("1.png_1");
moon.visible=false;
function draw() {
  background("black");
  drawSprites();
  textSize(30);
  if(World.seconds<3){
  text("welcome to the phases of the moon",20,40);  
  }
  
  if(World.seconds==4){
    moon.visible=true;
    moon.setFrame(1)
  }
  
  if(World.seconds==5){
    moon.x=208;
    moon.y=66;
    moon.setFrame(2)
  }
  
if(World.seconds==6){
  moon.x=340
  moon.y=108
  moon.setFrame(3)
}
if(World.seconds==7){
  moon.x=352
  moon.y=198
  moon.setFrame(4)
}
if(World.seconds==8){
  moon.x=312
  moon.y=294
  moon.setFrame(5)
}
if(World.seconds==9){
  moon.x=194
  moon.y=314
  moon.setFrame(6)
}
if(World.seconds==10){
  moon.x=96
  moon.y=310
  moon.setFrame(7)
}
if(World.seconds==11){
  moon.x=68
  moon.y=192
  moon.setFrame(8)
}
if(World.seconds==12){
  moon.x=96
  moon.y=62
  moon.setFrame(9)
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
