let count = 0;

const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const resetButton = document.getElementById('reset');

incrementButton.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count; // Обновляем отображение счетчика
});

resetButton.addEventListener('click', () => {
    count = 0;
    counterDisplay.textContent = count; // Обновляем отображение счетчика
});