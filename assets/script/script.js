function pressButton() {}

//Variable para botones

var container = document.getElementById('buttons')


//Variable para screen

var screen = document.querySelector(".display");

//Event Listener para botones de numeros y operaciones:
// console.log(container);
var operandos = ["+", "*", "/", "-", "%"]
container.addEventListener("click", (event) => {
    if (event.target.matches(".operation")) {
        let text = screen.innerText;
        console.log((text.length > 0) ? 1 : 2);
        if (event.target.getAttribute("value") == "*(-1)") {
            if (text.length > 0) {
                let i = text.length - 1;
                console.log(text)
                while ((!operandos.includes(text[i])) && i > 0) {
                    i--;
                }
                console.log(i);
                if (i == 0) {
                    console.log(text);
                    text = "(-" + text + ")";
                    screen.innerText = text;
                    showText();
                } else {
                    let finalText = "";
                    for (let contador = 0; contador < i + 1; contador++) {
                        finalText += text[contador];
                    }
                    let num1 = "(-";
                    for (let contador = i + 1; contador < text.length; contador++) {
                        num1 += text[contador];
                    }
                    num1 += ")"
                    finalText += num1;
                    screen.innerText = finalText;
                    showText();
                }
            }
        } else if (operandos.includes(event.target.getAttribute("value"))) {
            if (!operandos.includes(screen.innerText[screen.innerText.length - 1]) && text.length > 0) {
                //console.log("que dolor");
                screen.innerText += event.target.getAttribute("value")
                showText();
            }
        } else if ((screen.innerText[screen.innerText.length - 1] !== ")")) {
            screen.innerText += event.target.getAttribute("value")
            showText();
        }

        if (event.target.getAttribute("value") == ".") {
            console.log("this shit works")
            console.log(text.length)
            if (text.length > 0) {
                let i = text.length - 1;
                console.log(text)
                while ((!operandos.includes(text[i])) && i > 0) {
                    i--;
                }
                console.log(i);
                if (i == 0) {
                    console.log(text);
                    text = "0.";
                    screen.innerText = text;
                    showText();
                } else {
                    let finalText = "";
                    for (let contador = 0; contador < i + 1; contador++) {
                        finalText += text[contador];
                    }
                    let num1 = "(-";
                    for (let contador = i + 1; contador < text.length; contador++) {
                        num1 += text[contador];
                    }
                    num1 += ")"
                    finalText += num1;
                    screen.innerText = finalText;
                    showText();
                }
            }
        }
    }
})

//Event Listener para boton equals

var equals = document.getElementById('equal')

equals.addEventListener("click", function () {
    console.log(screen.innerText)
    screen.innerText = (eval(screen.innerText)).toFixed(2)
    let container = document.querySelector(".display__visible");
    let text = screen.innerText;
    let textVisible = "";
    let i = text.length;
    if( i > 9 ){
        textVisible = text.substring(0,4) + "x10^" + (i - 5)
        container.innerText = textVisible;
    }
    else{
        container.innerText = text;
    }
    console.log(screen.innerText)
})

// Event Listener para clear button

var clear = document.getElementById('clear')
clear.addEventListener("click", (event) => {
    screen.innerText = ""
    showText();
})

// EventListener para un solo punto por número

var dot = document.getElementById("dot")
dot.addEventListener("click", () => {
    let nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    let text = screen.innerText;
    let i = screen.innerText.length - 1;
    let caracter = "1";
    if (!operandos.includes(text[i])) {
        while (caracter != "." && caracter!=")") {
            caracter = text[i];
            if (operandos.includes(caracter) || i == 0) {
                screen.innerText+=".";
                showText();
                break;
            }
            i--;
        }
    }
})

// Screen to Show

function showText(){
    let text = screen.innerText;
    let textVisible="";
    let textContainer = document.querySelector(".display__visible")
    let i = text.length;
    if(i>10){
        let countCharVisible = i - 9;
        while(countCharVisible < i){
            textVisible += text[countCharVisible];
            countCharVisible++;
        }
        textContainer.innerText = textVisible;
        console.log(textContainer);
    }
    else{
        textContainer.innerText = text;
        console.log(textContainer);
    }
}

//! ---------- 👻 DARK MODE 👻  ------------ !\\


document.querySelector(".switch").addEventListener("click", () => {

    //document.querySelector(".testeo").classList.toggle("transition");
    document.querySelector(".slider").classList.toggle("sliderActive");
    document.querySelector(".slider").classList.toggle("sliderActive:before");
    document.querySelector(".top__container").classList.toggle("darkMode");
    document.querySelector(".btn__container").classList.toggle("darkMode2");
    document.querySelector(".calculator__container").classList.toggle("darkModeText");
    document.querySelector("body").classList.toggle("darkBodyBackground");

    document.querySelectorAll(".btn__light").forEach(element => {
        element.classList.toggle("darkMode");
    });
})



/*
else {
            (operandos.includes(event.target.getAttribute("value"))) &&
            (operandos.includes(text[text.length-1]))?o():a();
        } 
        function o(){
                console.log("que dolor");
            }
        function a(){
            console.log(!operandos.includes(event.target.getAttribute("value"))?"a":"f")
            console.log(!operandos.includes(text[text.length - 1])?"a":"f")
            screen.innerText += event.target.getAttribute("value")
        }*/


// ////////// OBSOLETO \\\\\\\\\\\ \\