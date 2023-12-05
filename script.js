// alert("Please set Inspect mode resolution to 540 x 1170 before use")

// Declaring variables for different pages
const home = document.getElementById("home")
const search = document.getElementById("SearchPage")
const nearMe = document.getElementById("stopNearMe")
const estimated = document.getElementById("currentEstimated")


// Declaring variables for different buttons inside the webpage
const menuIcon = document.getElementById("MenuIcon")
const searchBtn = document.getElementById("Search")
const searchExitBtn = document.getElementById("searchExit")
const nearMeBtn = document.getElementById("NearMe")
const onScreenBtn = document.getElementById("onScreenBut")

// Set Default visibility for each page



//Hamburger menu function----------------
const overlay = document.getElementById("overlay");
const transparent = document.getElementById("transparentLayer");


//When the menuIcon is pressed menu and transparent div popup
menuIcon.onclick = function(){
    overlay.classList.add("show-menu");
    transparent.style.display = "block";
}

//when user press the transparent div the menu will close along with the transparent div
transparent.onclick = function(){
    overlay.classList.remove("show-menu");
    transparent.style.display = "none";
}
//----------------End-----------------------


// Search Page Function
// Display Search Page when the search button is pressed
searchBtn.onclick = () => {
    search.classList.add("show-search")
}

searchExitBtn.onclick = () => {
    search.classList.remove("show-search")
}
//----------------End-----------------------


//Stop Near Me Function
const snmTrans = document.getElementById("SNMTranparent")
const mapHolder = document.getElementById("mapHolder")
const stops = document.getElementById("stops")

nearMeBtn.onclick = () => {
    nearMe.classList.add("show-Nearme")
    snmTrans.style.display = "block"
    mapHolder.src = "Assets/PlaceHolder/MapWithStop.png"
    stops.style.display = "block"
}

snmTrans.onclick = () => {
    nearMe.classList.remove("show-Nearme")
    snmTrans.style.display = "none"
    mapHolder.src = "Assets/PlaceHolder/MapPlaceholder.png"
    stops.style.display = "none"
}

stops.onclick = () => {
    snmTrans.style.display = "none"
    nearMe.classList.remove("show-Nearme")
    onScreenBtn.style.display = "none"
    estimated.classList.add("show-current")
    estimated.style.display = "block"
}
//----------------End-----------------------