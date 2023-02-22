import playList from './PlayList';

let isPlay = false;
let playNum = 0;

const playerBtn = document.querySelector('.play');
const playNextBtn = document.querySelector('.play-next');
const playPrevBtn = document.querySelector('.play-prev');
const playListContainer = document.querySelector('.play-list')
const audio = new Audio();


function toggleBtn() {
  (isPlay)? pauseAudio(): playAudio();
  playerBtn.classList.toggle('pause');  
}
playerBtn.addEventListener('click', toggleBtn);

function playAudio() {
  isPlay = true;
  audio.src = playList[playNum].src;
  playList.forEach((el,index) => {
    playListContainer.children[index].classList.remove('item-active');
  })
  playListContainer.children[playNum].classList.add('item-active');
  audio.currentTime = 0;   
  audio.play();
}
audio.addEventListener("ended", playNext);
function pauseAudio() {
  audio.pause();
  isPlay = false;
}

playList.forEach(el => {
  const li = document.createElement('li');
  li.classList.add('play-item');
  li.textContent = el.title;
  playListContainer.append(li);
})

function playNext(){
  playNum = playNum === playList.length -1 ? 0: playNum + 1;
  playAudio();
}
playNextBtn.addEventListener('click',playNext);

function playPrev(){
  playNum = playNum === 0 ? playList.length-1: playNum -1;
  playAudio();
}
playPrevBtn.addEventListener('click',playPrev);
