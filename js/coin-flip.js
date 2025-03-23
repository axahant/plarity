function flip(hasUserChosenHeads) {
    let coinEl = document.getElementById('coin');
    let resultEl = document.getElementById('result');

    coinEl.className = null;
    var flipResult = Math.random();
    let result;
    if (flipResult <= 0.5) {
        result = 'heads';
    }
    else {
        result = 'tails';
    }
    coinEl.classList.add(result);

    resultEl.classList.remove('reveal');
    resultEl.classList.add('hide');

    if (result == 'heads' && hasUserChosenHeads) {
        resultEl.innerHTML = 'Well Done, you got it right!';
    }
    else if (result == 'tails' && hasUserChosenHeads == 0) {
        resultEl.innerHTML = 'Well Done, you got it right!';
    }
    else {
        resultEl.innerHTML = 'Oh no, you got it wrong!';
    }

    setTimeout(function() {
        resultEl.classList.add('reveal');
    }, 3000);
};
