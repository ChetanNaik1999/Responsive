console.log("This is my first responsive website");
let burger=document.querySelector(".burger");
let navbar=document.querySelector(".navbar");
let rightNav=document.querySelector(".rightNav");
let navlist=document.querySelector(".navlist");
burger.addEventListener("click",ToggleScreen);

function ToggleScreen(){
    navlist.classList.toggle("v-class");
    rightNav.classList.toggle("v-class");
    navbar.classList.toggle("h-nav")

}