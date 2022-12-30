/* Массив - частный случай объекта, в виде ключа используется индекс
/*const arr = [1,2,3];
console.log(arr[1]);*/


/*Инкременты - прибавляют или убирают одно значение
let incr = 10,
    decr = 10;
console.log(++incr); префиксный, сразу вернет новое значение
console.log(decr--); вернет сначала исходное значение */

/* операторы
let a = 3; присваивает значение
2*4 == '8' (true) сравнение, не строгое равенство сравниваем значение, не тип данных
2*4 === '8' (false) строгое равенство, число != строка
&& оператор И
|| оператор или */

/*const storeName = 'Nike';
const storeDescription= {
    budget: 10000,
    employees: ['Ann', 'Ben', 'Cris'], - массив в объекте
    products: { - объект в объекте
        'sneakers': 5000,
        't-shirt': 200
    },
    open: true
};*/
/* Подключение к гит
git init - инициализация в папке
git config --local локальная конфигурация, для текущего проекта, имя и мыло отобразяться в файле config в папке проекта (папка git)
git config --global  глобальная конфига, для всего что есть на компе, имя и мыло отоброзяться в папке пользовтелея
git config --global user.name'ALina'
git config --global user.email example@gmail.com */

/* команды гита
git status - посмотреть статус файлов
git add -A (all) добавить все файлы
git add script.js - добавить только этот файл
git commit -a -m'first coomit' - закоммитить, -a ( все файлы) -m(сообщение)
git log - показывает коммиты 
git pull если есть различия между удаленным репом и проектом ( это типо мерджа или слияние двух проектов

Удалить папку на удаленном репе
    git rm -r myfolder -f
    git commit -m "myfolder is deleted"
    git push
*/

/*let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;

console.log(personalMovieDB); */

/* Условия if else
const num = 50;
if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('ok');
}

Тернарный оператор ?
(num === 50) ? console.log('ok') : console.log('Error'); */

/* switch - только точное соответсвие, а не если тогда */

/*const num = 50;

switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 51:
        console.log('В точку');
        break;
    case 100:
        console.log('Неверно');
        break;
    default:
        console.log('Не в этот раз');
        break;
}
*/

/* Логические операторы 
&& и
|| или
!= не */

/*const hamburger = 5;
 const fries = 0;

 if (hamburger && fries) {
     console.log('я сыт');
 }

 console.log((hamburger && fries)); */

/*const hamburger = 3;
const fries = 1;
const cola = 0;

// console.log(hamburger === 3 && cola && fries);

if (hamburger === 3 && cola ===1 && fries) {
    console.log('я сыт');
} 
else {
    console.log('Уходим');
}


console.log(1 && 0); // возвращает первый фолс, дальше код не идет
console.log(1 && 5); // возвращает последнее тру
console.log(null && 5); // возвращает первый фолс, дальше код не идет
console.log(0 && 'fdgssdgs'); // возвращает первый фолс, дальше код не идет

// && - запинается на первой лжи, если все правда - возвращает последнее
// || - запинается на первой правде */

/*const hamburger = 3;
const fries = 0;
const cola = 0;

if (hamburger || cola || fries) {
    console.log('я сыт');
} 
else {
    console.log('Уходим');
} */

/*let johnReport, alexReport, samReport, mariaReport = 'done';
console.log(johnReport || alexReport || samReport || mariaReport);*/

/*const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('я сыт');
} 
else {
    console.log('Уходим');
}*/

/* циклы

/*let num = 50;

while (num < 55){
    console.log(num);
    num++;
} */

// while - цикл выполняется, пока условие актуально

/*let num = 50;

do {
    console.log(num);
    num++;
}
while (num < 55 );

do - сделай это, пока while - выполняется это условие */

/*let num = 50;
for (let i = 1; i < 8; i++) { обьявляется переменная, условия, что будет происходить в каждом цикле 
    console.log(num);
    num++
} */
/*for (let i = 1; i < 10; i++) {
    if (i === 6) {
        break; - останавливает цикл
        continue; - исключает 6 из цикла
    }
    console.log(i);
}*/

/*for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}

логика запуска итераций: 1 цикл начинается с 0, затем полностью выполняется 2й цикл, пока условие истинно ( j < 3)
затем снова запускаетс основной цикл с 1 ( сработало условие i++) и после снова затем полностью выполняется 2й цикл, пока условие истинно ( j < 3)
так просиходит, пока не пройдут все итерации основного цикла, то есть пока будет истинно условие (i < 3) */

// формирование пирамиды 

/*let result = '';
const lenght = 7;

for (let i = 1; i < lenght; i++){

        for (let j = 0; j < i; j++){
            result += "*";
        }
        
        result +='\n';
}

console.log(result); */

/*first: for (let i = 0; i < 3; i++) { first - это метка
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) break first; - цикл не пойдет дальше этого условия
            console.log(`Third level: ${k}`);
        }
    }
} */

// Функции

// Функция запускается до начала выполнения кода
// - можно вызвать до и после обьявления
// - запускается сразу

/*
function showFirstMessage - название функции(аргумент) {
    console.log('Hello World!');
}

showFirstMessage(); вызываем функцию - запускаем выполнение кода функции
*/
/*
let num = 20;
function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage('Hello World!');
console.log(num);
*/
/*
function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));
*/
/*
function ret() {
    let num = 50;

    // 

    return num;
}

const anotherNum = ret();
console.log(anotherNum);
*/

// Функция запускается только после обьявления 
// - создается переменная
// - можно вызвать только после ее обьявления
// - запускается только когда до нее доходит код
/*
const logger = function() {
console.log('Hello')
};

logger();
*/

// Стрелочная функция
/*
const calc = (a, b) => {return a + b}; или const calc = (a, b) => a + b;
*/

// Про аргументы функции
/*
const usdCurr = 28;
const euroCurr = 32;
function convert(amount, curr) {
    console.log(curr*amount);
}

convert(500, usdCurr);
convert(500, euroCurr);
*/
/*
const usdCurr = 28;
const discount = 0.9;
function convert(amount, curr) {
    return curr*amount;
}

function promotion(result) {
    console.log(result * discount);
}

promotion(convert(500, usdCurr));
// или
const res = convert(500, usdCurr);
promotion(res);
*/