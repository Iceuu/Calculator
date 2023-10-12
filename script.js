

let resultscreen = document.getElementById("result");

function appendToResult(num) {
    resultscreen.value += num;
}

function calculateResult() {
    try {
        resultscreen.value = eval(resultscreen.value);
    }
    catch (err) {
        alert("Invalid")
    }
}

function clearResult() {
    resultscreen.value = "";
}

function delResult() {
    resultscreen.value = resultscreen.value.slice(0, -1);
}