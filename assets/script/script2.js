document.querySelector(".btn__container").addEventListener("click", buttonClick);

let operatorsArray = [];
let operatorsBg = [];
document.querySelectorAll(".btn__light").forEach(element => {
    operatorsArray.push(element.getAttribute("value"));
    operatorsBg.push(getComputedStyle(element).backgroundColor);
});
console.log(operatorsArray)
console.log(operatorsBg)
let screen = document.querySelector(".display");
screen.innerHTML = "";
let firstValue;
let secondValue;

function buttonClick(event) {
    let button = event.target;

    if (button.matches(".btn")) {
        buttonBackground = button;
        button = button.getAttribute("value");
        colorBg = getComputedStyle(document.querySelector(".calculator__container")).backgroundColor;

        if (operatorsArray.includes(button)) {
            firstValue = screen.innerHTML;
            activeBg = buttonBackground;
            document.querySelectorAll(".btn__light").forEach(element => {
                element.style.backgroundColor = colorBg;
            });
            screen.innerHTML = "";
            activeOperator = button;
            buttonBackground.style.backgroundColor = "red";

        } else if (button === "=") {
            secondValue = screen.innerHTML;
            activeBg.style.backgroundColor = colorBg;
            obtainResult(firstValue, secondValue, activeOperator);

        } else if (button === "c") {
            screen.innerHTML = "";
            activeBg.style.backgroundColor = colorBg;

        } else if (button === "*(-1)") {
            screen.innerHTML = parseFloat(screen.innerHTML) * -1;
        } else {
            addToScreen(button);
        }
    }
}

function addToScreen(value) {
    screen.innerHTML += value;
}

function obtainResult(a, b, operator) {
    result = a + operator + b;
    screen.innerHTML = eval(result);
}

//! ---------- 👻 DARK MODE 👻  ------------ !\\

document.querySelector(".switch").addEventListener("click", () => {

    // document.querySelector(".testeo").classList.toggle("transition");
    document.querySelector(".slider").classList.toggle("sliderActive");
    document.querySelector(".slider").classList.toggle("sliderActive:before");
    document.querySelector(".top__container").classList.toggle("darkMode");
    document.querySelector(".btn__container").classList.toggle("darkMode2");
    document.querySelector(".calculator__container").classList.toggle("darkModeText");
    document.querySelector(".calculator__container").classList.toggle("darkMode");

    document.querySelectorAll(".btn__light").forEach(element => {
        element.classList.toggle("darkMode");
        if (element.style.backgroundColor != "red") {
            element.style.backgroundColor = getComputedStyle(document.querySelector(".calculator__container")).backgroundColor;
        }
    });
})