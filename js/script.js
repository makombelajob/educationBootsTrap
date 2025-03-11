const open = document.querySelector("#open");
const burger = document.querySelector("#burger");
const closeBtn = document.querySelector("#close");

burger.addEventListener("click", function() {
    open.style.display = "block";
});

closeBtn.addEventListener("click", function() {
    open.style.display = "none";
});