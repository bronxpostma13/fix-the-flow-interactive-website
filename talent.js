
//  Select de button
var button = document.querySelectorAll(".heart");
// Voor elke button in het bestand met de class heart
button.forEach(function(button){
// Event toegevoegd en toggle
button.addEventListener("click", function() {
  button.classList.toggle("yay");
});
})


//  Select de buttons
var hamburgerOpen = document.querySelector(".menu-toggle");
var hamburgerClose = document.querySelector(".close-btn");
var navBox = document.querySelector("#mobile-nav-box");

hamburgerOpen.addEventListener("click", function() {
  navBox.classList.add("open");
});

hamburgerClose.addEventListener("click", function() {
  navBox.classList.remove("open");
});