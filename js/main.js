// ---------------- generate random colour on the page --------------------- //

var randomColor = function() {
    var random = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    document.body.style.background = random;
    displayPara(random);
};


// --------------------------- convert HEX to RGB -------------------------- //
var hexToRGB = function( hex ) {
  var colorInput;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test( hex )) {
    colorInput = hex.substring(1);
    if (colorInput.length === 3) {
      colorInput = colorInput[0] + colorInput[0] + colorInput[1] +
      colorInput[1] + colorInput[2] + colorInput[2];
    }
    var r = parseInt(colorInput.slice(0, 2), 16),
        g = parseInt(colorInput.slice(2, 4), 16),
        b = parseInt(colorInput.slice(4, 6), 16);
        return "rgb(" + r + ", " + g + ", " + b + ")";
  }
};

// --------------------------- convert RGB to HEX -------------------------- //
function componentToHex( c ) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(arg) {
  var rgb = arg.split(',');
  var r = parseInt( rgb[0].substring(4));
  var g = parseInt( rgb[1]);
  var b = parseInt( rgb[2]);
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// -------------------------- checks which colour format ------------------- //
var displayPara = function(col) {
  var kuku = col;
  if ( col[0] === "#") {
    kuku = hexToRGB(col);
  } else if (col[0] === "r") {
    kuku = rgbToHex(col);
  }
  document.getElementById("paraHEX").innerHTML = col.toUpperCase();
  document.getElementById("paraRGB").innerHTML = kuku;
};

var button = document.getElementById('button');
var onClick = function( event ) {
    var myColor = document.getElementById("color").value;
    document.body.style.background = myColor;
    displayPara(myColor);

};
button.addEventListener('click', onClick);


randomColor();

var body = document.querySelector( "body" );
body.addEventListener( "keypress", function( e ) {
  // console.log( e.keyCode );
  if( e.keyCode === 32 ) {
    randomColor();
  }
} );
