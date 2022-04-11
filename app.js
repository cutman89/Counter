//Selectors
var num = document.querySelector(".number");
var decreased = document.querySelector(".decrease");
var increased = document.querySelector(".increase");
var reseted = document.querySelector(".reset");
//Events
decreased.addEventListener("click", decrease);
reseted.addEventListener("click", reset);
increased.addEventListener("click", increase);
//Function
function decrease() {
  console.log(num.innerHTML - 1);
  num.innerHTML = num.innerHTML - 1;
}

function reset() {
  console.log(0);
  num.innerHTML = 0;
}
function increase() {
  console.log(num.innerHTML + 1);
  var numb = num.innerHTML;
  numb++;
  num.innerHTML = numb;
}
