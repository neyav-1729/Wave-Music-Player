let nextEle = document.querySelector('.next');
let prevEle = document.querySelector('.prev');
let sliderEle = document.querySelector('.slider');
const audio = document.getElementById('audio');
let count=0;
let isPlaying = false; 
nextEle.addEventListener('click', function() {
  let slides = document.querySelectorAll('.slides');
  count++;
  
  audio.src= array[count % array.length];
  audio.pause();
   playPauseBtn.textContent = '▶️';
   isPlaying = !isPlaying;
  sliderEle.appendChild(slides[0]);
});

prevEle.addEventListener('click', function() {
  let slides = document.querySelectorAll('.slides');
   
  count--;
  if(count < 0){
    count = array.length + count;
  }
  audio.src= array[count % array.length];
  audio.pause();
  
  playPauseBtn.textContent = '▶️';
  isPlaying = !isPlaying;

  sliderEle.prepend(slides[slides.length-1]);
  
});


//play song

const  array=[
    
    'IMAGES/a-ishqMurshid.mp3',
    'IMAGES/a-naina.mp3',
    'IMAGES/a-perfect.mp3',
    'IMAGES/a-rockabye.mp3',
    'IMAGES/a-tum hi ho.mp3',
    'IMAGES/a-no lie.mp3',
    'IMAGES/a-afreen.mp3'
]



const playPauseBtn = document.getElementById('play-pause');
const forwardBtn = document.getElementById('forward');
const backwardBtn = document.getElementById('backward');

audio.src= array[count];


playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = '▶️';
    } else {
        audio.play();
        playPauseBtn.textContent = '⏸️';
    }
    isPlaying = !isPlaying;
});

forwardBtn.addEventListener('click', () => {
    audio.currentTime += 5;
});

backwardBtn.addEventListener('click', () => {
    audio.currentTime -= 5;
});
