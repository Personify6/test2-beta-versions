/*
    DARK MODE
*/
var darkIsOn = localStorage.getItem("dark-mode");
var turnOnOff = document.getElementById("dark-yes");
if(darkIsOn == null){
    localStorage.setItem("dark-mode", "no");
}
darkIsOn = localStorage.getItem("dark-mode");
function setOn(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}
function setOff(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}
window.addEventListener("load", () => {
    switch(darkIsOn){
        case "yes": setOn(); turnOnOff.innerHTML = "Turn Off"; break;
        case "no": setOff(); turnOnOff.innerHTML = "Turn On"; break;
    }
});
function onOrOff(onOrOff1){
    switch(onOrOff1){
        case "on": setOn(); break;
        case "off": setOff(); break;
    }
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