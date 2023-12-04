// alert("Please set Inspect mode resolution to 540 x 1170 before use")

// Declaring variables for different pages
const home = document.getElementById("home")
const search = document.getElementById("SearchPage")

// Declaring variables for different buttons inside the webpage
const menuIcon = document.getElementById("MenuIcon")


// Set Default visibility for each page
// home.style.display = "none"


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
//Hamburger menu function----------------End