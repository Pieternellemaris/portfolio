
const img = document.getElementById('hover-box');
const fullPage = document.querySelector('#fullpage');
img.addEventListener('click', function() {

  fullPage.style.backgroundImage = 'url(./images/leeds/fullscreen-expo2.jpg)';
  fullPage.style.display = 'block';
});


const objects = document.querySelectorAll('.dummy');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);
        // if(entry.isIntersecting) {
        //     observer.unobserve(entry.target);
        // }
    });
}, {
    
    threshold : .2,
});

objects.forEach(object => {
    observer.observe(object)
});

var path = document.querySelector('.path');
var length = path.getTotalLength();
// console.log(length);

window.addEventListener("scroll",function(){
    var offset = this.window.scrollY;
    path.style.strokeDashoffset = length - offset - 200;
    // console.log(path.style.strokeDashoffset);
    if (    path.style.strokeDashoffset < 1400) {
      path.style.strokeDashoffset = length - offset - 750;
    }
});

    window.onload = () => {
        const newPage = document.getElementById('link-page')
        const transition_el = document.querySelector('.transition');
      
          newPage.addEventListener('click', event => {
            event.preventDefault();
            let target = newPage.getAttribute('href');
            // console.log(target);
    
            transition_el.classList.add('is-active');
      
            setInterval(() => {
              window.location.href = target;
            }, 1000);
          })
        }
    

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function backUp() {
  console.log('hi');
  document.documentElement.scrollTop = 0;
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}