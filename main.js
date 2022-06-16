let menuSpan = document.getElementById("menu-span");
let myOverlay = document.getElementById("overlay");
let myAbout = document.getElementById("aboutUs");
let myFace = document.getElementById("face");
let myGithub = document.getElementById("github");
let myInsta = document.getElementById("insta");
let myPinterest = document.getElementById("piterest");

// menuSpan.onclick = function() {
//     myOverlay.style.display = "block";
// }

menuSpan.onclick = function() {

    if (myOverlay.style.display == "none") {
        myOverlay.style.display = "block";
    } else {
        myOverlay.style.display = "none";
    }

}

myAbout.onclick = function () {
    window.location = "about.html";
}

myFace.onclick = function () {
    window.location = "https://www.facebook.com/hrshopi/?ref=pages_you_manage"
}

myGithub.onclick = function () {
    window.location = "https://github.com/HaythamRadwan";
}

myInsta.onclick = function () {
    window.location = "https://www.instagram.com/yourshopinst/";
}

myPinterest.onclick = function () {
    window.location = "est.com/hrshopi/_created/";
}
