function rollDice(chosenNumber) {
    let dice = document.getElementById('dice');
    var resultEl = document.getElementById('result');

    let result = Math.floor(Math.random() * 6) + 1;
    dice.dataset.side = result;
    dice.classList.toggle("reRoll");

    resultEl.classList.remove("reveal");
    resultEl.classList.add("hide");
	resultEl.innerHTML = "You've got " + result;
	setTimeout(function() { 
        resultEl.classList.add("reveal");
    }, 1500);
}
