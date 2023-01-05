const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('.nav');

const toggleDropdown = function () {
  navBtn.classList.toggle('active');
  nav.classList.toggle("show");
};

navBtn.addEventListener('click', function(e) {
  toggleDropdown();
});