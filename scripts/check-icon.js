var darkIsOn = localStorage.getItem("dark-mode");
var iconSet = document.querySelector("[settings]");

if(!darkIsOn){
    localStorage.setItem("dark-mode", "no");
}

darkIsOn = localStorage.getItem("dark-mode");

if(darkIsOn == "no"){
    iconSet.src = "images/settings-icon.png";
} else if(darkIsOn == "yes"){
    iconSet.src = "images/settings-icon-dark.png";
}