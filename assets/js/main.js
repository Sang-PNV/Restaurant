document.getElementById("switchBtn").onclick = function () {
  document.getElementsByClassName("popular")[0].classList.toggle("dark");
  document.getElementsByClassName("aboutUs")[0].classList.toggle("dark");
  document.getElementsByClassName("header")[0].classList.toggle("dark");
  document.getElementsByClassName("footer")[0].classList.toggle("dark");
  document.getElementById("testimonials").classList.toggle("dark");

  document.getElementById("switchBtn").classList.toggle("dark");
  document.getElementById("Menu").classList.toggle("dark");
  document.getElementById("Quantity").classList.toggle("dark");
  document.getElementById("Blog").classList.toggle("dark");
};
