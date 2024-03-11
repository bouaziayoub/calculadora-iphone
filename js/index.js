const display = document.getElementById("display");
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

function addNumber(number) {
  if (operator === "") {
    firstNumber += number;
    display.value = firstNumber;
    // Delete the first 0 if the user press a number different than 0
    if (firstNumber[0] === "0" && firstNumber[1] !== ".") {
      firstNumber = firstNumber.slice(1);
      display.value = firstNumber;
    }
  } else {
    secondNumber += number;
    display.value = secondNumber;
  }
}

function addOperator(op) {
  operator = op;
}

function addDot() {
  if (operator === "") {
    if (!firstNumber.includes(".")) {
      firstNumber += ".";
      display.value = firstNumber;
      // If the user press the dot first, the display will show 0.
      if (firstNumber === ".") {
        firstNumber = "0.";
        display.value = firstNumber;
      }
    }
  } else {
    if (!secondNumber.includes(".")) {
      secondNumber += ".";
      display.value = secondNumber;
    }
  }
}

function clearDisplay() {
  display.value = "";
  firstNumber = "";
  secondNumber = "";
  operator = "";
}

function deleteNumber() {
  if (operator === "") {
    firstNumber = firstNumber.slice(0, -1);
    display.value = firstNumber;
  } else {
    secondNumber = secondNumber.slice(0, -1);
    display.value = secondNumber;
  }
}

// function to add percentage
function addPercent() {
  if (operator === "") {
    firstNumber = parseFloat(firstNumber) / 100;
    display.value = firstNumber;
  } else {
    secondNumber = parseFloat(secondNumber) / 100;
    display.value = secondNumber;
  }
}

// Add these functions in your JavaScript
let memory = 0;

function squareNumber() {
  if (operator === "") {
    firstNumber = Math.pow(parseFloat(firstNumber), 2);
    display.value = firstNumber;
    if (firstNumber === "NaN") {
      display.value = "Error";
    }
  } else {
    secondNumber = Math.pow(parseFloat(secondNumber), 2);
    display.value = secondNumber;
  }
}

function cubeNumber() {
  if (operator === "") {
    firstNumber = Math.pow(parseFloat(firstNumber), 3);
    display.value = firstNumber;
  } else {
    secondNumber = Math.pow(parseFloat(secondNumber), 3);
    display.value = secondNumber;
  }
}

function addPi() {
  if (operator === "") {
    firstNumber = Math.PI;
    display.value = firstNumber;
  } else {
    secondNumber = Math.PI;
    display.value = secondNumber;
  }
}

function squareRoot() {
  if (operator === "") {
    firstNumber = Math.sqrt(parseFloat(firstNumber));
    display.value = firstNumber;
  } else {
    secondNumber = Math.sqrt(parseFloat(secondNumber));
    display.value = secondNumber;
  }
}

function memoryClear() {
  memory = 0;
}

function memoryRecall() {
  if (operator === "") {
    firstNumber = memory;
    display.value = firstNumber;
  } else {
    secondNumber = memory;
    display.value = secondNumber;
  }
}

function memoryAdd() {
  memory += parseFloat(display.value);
}

function memorySubtract() {
  memory -= parseFloat(display.value);
}

function calculate() {
  switch (operator) {
    case "+":
      result = parseFloat(firstNumber) + parseFloat(secondNumber);
      break;
    case "-":
      result = parseFloat(firstNumber) - parseFloat(secondNumber);
      break;
    case "*":
      result = parseFloat(firstNumber) * parseFloat(secondNumber);
      break;
    case "/":
      result = parseFloat(firstNumber) / parseFloat(secondNumber);
      break;
  }
  display.value = result;
}

// Show current time
setInterval(function showTime() {
  const hour = document.getElementById("hour");
  const minute = document.getElementById("minute");
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();

  hour.innerHTML = hours;
  minute.innerHTML = minutes;
  if (hours < 10) {
    hour.innerHTML = "0" + hours;
  }
  if (minutes < 10) {
    minute.innerHTML = "0" + minutes;
  }
}, 1000);

// show battery status (percentage)
setInterval(function () {
  navigator.getBattery().then(function (battery) {
    const batteryLevel = Math.floor(battery.level * 100); // I'm using math.floor to remove the coma if exists
    const batteryStatus = document.querySelector(".battery");

    batteryStatus.innerHTML = batteryLevel + "%";
  });
}, 100);

// show network (WIFI) status
setInterval(function updateNetworkStatus() {
  const wifiStatus = document.querySelector(".wifi");
  const signalStatus = document.querySelector(".signal");
  if (navigator.onLine) {
    // Change scr of imgs
    signalStatus.setAttribute("src", "./images/signal.png");
    wifiStatus.setAttribute("src", "./images/wifi.png");
  } else {
    signalStatus.setAttribute("src", "./images/signal-off.png");
    wifiStatus.setAttribute("src", "./images/wifi-off.png");
  }
}, 100);
