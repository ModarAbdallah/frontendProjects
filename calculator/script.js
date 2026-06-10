let currentExpression = '';
let shouldReset = false;

const display = document.getElementById('calc-display');
const history = document.getElementById('calc-history');

function inputNum(num) {
    if (shouldReset) {
        display.innerText = num;
        currentExpression = num.toString();
        shouldReset = false;
    } else {
        if (display.innerText === '0') {
            display.innerText = num;
            currentExpression = num.toString();
        } else {
            display.innerText += num;
            currentExpression += num;
        }
    }
}

function inputDecimal(dot) {
    if (shouldReset) {
        display.innerText = '0.';
        currentExpression = '0.';
        shouldReset = false;
        return;
    }
    const parts = currentExpression.split(/[\+\-\*\/%]/);
    const lastPart = parts[parts.length - 1];
    if (!lastPart.includes('.')) {
        display.innerText += dot;
        currentExpression += dot;
    }
}

function inputOperator(op) {
    if (shouldReset) {
        shouldReset = false;
    }
    if (currentExpression === '' && op !== '-') return;

    const lastChar = currentExpression.slice(-1);
    if (['+', '-', '*', '/', '%'].includes(lastChar)) {
        currentExpression = currentExpression.slice(0, -1) + op;
        display.innerText = display.innerText.slice(0, -1) + getOpSymbol(op);
    } else {
        currentExpression += op;
        display.innerText += getOpSymbol(op);
    }
}

function getOpSymbol(op) {
    if (op === '*') return '×';
    if (op === '/') return '÷';
    return op;
}

function clearAll() {
    currentExpression = '';
    display.innerText = '0';
    history.innerText = '';
    shouldReset = false;
}

function deleteLast() {
    if (shouldReset) {
        clearAll();
        return;
    }
    currentExpression = currentExpression.slice(0, -1);
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === '') display.innerText = '0';
}

function executeCalculation() {
    if (currentExpression === '') return;
    try {
        history.innerText = display.innerText + ' =';
        let result = Function('"use strict"; return (' + currentExpression + ')')();
        
        if (result === Infinity || result === -Infinity) {
            display.innerText = 'Error.. ';
            currentExpression = '';
        } else {
            
            result = Math.round(result * 100000000) / 100000000;
            display.innerText = result;
            currentExpression = result.toString(); 
        }
        shouldReset = true; 
    } catch (e) {
        display.innerText = 'Error';
        currentExpression = '';
        shouldReset = true;
    }
}