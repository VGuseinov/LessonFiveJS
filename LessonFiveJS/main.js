console.log("Java Script");

// перменные
// переменные объявленные через [var], ее область видимости, это все скрипты объявленные в документе
// ниже по коду
// [var] - глобальная переменная
var a = "Barracuda";

console.log(a);

// [let] - область видимости ближайшие фигурные скобки
let b = "text";
console.log(b);

// [const] - аналог [final] in Java
// область видимости такая же как у [let]
const c = 13;
// c = 15; error
console.log(c);

// data types
// string - любая последовательность символов заключенная в двойные, одинарные либо косые ковычки
let s1 = "Lesson five JavaScript";
let s2 = 'Read text';
let s3 = `Explode JavaScript`;

// typeof - возвращает название типа
console.log(typeof s3);

// number - хранит любое целое либо вещественное число
let n1 = 120;
let n2 = 3.1415;
console.log(typeof n2);

// boolean - хранит занчения true либо false
let b1 = true;
let b2 = false;
console.log(typeof b2);

// арифмитические операторы
// [ВСЕ КАК В JAVA]
console.log(((1 + 7) * 8) % 4);

// arrays
let arr = []; // anounce array is empty
let arr2 = [1, 2, 3];
console.log(arr2[1])
console.log(arr2.length);

// cycles
let i = 0;
while(i < 4) {
    console.log(i);
    i++;
}

do {
    console.log("do while")
} while(i > 100);

for (let i = 0; i < 5; i++) {
    console.log(i * i);
}
console.clear(); // clear console

// for - in - запись в переменную индексов
for (let e in arr2) {
    console.log(arr2[e])
}

// for - of - запись в переменную занчений
for (let e of arr2) {
    console.log(e)
}

// if-else
// switch-case
if (a > b) {
    //...
} else {
    //...
}

switch (a) {
    case 1: /*...*/ break;
    default: /*...*/
}

// functions
function sum(a, b) {
    return a + b;
}
console.log(sum(34, 67));

function max(a, b, c) {
    if (a == undefined) {
        return undefined;
    }
    if (b == undefined) {
        return a;
    }
    if (c == undefined) {
        if (a > b) {
            return a;
        }
        return b;
    }
    if (a > b && a > c) {
        return a;
    }
    if (b > c) {
        return b;
    }
    return c;
}

console.log(max());
console.log(max(10));
console.log(max(56, 87));
console.log(max(76, 67, 109));

// если аргумент указан по умолчанию, то и последующие должны быть такими же
function total(bill, p = 15) {
    return bill * (1 + p / 100);
}

console.log(total(185, 10));