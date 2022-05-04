var darkIsOn = localStorage.getItem("dark-mode");
var iconSet = document.querySelector("[settings]");

if(!darkIsOn){
    localStorage.setItem("dark-mode", "off");
}

darkIsOn = localStorage.getItem("dark-mode");

if(darkIsOn == "off"){
    iconSet.src = "images/settings-icon.png";
} else if(darkIsOn == "on"){
    iconSet.src = "images/settings-icon-dark.png";
}
