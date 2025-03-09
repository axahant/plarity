function flip() {
    let coinEl = document.getElementById('coin');
    let resultEl = document.getElementById('result');
    coinEl.className = null;
    var flipResult = Math.random();
    let result;
    setTimeout(function() {
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
    }, 3000);
};