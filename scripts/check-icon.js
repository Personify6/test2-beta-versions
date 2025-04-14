var theme = localStorage.getItem("theme");
var iconSet = document.getElementById("settings-icon");

if(!theme){
    systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    localStorage.setItem("theme", systemTheme);
}

theme = localStorage.getItem("theme");

if(theme == "light"){
    iconSet.src = "images/settings-icon.png";
} else if(theme == "dark"){
    iconSet.src = "images/settings-icon-dark.png";
}
