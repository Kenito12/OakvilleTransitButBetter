// alert("Please set Inspect mode resolution to 540 x 1170 before use")

// Declaring variables for different pages
const home = document.getElementById("home")
const search = document.getElementById("SearchPage")

// Declaring variables for different buttons inside the webpage
const menuIcon = document.getElementById("MenuIcon")
const searchBtn = document.getElementById("Search")
const searchExitBtn = document.getElementById("searchExit")

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