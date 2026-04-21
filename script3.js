// =============================================
// 3 КЛАСС: ТРЕНАЖЕРЫ ПО МАТЕМАТИКЕ
// =============================================

// ---------- ТРЕНАЖЕР 1: ВНЕТАБЛИЧНОЕ УМНОЖЕНИЕ ----------
const mult1Span = document.getElementById('multOut1');
const mult2Span = document.getElementById('multOut2');
const multAnswer = document.getElementById('multOutAnswer');
const checkMultBtn = document.getElementById('checkMultOutBtn');
const nextMultBtn = document.getElementById('nextMultOutBtn');
const multMessage = document.getElementById('multOutMessage');

let currentMult1 = 23;
let currentMult2 = 4;

function generateOutTableMult() {
    // Генерируем двузначное число и однозначное
    currentMult1 = Math.floor(Math.random() * 30) + 11; // 11-40
    currentMult2 = Math.floor(Math.random() * 7) + 2;   // 2-8
    mult1Span.textContent = currentMult1;
    mult2Span.textContent = currentMult2;
    multAnswer.value = '';
    multMessage.textContent = '';
}

function checkOutTableMult() {
    const userAnswer = parseInt(multAnswer.value);
    const correct = currentMult1 * currentMult2;
    
    if (isNaN(userAnswer)) {
        multMessage.textContent = '🔢 Введи число!';
        multMessage.style.color = '#e76f51';
        return;
    }
    
    if (userAnswer === correct) {
        multMessage.textContent = '🌟 Правильно! Молодец!';
        multMessage.style.color = '#2a9d8f';
    } else {
        // Показываем разбор решения
        const tens = Math.floor(currentMult1 / 10) * 10;
        const ones = currentMult1 % 10;
        multMessage.innerHTML = `❌ Неверно. Разбор: ${currentMult1} · ${currentMult2} = (${tens} + ${ones}) · ${currentMult2} = ${tens*currentMult2} + ${ones*currentMult2} = ${correct}`;
        multMessage.style.color = '#e63946';
    }
}

// ---------- ТРЕНАЖЕР 2: ДЕЛЕНИЕ С ОСТАТКОМ ----------
const divNumSpan = document.getElementById('divNum');
const divDenSpan = document.getElementById('divDen');
const quotAnswer = document.getElementById('quotientAnswer');
const remAnswer = document.getElementById('remainderAnswer');
const checkDivBtn = document.getElementById('checkDivBtn');
const nextDivBtn = document.getElementById('nextDivBtn');
const divMessage = document.getElementById('divMessage');

let currentDividend = 17;
let currentDivisor = 5;

function generateDivision() {
    currentDivisor = Math.floor(Math.random() * 7) + 2; // 2-8
    const quotient = Math.floor(Math.random() * 8) + 2; // 2-9
    const remainder = Math.floor(Math.random() * (currentDivisor - 1)) + 1; // 1 .. divisor-1
    currentDividend = currentDivisor * quotient + remainder;
    
    divNumSpan.textContent = currentDividend;
    divDenSpan.textContent = currentDivisor;
    quotAnswer.value = '';
    remAnswer.value = '';
    divMessage.textContent = '';
}

function checkDivision() {
    const userQuot = parseInt(quotAnswer.value);
    const userRem = parseInt(remAnswer.value);
    
    if (isNaN(userQuot) || isNaN(userRem)) {
        divMessage.textContent = '🔢 Введи оба числа!';
        divMessage.style.color = '#e76f51';
        return;
    }
    
    const correctQuot = Math.floor(currentDividend / currentDivisor);
    const correctRem = currentDividend % currentDivisor;
    
    if (userQuot === correctQuot && userRem === correctRem) {
        divMessage.textContent = '🎉 Верно! Частное и остаток правильные!';
        divMessage.style.color = '#2a9d8f';
    } else if (userQuot !== correctQuot) {
        divMessage.textContent = `❌ Частное неверное. Правильно: ${correctQuot} (остаток ${correctRem})`;
        divMessage.style.color = '#e63946';
    } else {
        divMessage.textContent = `❌ Остаток неверный. Правильно: ${correctQuot} (остаток ${correctRem})`;
        divMessage.style.color = '#e63946';
    }
}

// ---------- ТРЕНАЖЕР 3: ДОЛИ ----------
const fractionNumSpan = document.getElementById('fractionNum');
const wholeNumSpan = document.getElementById('wholeNum');
const fractionAnswer = document.getElementById('fractionAnswer');
const checkFractionBtn = document.getElementById('checkFractionBtn');
const nextFractionBtn = document.getElementById('nextFractionBtn');
const fractionMessage = document.getElementById('fractionMessage');

let currentDenominator = 4;
let currentWhole = 20;

function generateFraction() {
    // Знаменатели: 2, 3, 4, 5, 6, 8, 10 (удобные для деления)
    const denominators = [2, 3, 4, 5, 6, 8, 10];
    currentDenominator = denominators[Math.floor(Math.random() * denominators.length)];
    
    // Целое число, которое делится на знаменатель без остатка (для простоты)
    const multiplier = Math.floor(Math.random() * 5) + 2; // 2-6
    currentWhole = currentDenominator * multiplier;
    
    fractionNumSpan.textContent = `1/${currentDenominator}`;
    wholeNumSpan.textContent = currentWhole;
    fractionAnswer.value = '';
    fractionMessage.textContent = '';
}

function checkFraction() {
    const userAnswer = parseInt(fractionAnswer.value);
    const correct = currentWhole / currentDenominator;
    
    if (isNaN(userAnswer)) {
        fractionMessage.textContent = '🔢 Введи число!';
        fractionMessage.style.color = '#e76f51';
        return;
    }
    
    if (userAnswer === correct) {
        fractionMessage.textContent = '✅ Правильно! Ты нашёл часть от числа!';
        fractionMessage.style.color = '#2a9d8f';
    } else {
        fractionMessage.innerHTML = `❌ Неверно. Решение: ${currentWhole} : ${currentDenominator} = ${correct}`;
        fractionMessage.style.color = '#e63946';
    }
}

// ---------- ПРИВЯЗКА СОБЫТИЙ ----------
checkMultBtn.addEventListener('click', checkOutTableMult);
nextMultBtn.addEventListener('click', generateOutTableMult);
multAnswer.addEventListener('keypress', (e) => { if(e.key === 'Enter') checkOutTableMult(); });

checkDivBtn.addEventListener('click', checkDivision);
nextDivBtn.addEventListener('click', generateDivision);
quotAnswer.addEventListener('keypress', (e) => { if(e.key === 'Enter') checkDivision(); });
remAnswer.addEventListener('keypress', (e) => { if(e.key === 'Enter') checkDivision(); });

checkFractionBtn.addEventListener('click', checkFraction);
nextFractionBtn.addEventListener('click', generateFraction);
fractionAnswer.addEventListener('keypress', (e) => { if(e.key === 'Enter') checkFraction(); });

// Первоначальная генерация
generateOutTableMult();
generateDivision();
generateFraction();