// Дан массив с рандомными числами от 0 до 50. Написать ф-цию если число меньше 25, меняем это число на ноль.
// Получается возвращаем новый массив. Если число меньше 25 - меняем на ноль, если больше меняем на 1.

// let arr1 = [24, 4, 9, 16, 44, 41, 18, 32, 13];
// let arr2 = [24, 4, 9, 16, 44, 41, 18, 32, 13, 34, 6, 7, 8, 33, 31];

// function binaryArr(props) {
//     let newArr = [];
//     for (let i = 0; i < props.length; i++) {
//         if (props[i] < 25) {
//             newArr.push(0);
//         } else {
//             newArr.push(1);
//         }
//     }
//     console.log(newArr);
// }

// binaryArr(arr2);

// Дано предложение. В предложении каждое слово надо написать с большой буквы.
let someString = "sanjar is writing the code";
// let someString = "Sanjar writes code"

// divide by words
// const words = someString.split(" ");
// console.log(words[2]);

// // divide by letters
// const chars = someString.split("");
// console.log(chars[8]);

// converting to array
// const someStringCopy = someString.split();
// console.log(someStringCopy);

// dividing string in the array into individual words
let arrString2 = someString.split(" ");
// console.log(arrString2);

//  Create Magic
function someArr(props) {
    for (let arr of props) {
        arr = arr.charAt(0).toUpperCase() + arr.slice(1);
        console.log(arr);
    }
}
someArr(arrString2);
// ----------------------------

// let someString = "sanjar is writing the code";
// let arrString2 = someString.split(" ");

function someArr(props) {
    let newString = "";
    for (let arr of props) {
        arr = arr.charAt(0).toUpperCase() + arr.slice(1);
        newString += arr + " ";
    }
    console.log(newString);
}

someArr(arrString2);

// ---------------------------
// const n = 1;
// function getNum(props) {
//     if (props % 2 === 0) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// getNum(n);
// -------------------------

// Создай один инпут и кнопку в index.html.  Что бы ты не написал в инпут, при клике на кнопку, отобразить в консоли



// buttonDoc.onclick = function () {
//     chackVal();
// };

// const isNumeric = (n) => !isNaN(n);

// function chackVal() {
//     const val = inputDoc.value;
//     if (!val.trim()) {
//         spanDoc.innerHTML = "Не должно быть пустых строк";
//     } else if (isNumeric(+val)) {
//         spanDoc.innerHTML = "";
//     } else {
//         spanDoc.innerHTML = "Писать только числа";
//     }
// }
