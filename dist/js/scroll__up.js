window.addEventListener("scroll", function () {
  var scroll = document.querySelector(".upward");
  scroll.classList.toggle("active", this.window.scrollY > 500);
});
function scrollTopTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", function () {
  var scroll = document.querySelector(".vidgets");
  scroll.classList.toggle("active", this.window.scrollY > 700);
});
function scrollTopTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
