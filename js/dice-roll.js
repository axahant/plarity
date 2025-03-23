function rollDice(chosenNumber) {
    let dice = document.getElementById('dice');
    var resultEl = document.getElementById('result');

    let result = Math.floor(Math.random() * 6) + 1;
    dice.dataset.side = result;
    dice.classList.toggle('roll');

    resultEl.classList.remove('reveal');
    resultEl.classList.add('hide');
    if (chosenNumber == result) {
        resultEl.innerHTML = 'Well Done, you got it right!';
    } else {
        resultEl.innerHTML = 'Oh no, you got it wrong!';
    }
	setTimeout(function() { 
        resultEl.classList.add('reveal');
    }, 1500);
}
