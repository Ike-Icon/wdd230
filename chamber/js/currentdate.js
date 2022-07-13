document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;


const hamButton = document.querySelector('.ham');
const mainNav = document.querySelector('.navigation')

hamButton.addEventListener("click", () => {
  hamButton.classList.toggle("responsive")
  mainNav.classList.toggle("responsive")
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamButton.classList.remove("responsive");
  mainNav.classList.remove("responsive");
}))

// hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 660) mainNav.classList.remove('responsive')};
/*** Programming Notes **************************************
  Arrow Functions - es6 syntactically compact alternative to a regular function expression
  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  or https://www.w3schools.com/js/js_arrow_function.asp

  classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  */