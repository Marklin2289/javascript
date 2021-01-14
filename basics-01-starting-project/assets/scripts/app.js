const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  // const calcDescription = `${currentResult} + ${enteredNumber}`;
  //   currentResult = currentResult + enteredNumber;
  currentResult += +enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  // outputResult(currentResult, calcDescription);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  // const calcDescription = `${currentResult} - ${enteredNumber}`;
  //   currentResult = currentResult - enteredNumber;
  currentResult -= +enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
  // outputResult(currentResult, calcDescription);
}

function multiple() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  // const calcDescription = `${currentResult} * ${enteredNumber}`;
  //   currentResult = currentResult * enteredNumber;
  currentResult *= +enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
  // outputResult(currentResult, calcDescription);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  // const calcDescription = `${currentResult} / ${enteredNumber}`;
  //   currentResult = currentResult / enteredNumber;
  currentResult /= +enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
  // outputResult(currentResult, calcDescription);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiple);
divideBtn.addEventListener("click", divide);
