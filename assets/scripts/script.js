const inputEl = document.querySelector('#toogle-btn');
const ulNavBarEl = document.querySelector('.navbar__list');
const navBarJSlogo = document.querySelector('#navbar-JSlogo');
const navBarHeading = document.querySelector('.navbar__heading');
const navBar = document.querySelector('.navbar');

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