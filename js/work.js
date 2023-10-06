

// Get the button that opens the modal
const works = document.querySelectorAll(".work-item")
works.forEach(function(work){

    work.addEventListener('click', toggleText);
});

// Get the <span> element that closes the modal


// When the user clicks the button, open the modal 
function toggleText() {

    var name = this.classList[2];

    var modal = document.getElementById('work-modal').getElementsByClassName(`${name}`)[0];
    console.log(modal);
    modal.style.display= "block";


    var span = modal.getElementsByClassName("close")[0];

    span.addEventListener('click', function() {
        modal.style.display = "none";

        var iframe = document.getElementsByTagName("iframe");

        for (let i = 0; i < iframe.length; i++) {
          iframe[i].src = iframe[i].src;
        }
      })

    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
          var iframe = document.getElementsByTagName("iframe");

          for (let i = 0; i < iframe.length; i++) {
            iframe[i].src = iframe[i].src;
          }
        }
      }
    
      var slideIndex = 1;
      showDivs(slideIndex);
      
      const slides = modal.querySelectorAll('button');
      // console.log(slides);
      slides.forEach(function(slide){
        slide.addEventListener('click', function() {
          if(slide.classList.contains("next")){
           showDivs(slideIndex += 1);
          } else if (slide.classList.contains("prev")) {
            showDivs(slideIndex += -1);
          }

        })
      })
      
      function showDivs(n) {
        var i;
        var x = modal.getElementsByClassName("mySlides");
        // console.log(x);
        if (n > x.length) {slideIndex = 1}
        if (n < 1) {slideIndex = x.length}
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        }
        x[slideIndex-1].style.display = "block";  
      }
    }


