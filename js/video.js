const play = document.querySelector('.play');
const playButton = document.querySelector('.btn');
const media = document.querySelector("video");
const controls = document.querySelector(".controls");
const fwd = document.querySelector(".fwd");
const timerWrapper = document.querySelector(".timer");
const timer = document.querySelector(".timer span");
const timerBar = document.querySelector(".timer div");
const total = document.querySelector(".total");

playButton.addEventListener("click", playPauseMedia);
media.addEventListener("ended", stopMedia);

media.addEventListener("timeupdate", setTime);

let intervalFwd;

function playPauseMedia() {

    if (play.classList.contains('paused')) { // als de div de class 'active' heeft
    play.classList.remove('paused'); // haal de class active dan weg
  } else {
    play.classList.add('paused');
  }
    if (media.paused) {
      play.setAttribute("data-icon", "u");
      media.play();
    } else {
      play.setAttribute("data-icon", "P");
      media.pause();
    }
  }

document.addEventListener('keydown',   (event) => {
  const keyName = event.key;
  event.preventDefault();
  if (keyName === " ") {
    playPauseMedia();
  }
})

  
function setTime() {
    const minutes = Math.floor(media.currentTime / 60);
    const seconds = Math.floor(media.currentTime - minutes * 60);
  
    const minuteValue = minutes.toString().padStart(2, "0");
    const secondValue = seconds.toString().padStart(2, "0");
  
    const mediaTime = `${minuteValue}:${secondValue}`;
    timer.textContent = mediaTime;


    const minutes2 = Math.floor(media.duration / 60);
    const seconds2 = Math.floor(media.duration - minutes2 * 60);

  
    const minuteValue2 = minutes2.toString().padStart(2, "0");
    const secondValue2 = seconds2.toString().padStart(2, "0");

    const vid = `${minuteValue2}:${secondValue2}`;
    total.textContent = '/ ' + vid;


    const barLength =
      timerWrapper.clientWidth * (media.currentTime / media.duration);
    timerBar.style.width = `${barLength}px`;
  }

function stopMedia() {
  
  media.pause();
  media.currentTime = 0;
  play.setAttribute("data-icon", "P");
    if (play.classList.contains('paused')) { // als de div de class 'active' heeft
        play.classList.remove('paused'); // haal de class active dan weg
    }
}

let buttons = document.querySelectorAll('.video-list-container button')
// console.log(buttons);
let currentSrc = 0;

for (let i = 0; i < buttons.length; i++) {
let btn= buttons[i];

  btn.onclick= function(){
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove('active');

    }

    currentSrc= i;
    // console.log(currentSrc);
    // console.log(buttons);
    btn.classList.add('active');
    let vid= btn.dataset.src;
    document.querySelector('.main-video-container .main-video').src = vid;
    document.querySelector('.main-video-container .main-video').play();
    play.classList.add('paused'); 
  }
}

fwd.addEventListener("click", mediaForward);
  
function mediaForward() {
  // console.log('geklikt');

  currentSrc++;
  // console.log(currentSrc);
  if (currentSrc>=buttons.length) {
    currentSrc=0;
  }
  buttons[currentSrc].click()
  
    if (play.classList.contains('paused')) {
    media.play();
    } else  {
      media.pause();
    }
  }

  // console.log(window.location.hash);

  let btnId= document.querySelector(`${window.location.hash}`);
  // console.log(btnId);
  btnId.classList.add('active');
  let vidId= btnId.dataset.src;
  // console.log(vidId);
  document.querySelector('.main-video-container .main-video').src = vidId;
  document.querySelector('.main-video-container .main-video').play();
  play.classList.add('paused'); 