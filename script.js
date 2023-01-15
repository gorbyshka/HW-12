let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log(arr);

//Знайти мінімальний елемент масиву та його порядковий номер.

// let orderMinNumber;
// let minimum = arr[0];
// for (let item of arr) {
//     if (item < minimum) {
//         minimum = item;
//         orderMinNumber = arr.indexOf(minimum);
//     }
// }

// console.log('Минимальный элемент массива' + ': ' + minimum);
// console.log('Порядковый номер минимального элемента массива' + ': ' + orderMinNumber);

// Знайти максимальний елемент масиву та його порядковий номер.

// let orderMaxNumber;
// let maximum = arr[0];
// for (let item of arr) {
//     if (item > maximum) {
//         maximum = item;
//         orderMaxNumber = arr.indexOf(maximum);
//     }
// }

// console.log('Максимальный элемент массива' + ': ' + maximum);
// console.log('Порядковый номер максимального элемента массива' + ': ' + orderMaxNumber);

// Визначити кількість негативних елементів.

// let negative = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         negative.push(arr[i]);
//     }
// }
// console.log('Количество отрицательных элементов' + ': ' + negative.length);

// Знайти кількість непарних позитивних елементів

let positive = [];
let result;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        positive.push(arr[i]);
        result = positive.reduce((total, amount) => {
            if (amount > 0) {
                total.push(amount);
            }
            return total;
        }, []);
    }
}

console.log(result);
console.log('Количество непарных положительных элементов' + ': ' + result.length);
console.log('Сумма непарных положительных элементов' + ': ' + result.map(i => x += i, x = 0).reverse()[0]);

// Знайти кількість парних позитивних елементів.

// let posPair = [];
// let result2;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         posPair.push(arr[i]);
//         result2 = posPair.reduce((total, amount) => {
//             if (amount > 0) {
//                 total.push(amount);
//             }
//             return total;
//         }, []);
//     }
// }

// console.log(result2);
// console.log('Количество парных положительных элементов' + ': ' + result2.length);
// console.log('Сумма парных положительных элементов' + ': ' + result2.map(i => x += i, x = 0).reverse()[0]);

// Знайти добуток позитивних елементів.

// let sum = 1;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         sum = sum * arr[i];
//     }
// }
// console.log('Произведение всех элементов' + ': ' + sum);

// Знайти найбільший серед елементів масиву, ост альні обнулити.

let max = 0;
let arrEmpty = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        arr.unshift(max);
    }
}

arr = 0;
console.log('Самый большой элемент массива' + ': ' + max);
console.log('Обнуление массива' + ': ' + arr);