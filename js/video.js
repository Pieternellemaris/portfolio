
// code gebaseerd op instructies van mozilla: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs#implementing_the_javascript 


// const play = document.querySelector('.play');
const media = document.querySelector("iframe");
const controls = document.querySelector(".controls");



let buttons = document.querySelectorAll('.video-list-container button')
let currentSrc = 0;

for (let i = 0; i < buttons.length; i++) {
  let btn = buttons[i];

  if (window.location.hash) {
  let btnId = document.querySelector(`${window.location.hash}`);

  let gaming = document.querySelector('.video-list-container .active')
  gaming.classList.remove('active');

  btnId.classList.add('active');

  let vidId = btnId.dataset.src;
  document.querySelector('.main-video-container .main-video').src = vidId;
  // document.querySelector('.main-video-container .main-video').play();
  // play.classList.add('paused'); 
  }

  if (btn.classList.contains('active')) {
    currentSrc=i;
} 


  btn.onclick = function () {
    history.pushState("", "", `${location.pathname}${location.search}`); //https://www.webmound.com/remove-url-hash-using-javascript/
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove('active');
    }
    currentSrc = i;
    btn.classList.add('active');
    let vid = btn.dataset.src;
    document.querySelector('.main-video-container .main-video').src = vid;
    document.querySelector('.main-video-container .main-video');
    // play.classList.add('paused');
  }
}
const fwd = document.querySelector(".fwd");
fwd.addEventListener("click", mediaForward);

function mediaForward() {
  currentSrc++;
  if (currentSrc >= buttons.length) {
    currentSrc = 0;
  }
  buttons[currentSrc].click()

  // if (play.classList.contains('paused')) {
  //   media.play();
  // } else {
  //   media.pause();
  // }
}
function toggleText() {
    var name = this.classList[1];
    // console.log(name);
    var text = document.getElementById('work-info').getElementsByClassName(`${name}`)[0];
    var work = document.getElementById('work-info').querySelectorAll('.info');
    
      if (text.style.display === "none") {
    
        for (let i = 0; i < work.length; i++) {
        work[i].style.display= "none";}
    
        text.style.display = "block";
      } else {
        for (let i = 0; i < work.length; i++) {
        work[i].style.display= 'none';}
      }}
    
var btnLinks = document.querySelectorAll('.video-list-container button');
btnLinks.forEach(function(btn){
       btn.addEventListener('click', toggleText);
});


    var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("myStoryboard");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
// verwijderde video player //

// const playButton = document.querySelector('.btn');
// const timerWrapper = document.querySelector(".timer");
// const timer = document.querySelector(".timer span");
// const timerBar = document.querySelector(".timer div");
// const total = document.querySelector(".total");

// playButton.addEventListener("click", playPauseMedia);
// media.addEventListener("timeupdate", setTime);




// function setTime() {
//   const minutes = Math.floor(media.currentTime / 60);
//   const seconds = Math.floor(media.currentTime - minutes * 60);
//   const minuteValue = minutes.toString().padStart(2, "0");
//   const secondValue = seconds.toString().padStart(2, "0");

//   const mediaTime = `${minuteValue}:${secondValue}`;
//   timer.textContent = mediaTime;


//   const minutes2 = Math.floor(media.duration / 60);
//   const seconds2 = Math.floor(media.duration - minutes2 * 60);
//   const minuteValue2 = minutes2.toString().padStart(2, "0");
//   const secondValue2 = seconds2.toString().padStart(2, "0");

//   const vid = `${minuteValue2}:${secondValue2}`;
//   total.textContent = '/ ' + vid;


//   const barLength = timerWrapper.clientWidth * (media.currentTime / media.duration);
//   timerBar.style.width = `${barLength}px`;
// }

// document.addEventListener('keydown', (event) => {
//   const keyName = event.key;
//   event.preventDefault();
//   if (keyName === " ") {
//     playPauseMedia();
//   }
// }) 
// function playPauseMedia() { 

//   if (play.classList.contains('paused')) { 
//     play.classList.remove('paused'); 
//   } else {
//     play.classList.add('paused');
//   }
//   if (media.paused) {
//     play.setAttribute("data-icon", "u");
//     media.play();
//   } else {
//     play.setAttribute("data-icon", "P");
//     media.pause();
//   }
// }

// media.addEventListener("ended", stopMedia);


// function stopMedia() {

//   media.pause();
//   media.currentTime = 0;
//   play.setAttribute("data-icon", "P");
//   if (play.classList.contains('paused')) {
//     play.classList.remove('paused'); 
//   }
// }