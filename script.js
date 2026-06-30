"use strict";
console.log ("reading js");

const menuBtn = document.querySelector("#dropdown");
const closedBtn = document.querySelector("#closed-btn");
const sidebar = document.querySelector("#sidebar");

menuBtn.addEventListener("click", function(){
    sidebar.classList.add("open");
});

closedBtn.addEventListener("click", function(){
    sidebar.classList.remove("open");
});

document.querySelectorAll(".service-dropdown").forEach(button => {
    button.addEventListener("click", function(){
        const body = this.querySelector(".closed, .open")
        const arrow = this.querySelector('.service-dropdown-top img:last-child');

        body.classList.toggle("open");
        body.classList.toggle("closed");
        arrow.classList.toggle("open-arrow");
    })
})