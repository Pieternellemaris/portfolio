let element = document.body;
let pageHome = window.location.pathname.endsWith('index.html');
let pageOpen = window.location.pathname.endsWith('/');

changeColor();
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', changeColor);

function myFunction() {
    element.classList.toggle("dark-mode");
}
function myFunction2() {
    element.classList.toggle("dark-mode2");
}
function changeColor() {
    let dark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (dark) {
        if (pageHome == false && pageOpen == false) {
            element.classList.add("dark-mode");
            element.classList.add("dark-mode2");
        } else if (pageHome || pageOpen) {
            element.classList.add("dark-mode");
        }
    } else {
        element.classList.remove("dark-mode");
        element.classList.remove("dark-mode2");
    }
}

const nav = document.querySelectorAll(".nav a");
console.log(nav);
for (var i = 0; i < nav.length; i++) {
nav[i].addEventListener("click", function(event){
    for (var i = 0; i < nav.length; i++) {
        nav[i].classList.remove('active');
      }
    this.classList.add('active');
})
}


const img = document.getElementById('hover-box');
const fullPage = document.querySelector('#fullpage');
img.addEventListener('click', function() {

  fullPage.style.backgroundImage = 'url(../images/fullscreen-expo2.jpg)';
  fullPage.style.display = 'block';
});

