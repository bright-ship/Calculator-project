let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector('.screen');

function buttonClick(value){
    if (isNaN(value)) {
        // this is not a number
        handleSymbol(value);
    } else {
        // this is a number
        handleNumber(value);

    }
    screen.innerText = buffer;

}

function handleSymbol(symbol){
    // if (symbol === 'C'){
    //     buffer = '0';
    //     runningTotal = 0 
    // }
    switch (symbol){
     case 'c':
        buffer = '0';
        runningTotal = 0;
        break;
      case '&plus':
      case '&minus':
      case '&divide':
      case '&times':   
          handleMath(symbol);
          break;
    }

}

function handleMath(symbol){
    if (buffer === '0'){
        // do nothing
        return;

    }
    const intBuffer = parseInt(buffer);
    if (runningTotal === 0){
        runningTotal = intBuffer
    } else {
        flushOperation(intBuffer);
    }
    previousOperator = symbol;
    buffer = '0';
}
function flushOperation(intBuffer){
    if (previousOperator ==='&plus'){
        runningTotal += intBuffer;
    } else if (previousOperator === '&minus'){
    runningTotal -= intBuffer;
} else if (previousOperator === '&divide'){
    runningTotal *= intBuffer;
} else {
    runningTotal /= intBuffer;
}
   console.log('running total', runningTotal);
}
function handleNumber(numberString){
    if (buffer === "0"){
        buffer = numberString;
    } else {
        buffer += numberString;
    }
}


    document.querySelector('.buttons')
    .addEventListener('click', function(event){
      buttonClick(event.target.innerText);  
    })
