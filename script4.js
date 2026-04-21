// =============================================
// 4 КЛАСС: ТРЕНАЖЕРЫ ПО МАТЕМАТИКЕ
// =============================================

// ---------- ТРЕНАЖЕР 1: СКОРОСТЬ-ВРЕМЯ-РАССТОЯНИЕ ----------
const speedProblemDiv = document.getElementById('speedProblem');
const speedAnswer = document.getElementById('speedAnswer');
const checkSpeedBtn = document.getElementById('checkSpeedBtn');
const nextSpeedBtn = document.getElementById('nextSpeedBtn');
const speedMessage = document.getElementById('speedMessage');

let currentSpeedProblem = { type: 'distance', v: 60, t: 3, s: 180, text: '' };

function generateSpeedProblem() {
    const type = Math.floor(Math.random() * 3); // 0: найти S, 1: найти V, 2: найти t
    let v, t, s, text;
    
    switch(type) {
        case 0: // Найти расстояние
            v = Math.floor(Math.random() * 30) + 20; // 20-50 км/ч
            t = Math.floor(Math.random() * 5) + 2;   // 2-6 ч
            s = v * t;
            text = `🚗 Машина едет со скоростью ${v} км/ч. Какое расстояние она проедет за ${t} часа?`;
            break;
        case 1: // Найти скорость
            s = Math.floor(Math.random() * 100) + 60; // 60-160 км
            t = Math.floor(Math.random() * 4) + 2;    // 2-5 ч
            v = Math.floor(s / t);
            s = v * t; // Делаем s кратным t
            text = `🚌 Автобус проехал ${s} км за ${t} часа. С какой скоростью он двигался?`;
            break;
        case 2: // Найти время
            s = Math.floor(Math.random() * 100) + 80; // 80-180 км
            v = Math.floor(Math.random() * 30) + 30;  // 30-60 км/ч
            t = Math.floor(s / v);
            s = v * t; // Делаем s кратным v
            text = `✈️ Самолёт летит со скоростью ${v} км/ч. За какое время он преодолеет ${s} км?`;
            break;
    }
    
    currentSpeedProblem = { type, v, t, s, text };
    speedProblemDiv.textContent = text;
    speedAnswer.value = '';
    speedMessage.textContent = '';
}

function checkSpeed() {
    const userAnswer = parseInt(speedAnswer.value);
    let correct;
    
    switch(currentSpeedProblem.type) {
        case 0: correct = currentSpeedProblem.s; break;
        case 1: correct = currentSpeedProblem.v; break;
        case 2: correct = currentSpeedProblem.t; break;
    }
    
    if (isNaN(userAnswer)) {
        speedMessage.textContent = '🔢 Введи число!';
        speedMessage.style.color = '#e76f51';
        return;
    }
    
    if (userAnswer === correct) {
        speedMessage.textContent = '🏆 Отлично! Задача решена верно!';
        speedMessage.style.color = '#2a9d8f';
    } else {
        let hint = '';
        if (currentSpeedProblem.type === 0) hint = `S = V · t = ${currentSpeedProblem.v} · ${currentSpeedProblem.t}`;
        else if (currentSpeedProblem.type === 1) hint = `V = S : t = ${currentSpeedProblem.s} : ${currentSpeedProblem.t}`;
        else hint = `t = S : V = ${currentSpeedProblem.s} : ${currentSpeedProblem.v}`;
        speedMessage.innerHTML = `❌ Неверно. ${hint} = ${correct}`;
        speedMessage.style.color = '#e63946';
    }
}

// ---------- ТРЕНАЖЕР 2: ПЛОЩАДЬ И ПЕРИМЕТР ----------
const rectLengthSpan = document.getElementById('rectLength');
const rectWidthSpan = document.getElementById('rectWidth');
const perAnswer = document.getElementById('perimeterAnswer');
const areaAnswer = document.getElementById('areaAnswer');
const checkRectBtn = document.getElementById('checkRectBtn');
const nextRectBtn = document.getElementById('nextRectBtn');
const rectMessage = document.getElementById('rectMessage');

let currentLength = 8;
let currentWidth = 5;

function generateRectangle() {
    currentLength = Math.floor(Math.random() * 10) + 3; // 3-12 см
    currentWidth = Math.floor(Math.random() * 8) + 2;   // 2-9 см
    
    rectLengthSpan.textContent = currentLength;
    rectWidthSpan.textContent = currentWidth;
    perAnswer.value = '';
    areaAnswer.value = '';
    rectMessage.textContent = '';
}

