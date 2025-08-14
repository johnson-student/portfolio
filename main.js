const contactBtns = document.querySelectorAll(".contact-btn");
const contactForm = document.querySelector(".form");
const darkmode = document.querySelector("#darkmode-icon");
const navBar = document.querySelector(".navbar");
const icon = document.querySelector("i");
const manuIcon = document.querySelector("#menu-icon");
const navLink = document.querySelector(".nav-link");
const body = document.querySelector("body");

body.addEventListener("click",function(e){
    contactForm.classList.remove("active");
    navLink.classList.remove("active");
})
contactBtns.forEach(btn => {
    btn.addEventListener("click",function (e){
        contactForm.classList.toggle("active");
        navLink.classList.remove("active");
        e.stopPropagation()
    })
});
contactForm.addEventListener("click", function(e) {
    e.stopPropagation();
});
manuIcon.addEventListener("click",(e) =>{
    navLink.classList.toggle("active");
    e.stopPropagation();
    contactForm.classList.remove("active");
})
navLink.addEventListener("click",(e)=>{
    e.stopPropagation();
})
function darkAndLightMode(e = "toggle") {
    if (e === "toggle") {
        document.body.classList.toggle("darkmode");
    } else if (e === "dark") {
        document.body.classList.add("darkmode");
    } else if (e === "light") {
        document.body.classList.remove("darkmode");
    }

    if (document.body.classList.contains("darkmode")) {
        navBar.style.backgroundColor = "#27292cff";
        navBar.style.boxShadow = "0px 5px 50px white";
        icon.style.color = "white";
        localStorage.setItem("theme", "dark");
    } else {
        navBar.style.backgroundColor = "#fff";
        navBar.style.boxShadow = "0px 5px 100px rgba(0,0,0,0.2)";
        icon.style.color = "black";
        localStorage.setItem("theme", "light");
    }
}

// Toggle when clicking icon
darkmode.addEventListener("click", () => darkAndLightMode("toggle"));

// Set mode on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    darkAndLightMode(savedTheme);
});
