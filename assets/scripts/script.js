const inputEl = document.querySelector('#toogle-btn');
const ulNavBarEl = document.querySelector('.navbar__list');
// const navBarJSlogo = document.querySelector('#navbar-JSlogo');
const navBarHeading = document.querySelector('.navbar__header');
const navBar = document.querySelector('.navbar');
const links = document.querySelectorAll('#links')

const mediaQueryMobile = window.matchMedia('(max-width: 425px)');
const mediaQueryDesktop = window.matchMedia('(min-width: 1023px)');

// Triggering open/close menu;
inputEl.addEventListener("click", () => {
  if(inputEl.checked) {
    navBar.classList.add('active');
    ulNavBarEl.classList.add('active');
    navBarHeading.classList.add('active');
  } else {
    navBar.classList.remove('active');
    ulNavBarEl.classList.remove('active');
    navBarHeading.classList.remove('active');
  }
})

links.forEach(links => {
  links.addEventListener("click", (e) => {
    navBar.classList.remove('active');
    ulNavBarEl.classList.remove('active');
    navBarHeading.classList.remove('active');
    inputEl.checked = false;
  })
})

mobileFeatureMenu(mediaQueryMobile);

function mobileFeatureMenu(media) {
  inputEl.addEventListener("click", () => {
    if(media.matches && inputEl.checked){
      navBar.classList.toggle('mobile-active');
    } else {
      navBar.classList.toggle('mobile-active');
    }
  })
}