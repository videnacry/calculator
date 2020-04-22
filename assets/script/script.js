function pressButton() {}

//Variable para botones

var container = document.getElementById('buttons')


//Variable para pantalla

var pantalla = document.querySelector(".display");

//Event Listener para botones de numeros y operaciones:
// console.log(container);
container.addEventListener("click", (event) => {
    let operandos = ["+", "*", "/", "-", "%"]
    if (event.target.matches(".operation")) {
        let text = pantalla.innerText;
        console.log((text.length>0)?1:2);
        if (event.target.getAttribute("value") == "*(-1)") {
            if(text.length>0){
                let i = text.length - 1;
                console.log(text)
                while ((!operandos.includes(text[i])) && i > 0) {
                    i--;
                }
                console.log(i);
                if (i == 0) {
                    console.log(text);
                    text = "(-" + text + ")";
                    pantalla.innerText = text;
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
                    pantalla.innerText = finalText;

                }
            }
        }  
        else if(operandos.includes(event.target.getAttribute("value"))){
                if(!operandos.includes(pantalla.innerText[pantalla.innerText.length - 1]) && text.length>0){
                //console.log("que dolor");
                pantalla.innerText += event.target.getAttribute("value")
            }
        }else if((pantalla.innerText[pantalla.innerText.length - 1] !== ")")) {
            pantalla.innerText += event.target.getAttribute("value")
        }
        
        //  else if( (operandos.includes(event.target.getAttribute("value"))) &&
        //     (!operandos.includes(pantalla.innerText[pantalla.innerText.length - 1])) ){
        //         console.log("que dolor");
        //         pantalla.innerText += event.target.getAttribute("value")
        //     }
        // else if (!operandos.includes(event.target.getAttribute("value"))&&
        //     (pantalla.innerText[pantalla.innerText.length - 1] !== ")")) {
        //         console.log(!operandos.includes(event.target.getAttribute("value"))?"a":"f")
        //         console.log(!operandos.includes(pantalla.innerText[pantalla.innerText.length - 1])?"a":"f")
        //         pantalla.innerText += event.target.getAttribute("value")
        //     }
        // else if (!((operandos.includes(event.target.getAttribute("value"))) &&
        //         (operandos.includes(text[text.length-1])))){
        //             console.log(!operandos.includes(event.target.getAttribute("value"))?"a":"f")
        //             console.log(!operandos.includes(text[text.length - 1])?"a":"f")
        //             pantalla.innerText += event.target.getAttribute("value")
        //     }
        
   }
})

//Event Listener para boton equals

var equals = document.getElementById('equal')

equals.addEventListener("click", function () {
    console.log(pantalla.innerText)
    pantalla.innerText = (eval(pantalla.innerText)).toFixed(2)
    console.log(pantalla.innerText)
})

// Event Listener para clear button

var clear = document.getElementById('clear')
clear.addEventListener("click", (event) => {
    pantalla.innerText = ""
})

function checkDoubleOperator(){
    
}



// ---------- 👻 DARK MODE 👻  ------------ \\


document.querySelector(".switch").addEventListener("click", () => {

    //document.querySelector(".testeo").classList.toggle("transition");
    document.querySelector(".slider").classList.toggle("sliderActive");
    document.querySelector(".slider").classList.toggle("sliderActive:before");
    document.querySelector(".top__container").classList.toggle("darkMode");
    document.querySelector(".btn__container").classList.toggle("darkMode2");
    document.querySelector(".calculator__container").classList.toggle("darkModeText");

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
            pantalla.innerText += event.target.getAttribute("value")
        }*/


// ////////// OBSOLETO \\\\\\\\\\\ \\