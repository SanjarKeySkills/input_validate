const inputDoc = document.getElementById("addText");
const buttonDoc = document.getElementById("addButton");
const spanDoc = document.getElementById("error");

inputDoc.oninput = function () {
    chackVal();
};

const isNumeric = (n) => !isNaN(n);

function chackVal() {
    const val = inputDoc.value;
    if (!val.trim()) {
        spanDoc.innerHTML = "Не должно быть пустых строк";
    } else if (isNumeric(+val)) {
        spanDoc.innerHTML = "";
        if (+val % 2 === 0) {
            console.log(true);
        } else {
            console.log(false);
        }
    } else {
        spanDoc.innerHTML = "Писать только числа";
    }
}

// задать валидность для кнопки. активна только при наличии валидного значения.
// через регксы сделать ваиднсть пароля: мин 8 симб, 1 мин заглав, 1 цифр, нет синв $
