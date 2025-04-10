let currentInput = '';
let resultDisplayed = false;

function appendNumber(number) {
    if (resultDisplayed) {
        currentInput = number.toString();
        resultDisplayed = false;
    } else {
        currentInput += number.toString();
    }
    updateDisplay();
}

function clearScreen() {
    currentInput = '';
    updateDisplay();
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('result').value = currentInput;
}

function calculateResult() {
    try {
        let result = eval(currentInput);
        alert('Result: ' + result);
        console.log('Result: ' + result);
        currentInput = result.toString();
        resultDisplayed = true;
        updateDisplay();
    } catch (error) {
        alert('Invalid input!');
        console.log('Invalid input');
    }
}