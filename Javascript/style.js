// Controls sidemenu panels (accordions) to be displayed
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {

  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
  
}
// Controls the quantity of products selected by user
var Count = 0, j;

function funcOne(){
   Count-- < 1 ? Count = 0 : ''; 
   document.getElementById("number").innerHTML=Count;
}
function funcTwo(){
   Count++;               
   document.getElementById("number").innerHTML=Count;
}
