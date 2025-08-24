function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth"});
  document.querySelector("#header .menu").classList.remove("active");
}

function toggleMenu() {
  document.querySelector("#header .menu").classList.toggle("active");
}