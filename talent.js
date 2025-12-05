
//  Select de button
var button = document.querySelectorAll("button");
// Voor elke button in het bestand 
button.forEach(function(button){
// Event toegevoegd en toggle
button.addEventListener("click", function() {
  button.classList.toggle("yay");
});
})