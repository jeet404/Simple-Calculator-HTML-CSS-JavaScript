//function for displaying values
function dis(val) {
  document.getElementById("num").value += val;
}
//function for evaluation
function solve() {
  let x = document.getElementById("num").value;
  let y = eval(x);
  document.getElementById("num").value = y;
}
//function for clearing the display
function clr() {
  document.getElementById("num").value = "";
}
