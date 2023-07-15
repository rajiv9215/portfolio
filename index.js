const menubtn = document.querySelector('.menu-btn');
const header = document.querySelector('.header');
const toggleNavbar = () =>
 header.classList.toggle("active");

menubtn.addEventListener("click", () => toggleNavbar());