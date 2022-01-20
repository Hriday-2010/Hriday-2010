function openFunction() {
  document.getElementById("menu").style.width = "300px";
}
function closeFunction() {
  document.getElementById("menu").style.width = "0px";
  document.getElementById("mainbox").style.marginRight = "20px";
  document.getElementById("mainbox").innerHTML = " &#9776 ";
}
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
