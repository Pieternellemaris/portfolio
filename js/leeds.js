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
console.log(length);

window.addEventListener("scroll",function(){
    var offset = this.window.scrollY;
    path.style.strokeDashoffset = length - offset - 200;
    console.log(path.style.strokeDashoffset);
});

    window.onload = () => {
        const newPage = document.getElementById('link-page')
        const transition_el = document.querySelector('.transition');
      
          newPage.addEventListener('click', event => {
            event.preventDefault();
            let target = newPage.getAttribute('href');
            console.log(target);
    
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