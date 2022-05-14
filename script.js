//console.log("Halu, this works");
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

var opacity = 0;
var myInterval = 0;

function fadeIn() {
    myInterval = setInterval(show, 20);
}
function fadeOut() {
    myInterval = setInterval(hide, 20);
}

function show() {
    var img = document.getElementById("img1");
    opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity")); //fetch opacity
    if (opacity < 1) {
        opacity = opacity + 0.1;
        img.style.opacity = opacity;
    }
    else {
        clearInterval(myInterval);
    }
}
function hide() {
    var img = document.getElementById("img1");
    opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity")); //fetch opacity
    if (opacity > 0) {
        opacity = opacity - 0.1;
        img.style.opacity = opacity;
    }
    else {
        clearInterval(myInterval);
    }
}

function addThis() {

    document.getElementById("demo").innerHTML = "Great Job! Now let's see what else we can do...stay tuned.";
}