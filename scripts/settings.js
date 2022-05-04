/*
    DARK MODE
*/


// This is executed before the DOM is ready
var darkIsOn = localStorage.getItem("dark-mode");

if(darkIsOn == null){
    darkIsOn = window.matchMedia("(prefers-color-scheme: dark)").matches ? "on" : "off";
    localStorage.setItem("dark-mode", darkIsOn);
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

    switch(darkIsOn){
        case "yes": setOn(); turnOnOff.innerHTML = "Turn Off"; break;
        case "no": setOff(); turnOnOff.innerHTML = "Turn On"; break;
    }

    var i = 0;
    turnOnOff.addEventListener("click", (e) => {
        i += 1;
        if(darkIsOn == "yes"){
            localStorage.setItem("dark-mode", "no");
            onOrOff("off");
            turnOnOff.innerHTML = "Turn On";
            location.reload();
        } else if(darkIsOn == "no"){
            localStorage.setItem("dark-mode", "yes");
            onOrOff("on");
            turnOnOff.innerHTML = "Turn Off";
            location.reload();
        } else{
            console.error("Not working");
        }
        console.log(i + " Event fired: " + darkIsOn);
    });
});

function onOrOff(onOrOff1){
    switch(onOrOff1){
        case "on": setOn(); break;
        case "off": setOff(); break;
    }
}

onOrOff(darkIsOn);