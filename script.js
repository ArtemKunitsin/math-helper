// Получаем элементы со страницы
let num1Span = document.getElementById('num1');
let num2Span = document.getElementById('num2');
let userInput = document.getElementById('userAnswer');
let checkButton = document.getElementById('checkBtn');
let nextButton = document.getElementById('nextBtn');
let resultP = document.getElementById('resultMessage');

// Переменные для хранения текущих чисел
let currentNum1 = 3;
let currentNum2 = 2;

// Функция генерации нового примера (1 класс: сумма не больше 10)
function generateNewExample() {
    // Генерируем два числа от 1 до 9, но сумма <= 10
    currentNum1 = Math.floor(Math.random() * 9) + 1; // 1-9
    currentNum2 = Math.floor(Math.random() * (10 - currentNum1)) + 1; // Чтобы сумма не превысила 10
    
    num1Span.textContent = currentNum1;
    num2Span.textContent = currentNum2;
    userInput.value = ''; // Очищаем поле ввода
    resultP.textContent = ''; // Очищаем сообщение
}

// Функция проверки ответа
function checkAnswer() {
    let userAnswer = parseInt(userInput.value);
    let correctSum = currentNum1 + currentNum2;
    
    if (isNaN(userAnswer)) {
        resultP.textContent = '👀 Введи число!';
        resultP.style.color = 'orange';
        return;
    }
    
    if (userAnswer === correctSum) {
        resultP.textContent = '🎉 Молодец! Всё верно!';
        resultP.style.color = 'green';
    } else {
        resultP.textContent = `🤔 Подумай ещё... Правильно: ${correctSum}`;
        resultP.style.color = 'red';
    }
}

// Вешаем "слушателей" событий на кнопки
checkButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', generateNewExample);

// Запускаем первый пример при загрузке страницы
generateNewExample();

// БОНУС: Проверка по клавише Enter (чтобы учитель не тянулся к мышке)
userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});