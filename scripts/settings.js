/*
    DARK MODE
*/


var version = "1.8.beta1";

// This is executed before the DOM is ready
var theme = localStorage.getItem("theme");
var turnOn = document.getElementById("dark-yes");
var turnOff = document.getElementById("dark-no");

// Stylesheet loader
var selectedStyles = document.getElementsByClassName("themeLoader");

// Reset dark mode option using browser preference
if(!["dark", "light"].includes(theme)){
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    localStorage.setItem("theme", theme);
}

function setOn(){
    for(var i = 0; i < selectedStyles.length; i++){
        selectedStyles[i].setAttribute("href", "styles/dark/dark.css");
    }
}

function setOff(){
    for(var i = 0; i < selectedStyles.length; i++){
        selectedStyles[i].setAttribute("href", "styles/light/light.css");
    }
}

window.addEventListener("load", () => {
    // We can only find these after the dom is ready
    turnOn = document.getElementById("dark-yes");
    turnOff = document.getElementById("dark-no");

    if(theme == "dark"){
        turnOn.className = "selected";
        turnOff.classList.remove("selected");

    } else if(theme == "light"){
        turnOn.classList.remove("selected");
        turnOff.className = "selected";
    }
    
    if (!turnOn || !turnOff) {
        return;
    }

    turnOn.addEventListener("click", (e) => {
        localStorage.setItem("theme", "dark");
        location.reload();
    });

    turnOff.addEventListener("click", () => {
        localStorage.setItem("theme", "light");
        location.reload();
    });
});

function onOrOff(reqTheme){
    if (reqTheme === "dark") {
        setOn();
        return;
    }

    setOff();
}

onOrOff(theme);