// =============================================
// 2 КЛАСС: ТРЕНАЖЕРЫ ПО МАТЕМАТИКЕ
// =============================================

// ---------- ТРЕНАЖЕР 1: УМНОЖЕНИЕ ----------
const mult1Span = document.getElementById('mult1');
const mult2Span = document.getElementById('mult2');
const multAnswer = document.getElementById('multAnswer');
const checkMultBtn = document.getElementById('checkMultBtn');
const nextMultBtn = document.getElementById('nextMultBtn');
const multMessage = document.getElementById('multMessage');

let currentMult1 = 5;
let currentMult2 = 3;

function generateMultiplication() {
    // Генерируем множители от 2 до 9 (таблица умножения)
    currentMult1 = Math.floor(Math.random() * 8) + 2; // 2-9
    currentMult2 = Math.floor(Math.random() * 8) + 2; // 2-9
    mult1Span.textContent = currentMult1;
    mult2Span.textContent = currentMult2;
    multAnswer.value = '';
    multMessage.textContent = '';
}

function checkMultiplication() {
    const userAnswer = parseInt(multAnswer.value);
    const correct = currentMult1 * currentMult2;
    
    if (isNaN(userAnswer)) {
        multMessage.textContent = '🔢 Введи число!';
        multMessage.style.color = '#e76f51';
        return;
    }
    
    if (userAnswer === correct) {
        multMessage.textContent = '🌟 Отлично! Правильно!';
        multMessage.style.color = '#2a9d8f';
    } else {
        multMessage.textContent = `🤔 Подумай ещё. Правильный ответ: ${correct}`;
        multMessage.style.color = '#e63946';
    }
}

// ---------- ТРЕНАЖЕР 2: УРАВНЕНИЯ ----------
const eqText = document.getElementById('eqText');
const eqAnswer = document.getElementById('eqAnswer');
const checkEqBtn = document.getElementById('checkEqBtn');
const nextEqBtn = document.getElementById('nextEqBtn');
const eqMessage = document.getElementById('eqMessage');

let currentEquation = { a: 0, b: 0, result: 0, operation: '+', xPosition: 'left' };

function generateEquation() {
    // Типы уравнений для 2 класса: x + a = b, a + x = b, x - a = b
    const type = Math.floor(Math.random() * 3);
    let a, b, x, text;
    
    switch(type) {
        case 0: // x + a = b
            a = Math.floor(Math.random() * 8) + 2;  // 2-9
            x = Math.floor(Math.random() * 8) + 2;  // 2-9
            b = x + a;
            text = `x + ${a} = ${b}`;
            currentEquation = { a, b, result: x, operation: '+', xPosition: 'left' };
            break;
        case 1: // a + x = b
            a = Math.floor(Math.random() * 8) + 2;
            x = Math.floor(Math.random() * 8) + 2;
            b = a + x;
            text = `${a} + x = ${b}`;
            currentEquation = { a, b, result: x, operation: '+', xPosition: 'right' };
            break;
        case 2: // x - a = b
            a = Math.floor(Math.random() * 8) + 2;
            b = Math.floor(Math.random() * 8) + 2;
            x = a + b;
            text = `x - ${a} = ${b}`;
            currentEquation = { a, b, result: x, operation: '-', xPosition: 'left' };
            break;
    }
    
    eqText.textContent = text;
    eqAnswer.value = '';
    eqMessage.textContent = '';
}

function checkEquation() {
    const userAnswer = parseInt(eqAnswer.value);
    const correct = currentEquation.result;
    
    if (isNaN(userAnswer)) {
        eqMessage.textContent = '🔢 Введи число!';
        eqMessage.style.color = '#e76f51';
        return;
    }
    
    if (userAnswer === correct) {
        eqMessage.textContent = '🎯 Верно! Ты нашёл X!';
        eqMessage.style.color = '#2a9d8f';
    } else {
        // Подсказка с решением
        let hint = '';
        if (currentEquation.operation === '+') {
            hint = `Нужно из ${currentEquation.b} вычесть ${currentEquation.a}`;
        } else {
            hint = `Нужно к ${currentEquation.b} прибавить ${currentEquation.a}`;
        }
        eqMessage.textContent = `❌ Неверно. ${hint}. X = ${correct}`;
        eqMessage.style.color = '#e63946';
    }
}

// ---------- ТРЕНАЖЕР 3: ПОРЯДОК ДЕЙСТВИЙ ----------
const orderText = document.getElementById('orderText');
const orderAnswer = document.getElementById('orderAnswer');
const checkOrderBtn = document.getElementById('checkOrderBtn');
const nextOrderBtn = document.getElementById('nextOrderBtn');
const orderMessage = document.getElementById('orderMessage');

let currentOrderExample = { text: '', result: 0 };

function generateOrderExample() {
    const type = Math.floor(Math.random() * 3);
    let a, b, c, result, text;
    
    switch(type) {
        case 0: // (a + b) · c
            a = Math.floor(Math.random() * 5) + 1; // 1-5
            b = Math.floor(Math.random() * 5) + 1;
            c = Math.floor(Math.random() * 3) + 2; // 2-4
            result = (a + b) * c;
            text = `(${a} + ${b}) · ${c} = ?`;
            break;
        case 1: // a + b · c (умножение первым)
            a = Math.floor(Math.random() * 10) + 1;
            b = Math.floor(Math.random() * 5) + 1;
            c = Math.floor(Math.random() * 3) + 2;
            result = a + b * c;
            text = `${a} + ${b} · ${c} = ?`;
            break;
        case 2: // (a - b) · c
            a = Math.floor(Math.random() * 4) + 6; // 6-9
            b = Math.floor(Math.random() * 4) + 1; // 1-4
            c = Math.floor(Math.random() * 3) + 2;
            result = (a - b) * c;
            text = `(${a} - ${b}) · ${c} = ?`;
            break;
    }
    
    currentOrderExample = { text, result };
    orderText.textContent = text;
    orderAnswer.value = '';
    orderMessage.textContent = '';
}

function checkOrder() {
    const userAnswer = parseInt(orderAnswer.value);
    const correct = currentOrderExample.result;
    
    if (isNaN(userAnswer)) {
        orderMessage.textContent = '🔢 Введи число!';
        orderMessage.style.color = '#e76f51';
        return;
    }
    
    if (userAnswer === correct) {
        orderMessage.textContent = '✅ Всё верно! Порядок действий соблюдён!';
        orderMessage.style.color = '#2a9d8f';
    } else {
        orderMessage.textContent = `❌ Неверно. Правильный ответ: ${correct}`;
        orderMessage.style.color = '#e63946';
    }
}

// ---------- ПРИВЯЗКА СОБЫТИЙ И ЗАПУСК ----------
checkMultBtn.addEventListener('click', checkMultiplication);
nextMultBtn.addEventListener('click', generateMultiplication);
multAnswer.addEventListener('keypress', (e) => { if(e.key === 'Enter') checkMultiplication(); });

checkEqBtn.addEventListener('click', checkEquation);
nextEqBtn.addEventListener('click', generateEquation);
eqAnswer.addEventListener('keypress', (e) => { if(e.key === 'Enter') checkEquation(); });

checkOrderBtn.addEventListener('click', checkOrder);
nextOrderBtn.addEventListener('click', generateOrderExample);
orderAnswer.addEventListener('keypress', (e) => { if(e.key === 'Enter') checkOrder(); });

// Первоначальная генерация
generateMultiplication();
generateEquation();
generateOrderExample();