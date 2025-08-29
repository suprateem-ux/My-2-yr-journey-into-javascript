setScreen("screen1");
onEvent("button1", "click", function( ) {
  setScreen("screen7");
  playSound("assets/category_tap/game_bubble_pop_click.mp3", false);
});
onEvent("button2", "click", function( ) {
  var x = getNumber("text_input2");
  for (var i = 2; i < x; i++) {
    if (x%i == 0) {
      setScreen("screenno");
      break;
    } else {
      setScreen("screenYES");
    }
  }
});
onEvent("BUTTONBACK", "click", function( ) {
  setScreen("screen7");
});
onEvent("BUTTONBACK2", "click", function( ) {
  setScreen("screen7");
});
