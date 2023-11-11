"use strict";
var footer = document.getElementById("footer");
var about = document.getElementById("about");
var close = document.getElementById("airtime-about-close");

about.addEventListener("click", function () {
  console.log("click");
  footer.classList.toggle("slide-up");
});

close.addEventListener("click", function () {
  footer.classList.remove("slide-up");
});
