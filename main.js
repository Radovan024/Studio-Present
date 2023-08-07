var i = 1;
var navLinks = document.getElementById("nav-links");
var navLink = document.querySelectorAll(".nav-link");
var arrow = document.getElementById("arrow");

document.getElementById("hamburger").addEventListener("click", function () {
  if (i % 2 != 0) {
    navLinks.style = "display: block !important";
    navLink.forEach(element => {
      element.style = "display: block";
    });
  } else {
    navLinks.sstyle = "display: none !important";
    navLink.forEach(element => {
      element.style = "display: none";
    });
  } i++;
});

document.addEventListener("click", function() {
  
})