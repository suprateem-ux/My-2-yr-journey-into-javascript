

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["5e029dea-1cef-4635-9450-e1489343f986","f177f49c-d5f2-4736-8784-79f3ad6a5e39","4e84d867-dfbb-4bc8-9d30-6dd254fe3e67","4a3e7319-492e-4e1a-87ff-711228942541","cb8d20fa-2faf-43e4-9d30-01a57aa67a4c","78cef099-895c-490a-b193-7b2316ffa587"],"propsByKey":{"5e029dea-1cef-4635-9450-e1489343f986":{"name":"borderH (1).png_1","sourceUrl":"assets/v3/animations/4GJyPhcCTmOl5hTIOke98aDywDAW0xiriuL3uHJ9DP8/5e029dea-1cef-4635-9450-e1489343f986.png","frameSize":{"x":399,"y":15},"frameCount":1,"looping":true,"frameDelay":4,"version":"S70DqQSsnaGVqvJQ6V1PpLaubfdh8iNk","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":399,"y":15},"rootRelativePath":"assets/v3/animations/4GJyPhcCTmOl5hTIOke98aDywDAW0xiriuL3uHJ9DP8/5e029dea-1cef-4635-9450-e1489343f986.png"},"f177f49c-d5f2-4736-8784-79f3ad6a5e39":{"name":"corn (1).png_1","sourceUrl":"assets/v3/animations/4GJyPhcCTmOl5hTIOke98aDywDAW0xiriuL3uHJ9DP8/f177f49c-d5f2-4736-8784-79f3ad6a5e39.png","frameSize":{"x":188,"y":268},"frameCount":1,"looping":true,"frameDelay":4,"version":"xqyCNSMQ.0PgkASJ7zV.fObGjqz5X4hT","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":188,"y":268},"rootRelativePath":"assets/v3/animations/4GJyPhcCTmOl5hTIOke98aDywDAW0xiriuL3uHJ9DP8/f177f49c-d5f2-4736-8784-79f3ad6a5e39.png"},"4e84d867-dfbb-4bc8-9d30-6dd254fe3e67":{"name":"border21","sourceUrl":"assets/v3/animations/4GJyPhcCTmOl5hTIOke98aDywDAW0xiriuL3uHJ9DP8/4e84d867-dfbb-4bc8-9d30-6dd254fe3e67.png","frameSize":{"x":19,"y":310},"frameCount":1,"looping":true,"frameDelay":4,"version":"tIVRVV1ULAXqiP_YjHG1CWiVaZrvTAQA","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":19,"y":310},"rootRelativePath":"assets/v3/animations/4GJyPhcCTmOl5hTIOke98aDywDAW0xiriuL3uHJ9DP8/4e84d867-dfbb-4bc8-9d30-6dd254fe3e67.png"},"4a3e7319-492e-4e1a-87ff-711228942541":{"name":"GoodJob (1).png_1","sourceUrl":"assets/v3/animations/4GJyPhcCTmOl5hTIOke98aDywDAW0xiriuL3uHJ9DP8/4a3e7319-492e-4e1a-87ff-711228942541.png","frameSize":{"x":232,"y":218},"frameCount":1,"looping":true,"frameDelay":4,"version":"19bvBFpRfqBlDBeEkAqceDvVt8F.EEBI","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":232,"y":218},"rootRelativePath":"assets/v3/animations/4GJyPhcCTmOl5hTIOke98aDywDAW0xiriuL3uHJ9DP8/4a3e7319-492e-4e1a-87ff-711228942541.png"},"cb8d20fa-2faf-43e4-9d30-01a57aa67a4c":{"name":"harvester (1).png_1","sourceUrl":"assets/v3/animations/4GJyPhcCTmOl5hTIOke98aDywDAW0xiriuL3uHJ9DP8/cb8d20fa-2faf-43e4-9d30-01a57aa67a4c.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"TbNYpW2Tsf8.fo5sJVzBi.SyPxEEdzZ1","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/v3/animations/4GJyPhcCTmOl5hTIOke98aDywDAW0xiriuL3uHJ9DP8/cb8d20fa-2faf-43e4-9d30-01a57aa67a4c.png"},"78cef099-895c-490a-b193-7b2316ffa587":{"name":"textGameOver (1).png_1","sourceUrl":"assets/v3/animations/4GJyPhcCTmOl5hTIOke98aDywDAW0xiriuL3uHJ9DP8/78cef099-895c-490a-b193-7b2316ffa587.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":4,"version":"29UeZ.R8DHMmFQ9qrOqVqmEVlmZT7B8l","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/v3/animations/4GJyPhcCTmOl5hTIOke98aDywDAW0xiriuL3uHJ9DP8/78cef099-895c-490a-b193-7b2316ffa587.png"}}};
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

var truck = createSprite(200,200);
truck.setAnimation("harvester (1).png_1");

var w1 = createSprite(200,10 );
w1.setAnimation("borderH (1).png_1");


var w2 = createSprite(200,390);
w2.setAnimation("borderH (1).png_1");


var w5 = createSprite(0,200)
w5.setAnimation("border21")
w5.height=400

var w6 = createSprite(394,200)
w6.setAnimation("border21")
w6.height=400

var crops = createGroup()

var n = 0 ;

var r = 0;

function draw() {
  background("white")
 
  if(keyWentDown("down")){
    truck.setSpeedAndDirection(3,90)
    truck.rotation=0
  }
if(keyWentDown("up")){
  truck.setSpeedAndDirection(3,270)
  truck.rotation=180
}
if(keyWentDown("left")){
  truck.setSpeedAndDirection(3,180)
  truck.rotation=90
}
if(keyWentDown("right")){
  truck.setSpeedAndDirection(3,0)
  truck.rotation=270
}
if(truck.isTouching(w1) || truck.isTouching(w2) || 
    truck.isTouching(w5)|| truck.isTouching(w6) ){
  truck.visible=false
  
}
 
for (var c = 0; c<n; c++){
  
  if(crops.get(c)!= undefined && crops.get(c).isTouching(truck)){
  crops.get(c).destroy()
  r++
}

  
}
if(r==n){
  fill("aqua")
  textSize(50)
  text("Congratulations",54,200)
  truck.destroy()
  var wer = createSprite(200,200)
  wer.setAnimation("GoodJob (1).png_1")
}
  drawSprites()
}

function crop(x){
  for(var c=0;c<5;c++){
    var a = createSprite(50+c*70,x) 
 a.setAnimation("corn (1).png_1")
  a.scale=0.2
  crops.add(a)
  n = n + 1 ; 
  }
  print(n)
}


 crop(50)
  crop(150)
  crop(250)
  crop(350)
   crop(450)

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
