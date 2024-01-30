const inputEl = document.querySelector('#toogle-btn');
const ulNavBarEl = document.querySelector('.navbar__list');
const navBarJSlogo = document.querySelector('#navbar-JSlogo');
const navBarHeading = document.querySelector('.navbar__header');
const navBar = document.querySelector('.navbar');
const links = document.querySelectorAll('#links')
const hamburberInput = document.querySelector('#hamburger-input')
console.log(hamburberInput)

hamburberInput.addEventListener("click", () => {
  if(hamburberInput.checked) {
    navBar.classList.toggle('mobile-active');
  } else {
    navBar.classList.toggle('mobile-active');
  }
})

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
  })
})

