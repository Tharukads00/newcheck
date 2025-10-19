var disMain = 0;
var disInc = 0;
var disDec = 0;

var ran = [];

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
    hexCode += decToHexa(G);
    hexCode += decToHexa(B);

    return hexCode;
  }

  // The hex color code doesn't exist
  else return "-1";
}

// Button triggering function.

// function updateBackgroundColor(value) {
//     const counterElement = document.getElementById("counter");
//     // First, remove any existing background color classes to avoid conflicts
//     counterElement.classList.remove("bg-pink-700", "bg-green-400", "bg-red-200");

//     // Then, add the correct class based on the value
//     if (value > 10) {
//         counterElement.classList.add("bg-green-400");
//     } else { // for 0
//         counterElement.classList.add("bg-pink-700");
//     }
// }

function randomColor() {
  ran = [
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
  ];
  console.log(ranRed, ranGreen, ranBlue);
  let hexColor = convertRGBtoHex(ran[0], ran[1], ran[2]);
  console.log(hexColor);
  return hexColor;
}

function incre() {
  disMain = disMain + 1;
  disInc = disInc + 1;

  document.body.style.backgroundColor = randomColor();

  if (disMain < 50) {
    document.getElementById("counter").innerHTML = disMain;
    document.getElementById("counter-inc").innerHTML = disInc;
  } else {
    alert("Counter limit reached");
  }
}

function decre() {
  disMain = disMain - 1;
  disDec = disDec + 1;
  document.body.style.backgroundColor = randomColor();

  if (disMain >= 0) {
    document.getElementById("counter").innerHTML = disMain;
    document.getElementById("counter-dec").innerHTML = disDec;
    document.getElementById("btnDec").style.backgroundColor = randomColor();
  } else {
    alert("Counter limit reached");
  }
}
