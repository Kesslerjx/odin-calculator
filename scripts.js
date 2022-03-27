

let first = "";
let second = "";
let operator = "";

let screen = document.getElementById('screen');
let screenValue = "";

///////////////
/* FUNCTIONS */
///////////////

function buttonPressed(element) {
    switch(element.id) {
        case 'clear':
            //Reset values
            first = "";
            second = "";
            operator = "";
            screenValue = "";
            screen.textContent = "";
        break;
        case 'delete':
            //Remove last character from screenValue
            screenValue = screenValue.slice(0, -1);

            //Update screen
            screen.textContent = screenValue;
        break;
        default: //equal

            //Ensure the first value is set, an opertaor is set and the second value can be set with what's displayed on the screen
            //Convert first to string becauase it becomes a number after an answer has been found            
            if(String(first) != ""  && operator != "" && screenValue != "") {
                let answer = operate(operator, first, screenValue);

                //Check for decimal places in the answer
                //If it has a decimal it will be greater than 0
                console.log(answer - Math.floor(answer));
                if((answer - Math.floor(answer)) != 0) {
                    //Round number
                    answer = answer.toFixed(2);
                }

                //Update screen
                screen.textContent = answer;

                //Clear values
                screenValue = "";
                first = "";
                operator = "";
            }
    }
}

function numberPressed(element) {
    //Don't allow for extra periods
    //Save number in screenValue
    if(element.textContent != "." || !screenValue.includes(".")){
        screenValue += element.textContent;
        screen.textContent = screenValue;
    }
}

function operatorPressed(element) {

    if(screenValue!= "") {
        //If operator isn't set, save number and store the operator
        //If operator is set, and the user has entered a second number then do the operation
        //Otherwise, clear the screen and set the operator
        //If the user presses an operator again before entering a second number it will just update the operator
        if(operator == "" && screenValue != "") {
            //Save first number
            first = screenValue;
        } else if (operator != "" && screenValue != ""){
            //Save second number
            second = screenValue;

            //Do operation
            let answer = operate(operator, first, second);

            //Check for decimal places in the answer
            //If it has a decimal it will be greater than 0
            console.log(answer - Math.floor(answer));
            if((answer - Math.floor(answer)) != 0) {
                //Round number
                answer = answer.toFixed(2);
            }

            //Set first number to answer
            first = answer;

            //Update screen with that
            screen.textContent = first;
        }

        //Clear screenValue
        screenValue = "";

        //Save operator
        operator = element.id;
    }
}

function operate(operator, first, second) {
    switch(operator) {
        case 'add':
            return add(first, second);
        break;
        case 'minus':
            return subtract(first, second);
        break;
        case 'multiply':
            return multiply(first, second);
        break;
        case 'divide':
            return divide(first, second);
        break;
    }
}

function add(first, second) {
    return parseFloat(first) + parseFloat(second);
}

function subtract(first, second) {
    return parseFloat(first) - parseFloat(second);
}

function multiply(first, second) {
    return parseFloat(first) * parseFloat(second);
}

function divide(first, second) {
   return parseFloat(first) / parseFloat(second); 
}