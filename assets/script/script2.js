document.querySelector(".btn__container").addEventListener("click", buttonClick);


function buttonClick(event) {
    let button = event.target;

    if (button.matches(".btn")) {
        button = button.getAttribute("value");
        console.log(button);
        addToScreen(button);


        switch (button) {
            case "9":
                console.log("Fuck it nigga");
                break;

            default:
                break;
        }


    }
}


function addToScreen(value){
    console.log("yep")
    let screen = document.querySelector(".display");
    // screen += value;
    screen.innerHTML += value;
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