var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var light = new five.Light({
    // pin: "A4",
    freq: 500,
  });
  light.on("data", function() {
    console.log(this.level);
  });
});
