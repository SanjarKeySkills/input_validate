const inputDoc = document.getElementById("addText");
const buttonDoc = document.getElementById("addButton");
const spanDoc = document.getElementById("error");

const disableButton = () => {
    buttonDoc.disabled = true;
};

inputDoc.oninput = function () {
    checkVal();
};

const isNumeric = (n) => !isNaN(n);

function checkVal() {
    const val = inputDoc.value;
    if (!val.trim()) {
        spanDoc.innerHTML = "Не должно быть пустых строк";
    } else if (val.includes("$")) {
        spanDoc.innerHTML = "символы @ # $ % & / * писать недопустимо";
    } else if (val.includes("%")) {
        spanDoc.innerHTML = "символы @ # $ % & / * писать недопустимо";
    } else if (val.includes("&")) {
        spanDoc.innerHTML = "символы @ # $ % & / * писать недопустимо";
    } else if (val.includes("#")) {
        spanDoc.innerHTML = "символы @ # $ % & / * писать недопустимо";
    } else if (val.includes("@")) {
        spanDoc.innerHTML = "символы @ # $ % & / * писать недопустимо";
    } else if (val.includes("*")) {
        spanDoc.innerHTML = "символы @ # $ % & / * писать недопустимо";
    } else {
        getNum(val);
    }

    function getNum(numberProps) {
        if (isNumeric(+numberProps)) {
            spanDoc.innerHTML = "";
            showEven(val);
            validInput(val);
        } else {
            spanDoc.innerHTML = "Писать только числа";
        }
    }

    function validInput(arg) {
        if (arg == "555") {
            disableButton();
        }
    }

    function showEven(arg) {
        if (+arg % 2 === 0) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
