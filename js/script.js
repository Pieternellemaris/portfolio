
let element = document.body;

function myFunction() {
    // console.log("button")
    element.classList.toggle("dark-mode");
}
function myFunction2() {
    // console.log("button")
    element.classList.toggle("dark-mode2");
}


let pageHome = window.location.pathname.endsWith('index.html');
let pageOpen = window.location.pathname.endsWith('/');


// console.log(window.location.pathname);
// console.log(pageOpen);

changeColor();
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', changeColor);


function changeColor() {
    let dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // console.log('change')
    if (dark) {
        // console.log('dark')
        if (pageHome==false && pageOpen==false) {
            // console.log('nothome')
        element.classList.add("dark-mode");
        element.classList.add("dark-mode2");
        } else if(pageHome || pageOpen) {
            // console.log('home')
        element.classList.add("dark-mode");
        }    
} else {
    // console.log('light')
        element.classList.remove("dark-mode");
        element.classList.remove("dark-mode2");
    }
}







