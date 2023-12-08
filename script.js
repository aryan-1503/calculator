let answer = "0"

const operator = [".","+","-","*","/","%"]

function displayOnScreen(answer){
    document.getElementById("answer").innerHTML = answer;
}
function onZero(){
    if (answer === "0"){
        answer = "0";
    }
    else{
        answer = answer.concat("0");
    }
    displayOnScreen(answer);
}
function onDoubleZero(){
    if (answer === "0"){
        answer = "0";
    }
    else{
        answer = answer.concat("00");
    }
    displayOnScreen(answer);
}
function onOne() {
    if (answer === "0" || answer === "Infinity") {
        answer = "1";
    } else {
        answer = answer.concat("1");
    }
    displayOnScreen(answer);
}
function onTwo() {
    if (answer === "0" || answer === "Infinity") {
        answer = "2";
    } else {
        answer = answer.concat("2");
    }
    displayOnScreen(answer);
}
function onThree() {
    if (answer === "0" || answer === "Infinity") {
        answer = "3";
    } else {
        answer = answer.concat("3");
    }
    displayOnScreen(answer);
}

function onFour() {
    if (answer === "0" || answer === "Infinity") {
        answer = "4";
    } else {
        answer = answer.concat("4");
    }
    displayOnScreen(answer);
}

function onFive() {
    if (answer === "0" || answer === "Infinity") {
        answer = "5";
    } else {
        answer = answer.concat("5");
    }
    displayOnScreen(answer);
}

function onSix() {
    if (answer === "0" || answer === "Infinity") {
        answer = "6";
    } else {
        answer = answer.concat("6");
    }
    displayOnScreen(answer);
}

function onSeven() {
    if (answer === "0" || answer === "Infinity") {
        answer = "7";
    } else {
        answer = answer.concat("7");
    }
    displayOnScreen(answer);
}

function onEight() {
    if (answer === "0" || answer === "Infinity") {
        answer = "8";
    } else {
        answer = answer.concat("8");
    }
    displayOnScreen(answer);
}

function onNine() {
    if (answer === "0" || answer === "Infinity") {
        answer = "9";
    } else {
        answer = answer.concat("9");
    }
    displayOnScreen(answer);
}

function onClear() {
    answer = "0"
    displayOnScreen(answer)
}

function onAddition() {
    if (answer === "0" || answer === "Infinity") {
        answer = "0+";
    } else {
        if (!operator.some(operator => answer.endsWith(operator))) {
            answer = answer.concat("+");
        }
    }
    displayOnScreen(answer);
}

function onSubtraction() {
    if (answer === "0" || answer === "Infinity") {
        answer = "0-";
    } else {
        if (!answer.endsWith("-")) {
            answer = answer.concat("-");
        }
    }
    displayOnScreen(answer);
}

function onMultiply() {
    if (answer === "0" || answer === "Infinity") {
        answer = "0*";
    } else {
        if (!operator.some(operator => answer.endsWith(operator))) {
            answer = answer.concat("*");
        }

    }

    displayOnScreen(answer);
}

function onDivision() {

    if (answer === "0" || answer === "Infinity") {
        answer = "0/";
    } else {
        if (!operator.some(operator => answer.endsWith(operator))) {
            answer = answer.concat("/");
        }

    }

    displayOnScreen(answer);
}

function onModulo() {
    if (answer === "0" || answer === "Infinity") {
        answer = "0%";
    } else {
        if (!operator.some(operator => answer.endsWith(operator))) {
            answer = answer.concat("%");
        }
    }
    displayOnScreen(answer);
}

function onDecimal() {

    if (answer === "0" || answer === "Infinity") {
        answer = "0.";
    } else {
        if (!operator.some(operator => answer.endsWith(operator))) {
            answer = answer.concat(".");
        }
    }
    displayOnScreen(answer);
}
function onBackSpace(){
    if (answer.length === 1){
        answer="0"
    }
    else{
        answer = answer.slice(0,-1)

    }
    displayOnScreen(answer)
}
function onEqualsTo() {
    answer = eval(answer).toString()
    if(answer==="NaN"){
        answer="Infinity"
    }
    displayOnScreen(answer)
}
