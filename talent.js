
var button = document.querySelectorAll("button");
button.forEach(function(button){
button.addEventListener("click", function() {
  button.classList.toggle("yay");
});
})