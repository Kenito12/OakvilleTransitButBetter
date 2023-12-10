// alert("Please set Inspect mode resolution to 540 x 1170 before use")

// Declaring variables for different pages
const home = document.getElementById("home")
const search = document.getElementById("SearchPage")
const nearMe = document.getElementById("stopNearMe")
const estimated = document.getElementById("currentEstimated")
const navigation = document.getElementById("navigation")
const busRollUp = document.getElementById("busRollUp")
const singIn = document.getElementById("signIn")
const createAcc = document.getElementById("createAcc")


// Declaring variables for different buttons inside the webpage
const menuIcon = document.getElementById("MenuIcon")
const searchBtn = document.getElementById("Search")
const searchExitBtn = document.getElementById("searchExit")
const nearMeBtn = document.getElementById("NearMe")
const onScreenBtn = document.getElementById("onScreenBut")
const currentBusBtn = document.getElementById("currentBus")
const busIcon = document.getElementById("Busicon")
const rollUptab = document.getElementById("rollUptab")
const homeBtn = document.getElementById("homeButton")
const favouritesBtn = document.getElementById("favouritesBtn")
const loginBtn = document.getElementById("loginBtn")
const singUpHere = document.getElementById("singUpHere")
const singInExit = document.getElementById("singInExit")
const signUpBtn = document.getElementById("SignUpBtn")
const signUpexit = document.getElementById("SignUpExit")
// Set Default visibility for each page
// navigation.style.display = "none"



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
}

estimated.onclick = () => {
    stops.style.display = "none"
    estimated.classList.remove("show-current")
    mapHolder.src = "Assets/PlaceHolder/MapBusStop.png"
    currentBusBtn.classList.add("show-current")
    busIcon.style.display = "block"
}

currentBusBtn.onclick = () => {
    navigation.style.display = "none"
    busRollUp.classList.add("show-current")
    currentBusBtn.classList.remove("show-current")
}

rollUptab.onclick = () => {
    navigation.style.display = "block"
    busRollUp.classList.remove("show-current")
    currentBusBtn.classList.add("show-current")
}
//----------------End-----------------------

// Set home button funtion to go back to home page when press
homeBtn.onclick = () => {
    location.reload();
}


//Sign in page
var isSignIn = false

favouritesBtn.onclick = () => {
    navigation.style.display = "none"
    overlay.classList.remove("show-menu")

    if (isSignIn){
        console.log("You're signed in")
    }
    else{
        singIn.classList.add("show-current")
    }
}

loginBtn.onclick = () => {
    var email = document.getElementById("emailIn").value
    var password = document.getElementById("pwIn").value
    
    //check that email and password field must be input if not send an alert
    if(email && password){
        console.log("show favoruite")
        isSignIn = true
        console.log(isSignIn)
    }
    else{
        alert("please enter Email or Password")
    }
}

singUpHere.onclick = () => {
    createAcc.classList.add("show-current")
    singIn.classList.remove("show-current")
}

singInExit.onclick = () => {
    singIn.classList.remove("show-current")
    navigation.style.display = "block"
}
//----------------End-----------------------

//Sign up page
signUpBtn.onclick = () => {
    var email = document.getElementById("emailAcc").value
    var firstName = document.getElementById("firstName").value
    var lastName = document.getElementById("lastName").value
    var pwAcc = document.getElementById("pwAcc").value
    var conPwAcc = document.getElementById("conPwAcc").value

    //check if all of the input field are filled and the password are matched or not or not if not send an alert
    if(email && firstName && lastName && pwAcc && conPwAcc){
        // check if password confirm match
        if(pwAcc == conPwAcc){
            isSignIn = true
            console.log("your'er signed in")
        }
        else{
            alert("Password doens't match")
        }
    }
    else{
        alert("Please fill up all of the field")
    }
}

signUpexit.onclick = () =>{
    createAcc.classList.remove("show-current")
    navigation.style.display = "block"
}
//----------------End-----------------------