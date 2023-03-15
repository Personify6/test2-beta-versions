/*
    DARK MODE
*/


var version = "1.5 Beta 4";
// This is executed before the DOM is ready
var darkModeToggle = localStorage.getItem("dark-mode");

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
    var turnOnOff = document.getElementById("dark-yes");
    if (!turnOnOff) {
        return;
    }

    switch(darkModeToggle){
        case "on": turnOnOff.innerHTML = "Turn Off"; break;
        case "off": turnOnOff.innerHTML = "Turn On"; break;
    }

    var i = 0;
    turnOnOff.addEventListener("click", (e) => {
        i += 1;
        if(darkModeToggle == "off"){
            localStorage.setItem("dark-mode", "on");
            location.reload();
        } else if(darkModeToggle == "on"){
            localStorage.setItem("dark-mode", "off");
            location.reload();
        } else{
            console.error("Not working");
        }
        console.log(i + " Event fired: " + darkModeToggle);
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