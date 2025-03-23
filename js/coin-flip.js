function flip(hasUserChosenHeads) {
    let coinEl = document.getElementById('coin');
    let resultEl = document.getElementById('result');
    coinEl.className = null;
    var flipResult = Math.random();
    let result;
    setTimeout(function() {
        resultEl.innerHTML = '';
        if (flipResult <= 0.5) {
            result = 'heads';
            coinEl.classList.add('heads');
        }
        else {
            result = 'tails';
            coinEl.classList.add('tails');
        }
    }, 100);
    setTimeout(function() {
        resultEl.innerHTML = 'It is ' + result + '!';
        if (result == 'heads' && hasUserChosenHeads) {
            resultEl.innerHTML = 'Well Done, you got it right!';
        }
        else if (result == 'tails' && hasUserChosenHeads == 0) {
            resultEl.innerHTML = 'Well Done, you got it right!';
        }
        else {
            resultEl.innerHTML = 'Oh no, you got it wrong!';
        }
    }, 3000);
    
};
