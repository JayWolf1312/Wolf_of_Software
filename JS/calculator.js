let displayValue = "";

function appendToDisplay(value){
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay(){
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculate(){
    try{
        const result = eval(displayValue);
        document.getElementById('display').value = result;
        displayValue = String(result);
        }catch(error){
            document.getElementById('display').value = "Error";
    }
}

document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(event) {
    const key = event.key;

    if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (!isNaN(key) || ['/', '*', '-', '+', '.'].includes(key)) {
        appendToDisplay(key);
    }
}   