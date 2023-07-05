let displayValue = '0';
let firstNum = null;
let secondNum = null;
let firstOp = null;
let secondOp = null;
let result = null;
const buttons = document.querySelectorAll('button');

function updateDisplay() {
    const display = document.getElementById("display");
    display.innerText = displayValue;
    if (displayValue.length > 9) {
        display.innerText = displayValue.substring(0,9);
    }
}

updateDisplay();

function clickButtons() {
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (btn.classList.contains("operand")) {
                inputOperand(btn.value);
                updateDisplay();
                console.log(displayValue);
            } else if (btn.classList.contains("operator")) {
                inputOperator(btn.value);
            } else if (btn.classList.contains("equals")) {
                inputEquals();
                updateDisplay();
            } else if (btn.classList.contains("clear"))
                clearDisplay();
                updateDisplay();
        })
    });
}

clickButtons();

function inputOperand(operand) {
    if (firstOp === null) {
        if (displayValue === 0 || displayValue === '0') {
            displayValue = operand;
        } else if (displayValue === firstNum) {
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    } else {
        if (displayValue === firstNum) {
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    }
}

function inputOperator(operator) {
    if (firstOp != null && secondOp === null) {
        secondOp = operator;
        secondNum = displayValue;
        result = operate(Number(firstNum), Number(secondNum), firstOp);
        console.log(result);
        displayValue = result;
        firstNum = displayValue;
        result = null;
    } else if (firstOp != null && secondOp != null) {

    } else {
        firstOp = operator;
        firstNum = displayValue;
    }
}

function inputEquals() {
    if (firstOp === null) {
        displayValue = displayValue;
    } else if (secondOp != null) {
        secondNum = displayValue;
        result = operate(Number(firstNum), Number(secondNum), secondOp);
        if (result === "error") {
            return "Error!";
        } else {
            displayValue = result;
            firstOperand = displayValue;
            secondOperant = null;
            firstOp = null;
            secondOp = null;
            result = null;
        }
    } else {
        secondNum = displayValue;
        result = operate(Number(firstNum), Number(secondNum), firstOp);
        if (result === "error") {
            return "Error!";
        } else {
            displayValue = result;
            firstOperand = displayValue;
            secondOperant = null;
            firstOp = null;
            secondOp = null;
            result = null;
        }
    }
}

function clearDisplay() {

}


function operate(a,b,op) {
    if (op==="+") {
        return a+b;
    } else if (op==="-") {
        return a-b;
    } else if (op==="*") {
        return a*b;
    } else if (op==="/") {
        if (b===0) {
            return "error";
        }
        return a/b;
    }
}