window.onscroll = function () {
  stickHeader();
};

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

const header = document.querySelector('header');
const sticky = header.offsetTop;

function stickHeader() {
  if (window.scrollY > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}
