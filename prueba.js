let currentInput = '';
let operation = '';
let previousInput = '';

// Función para agregar números a la pantalla
function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

// Función para limpiar la pantalla
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = '';
    document.getElementById('display').value = '';
}

// Función para configurar la operación
function setOperation(op) {
    if (currentInput === '') return; // No hacer nada si no hay número en la pantalla
    if (previousInput !== '') {
        calculateResult();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

// Función para calcular el resultado
function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("No se puede dividir por 0");
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operation = '';
    previousInput = '';
    document.getElementById('display').value = currentInput;
}