function checkRectangle() {
    const userPer = parseInt(perAnswer.value);
    const userArea = parseInt(areaAnswer.value);
    
    const correctPer = (currentLength + currentWidth) * 2;
    const correctArea = currentLength * currentWidth;
    
    if (isNaN(userPer) || isNaN(userArea)) {
        rectMessage.textContent = '🔢 Введи оба числа!';
        rectMessage.style.color = '#e76f51';
        return;
    }
    
    if (userPer === correctPer && userArea === correctArea) {
        rectMessage.textContent = '🎯 Идеально! И периметр, и площадь верны!';
        rectMessage.style.color = '#2a9d8f';
    } else if (userPer !== correctPer) {
        rectMessage.innerHTML = `❌ Периметр неверный. P = (${currentLength} + ${currentWidth}) · 2 = ${correctPer} см`;
        rectMessage.style.color = '#e63946';
    } else {
        rectMessage.innerHTML = `❌ Площадь неверная. S = ${currentLength} · ${currentWidth} = ${correctArea} см²`;
        rectMessage.style.color = '#e63946';
    }
}

// ---------- ТРЕНАЖЕР 3: ДРОБИ ----------
const frac1Span = document.getElementById('frac1');
const frac2Span = document.getElementById('frac2');
const fracNumAnswer = document.getElementById('fracNumAnswer');
const fracDenAnswer = document.getElementById('fracDenAnswer');
const checkFracBtn = document.getElementById('checkFracBtn');
const nextFracBtn = document.getElementById('nextFracBtn');
const fracMessage = document.getElementById('fracMessage');

let currentFraction = { num1: 3, den: 8, num2: 2 };

function generateFraction() {
    const denominator = Math.floor(Math.random() * 6) + 4; // 4-9
    
    // Генерируем числители так, чтобы сумма была меньше или равна знаменателю
    // (для 4 класса работаем с правильными дробями)
    const num1 = Math.floor(Math.random() * (denominator - 2)) + 1;
    const num2 = Math.floor(Math.random() * (denominator - num1)) + 1;
    
    currentFraction = { num1, den: denominator, num2 };
    
    frac1Span.textContent = `${num1}/${denominator}`;
    frac2Span.textContent = `${num2}/${denominator}`;
    fracNumAnswer.value = '';
    fracDenAnswer.value = '';
    fracMessage.textContent = '';
}

function checkFraction() {
    const userNum = parseInt(fracNumAnswer.value);
    const userDen = parseInt(fracDenAnswer.value);
    
    const correctNum = currentFraction.num1 + currentFraction.num2;
    const correctDen = currentFraction.den;
    
    if (isNaN(userNum) || isNaN(userDen)) {
        fracMessage.textContent = '🔢 Введи числитель и знаменатель!';
        fracMessage.style.color = '#e76f51';
        return;
    }
    
    if (userNum === correctNum && userDen === correctDen) {
        fracMessage.textContent = '✅ Правильно! Дробь сложена верно!';
        fracMessage.style.color = '#2a9d8f';
    } else if (userDen !== correctDen) {
        fracMessage.innerHTML = `❌ Знаменатель должен остаться ${correctDen}. Знаменатели при сложении не меняются!`;
        fracMessage.style.color = '#e63946';
    } else {
        fracMessage.innerHTML = `❌ Числитель: ${currentFraction.num1} + ${currentFraction.num2} = ${correctNum}`;
        fracMessage.style.color = '#e63946';
    }
}

// ---------- ПРИВЯЗКА СОБЫТИЙ ----------
checkSpeedBtn.addEventListener('click', checkSpeed);
nextSpeedBtn.addEventListener('click', generateSpeedProblem);
speedAnswer.addEventListener('keypress', (e) => { if(e.key === 'Enter') checkSpeed(); });

checkRectBtn.addEventListener('click', checkRectangle);
nextRectBtn.addEventListener('click', generateRectangle);
perAnswer.addEventListener('keypress', (e) => { if(e.key === 'Enter') checkRectangle(); });
areaAnswer.addEventListener('keypress', (e) => { if(e.key === 'Enter') checkRectangle(); });

checkFracBtn.addEventListener('click', checkFraction);
nextFracBtn.addEventListener('click', generateFraction);
fracNumAnswer.addEventListener('keypress', (e) => { if(e.key === 'Enter') checkFraction(); });
fracDenAnswer.addEventListener('keypress', (e) => { if(e.key === 'Enter') checkFraction(); });

// Первоначальная генерация
generateSpeedProblem();
generateRectangle();
generateFraction();