document.addEventListener('DOMContentLoaded', function () {
    let counter = 0;

    const counterDisplay = document.getElementById('counter');
    const incrementBtn = document.getElementById('incrementBtn');
    const resetBtn = document.getElementById('resetBtn');

    incrementBtn.addEventListener('click', function () {
        counter++;
        counterDisplay.textContent = counter;
    });

    resetBtn.addEventListener('click', function () {
        counter = 0;
        counterDisplay.textContent = counter;
    });
});