var i = 0;
var arrow_i = 1;
var navLinks = document.getElementById("nav-links");
var navLink = document.querySelectorAll(".nav-link");
var arrow = document.getElementById("arrow");
var hamburger = document.getElementById("hamburger");
var slider_image = document.querySelectorAll(".slider-image");

hamburger.addEventListener("click", function () {
  if (i % 2 == 0) {
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

arrow.addEventListener("click", function () {
  for (let i = 0; i < slider_image.length; i++) {
    if (arrow_i == i) {
      slider_image[i].classList.remove('hidden');
      arrow_i++; break;
    }else{
      slider_image[i].classList.add('hidden');
    }
    if (arrow_i == slider_image.length) {
      for (let v = 0; v < slider_image.length; v++) {
        slider_image[v].classList.add('hidden');
        slider_image[0].classList.remove('hidden');
      }
      arrow_i = 1; break;
    };
  }
})