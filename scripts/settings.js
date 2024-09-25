/*
    DARK MODE
*/


var version = "1.7.beta4";
// This is executed before the DOM is ready
var darkModeToggle = localStorage.getItem("dark-mode");
var turnOn = document.getElementById("dark-yes");
var turnOff = document.getElementById("dark-no");

// Reset dark mode option using browser preference
if(!["on", "off"].includes(darkModeToggle)){
    darkModeToggle = window.matchMedia("(prefers-color-scheme: dark)").matches ? "on" : "off";
    localStorage.setItem("dark-mode", darkModeToggle);
}

function setOn(){
    document.documentElement.className="dark-mode";
}

function setOff(){
    document.documentElement.className="light-mode";
}

window.addEventListener("load", () => {
    // We can only find these after the dom is ready
    turnOn = document.getElementById("dark-yes");
    turnOff = document.getElementById("dark-no");

    if(darkModeToggle == "on"){
        turnOn.className = "selected";
        turnOff.classList.remove("selected");
    } else if(darkModeToggle == "off"){
        turnOn.classList.remove("selected");
        turnOff.className = "selected";
    }
    
    if (!turnOn || !turnOff) {
        return;
    }

    turnOn.addEventListener("click", (e) => {
        localStorage.setItem("dark-mode", "on");
        location.reload();
    });

    turnOff.addEventListener("click", () => {
        localStorage.setItem("dark-mode", "off");
        location.reload();
    });
});

function onOrOff(onOrOff1){
    if (onOrOff1 === "on") {
        setOn();
        return;
    }

    setOff();
}

onOrOff(darkModeToggle);