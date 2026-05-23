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