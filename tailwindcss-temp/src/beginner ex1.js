var disMain = 0;
var disInc = 0;
var disDec = 0;

var ran = [];

var btnDec  = document.getElementById("btnDec");
var btnInc  = document.getElementById("btnInc");


// Set initial background color on page load

//RGB to Hexadecimal values
function decToHexa(n) {
  // char array to store hexadecimal number
  let hexaDeciNum = Array.from({ length: 2 }, (_, i) => 0);

  // counter for hexadecimal number array
  let i = 0;
  while (n != 0) {
    // temporary variable to store remainder
    let temp = 0;

    // storing remainder in temp variable.
    temp = n % 16;

    // check if temp < 10
    if (temp < 10) {
      hexaDeciNum[i] = String.fromCharCode(temp + 48);
      i++;
    } else {
      hexaDeciNum[i] = String.fromCharCode(temp + 55);
      i++;
    }

    n = Math.floor(n / 16);
  }

  let hexCode = "";
  if (i == 2) {
    hexCode += hexaDeciNum[0];
    hexCode += hexaDeciNum[1];
  } else if (i == 1) {
    hexCode = "0";
    hexCode += hexaDeciNum[0];
  } else if (i == 0) hexCode = "00";

  // Return the equivalent
  // hexadecimal color code
  return hexCode;
}

// Function to convert the
// RGB code to Hex color code
function convertRGBtoHex(R, G, B) {
  if (R >= 0 && R <= 255 && G >= 0 && G <= 255 && B >= 0 && B <= 255) {
    let hexCode = "#";
    hexCode += decToHexa(R);
    console.log(hexCode);
    hexCode += decToHexa(G);
    console.log(hexCode);
    hexCode += decToHexa(B);
    
    return hexCode;
  }

  // The hex color code doesn't exist
  else return "-1";
}

// Function to generate
// random color code

function randomColor() {
  ran = [
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
  ];
  console.log(ran[0], ran[1], ran[2]);
  var hexColor = convertRGBtoHex(ran[0], ran[1], ran[2]);
  console.log(hexColor);
  return hexColor;
}


function incre() {
  disMain = disMain + 1;
  disInc = disInc + 1;
  var ranNum = randomColor();

  document.body.style.backgroundColor = ranNum;

  if (disMain < 50) {
    document.getElementById("counter").innerHTML = disMain;
    document.getElementById("counter-inc").innerHTML = disInc;
    document.getElementById("btnInc").style.backgroundColor = ranNum;
  } else {
    alert("Counter limit reached");
  }
}



function decre() {
  disMain = disMain - 1;
  disDec = disDec + 1;
  var ranNum = randomColor();

  document.body.style.backgroundColor = ranNum;

  if (disMain >= 0) {
    document.getElementById("counter").innerHTML = disMain;
    document.getElementById("counter-dec").innerHTML = disDec;
    document.getElementById("btnDec").style.backgroundColor = ranNum;
  } else {
    alert("Counter limit reached");
  }
}

btnDec.addEventListener("click", decre)
btnInc.addEventListener("click", incre);
