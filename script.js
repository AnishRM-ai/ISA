let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function calculate() {
  let result = eval(display.value);
  display.value = result;
}

function clearDisplay() {
  display.value = '';
}
