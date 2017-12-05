// Keyboard Input for Game


var keyboard = {
  u: false,
  downArrow: false,
  l: false,
  r: false,
  w: false,
  a: false,
  s: false,
  d: false
};

 document.addEventListener("keydown", function(e) {
      if (e.keyCode == 65) {
          keyboard.a = true;

      }
      else if (e.keyCode == 87) {
          keyboard.w = true;
          console.log('Keycode 87 pressed')
      }
      else if (e.keyCode == 68) {
          keyboard.d = true;

      }
      else if (e.keyCode == 83) {
          keyboard.s = true;

      }
      else if (e.keyCode == 37) {
          keyboard.l = true;

      }
      else if (e.keyCode == 38) {
          keyboard.u = true;

      }
      else if (e.keyCode == 39) {
          keyboard.r = true;

      }
      else if (e.keyCode == 40) {
          keyboard.downArrow = true;

      }
  });

 document.addEventListener("keyup", function(e) {
      if (e.keyCode == 65) {
          keyboard.a = false;
      }
      else if (e.keyCode == 87) {
          keyboard.w = false;
      }
      else if (e.keyCode == 68) {
          keyboard.d = false;
      }
      else if (e.keyCode == 83) {
          keyboard.s = false;
      }
      else if (e.keyCode == 37) {
          keyboard.l = false;
      }
      else if (e.keyCode == 38) {
          keyboard.u = false;
      }
      else if (e.keyCode == 39) {
          keyboard.r = false;
      }
      else if (e.keyCode == 40) {
          keyboard.downArrow = false;
      }
  });



