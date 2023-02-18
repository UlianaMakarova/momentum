import playList from './PlayList';
console.log(playList);

let randomNum = 0;
let isPlay = false;
let playNum = 0;
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const reload = document.querySelector('.change-quote');

const playerBtn = document.querySelector('.play');
const playNextBtn = document.querySelector('.play-next');
const playPrevBtn = document.querySelector('.play-prev');
const playListContainer = document.querySelector('.play-list')
const audio = new Audio();

window.onload = function(){
    showTime();
    getLocalStorage();
    setBackgroundImage();
    document.querySelector('.slide-next').addEventListener('click', getSlideNext);
    document.querySelector('.slide-prev').addEventListener('click', getSlidePrev);    
    playerBtn.addEventListener('click', toggleBtn);
}

function toggleBtn() {
  console.log('press');
  (isPlay)? pauseAudio(): playAudio();
  playerBtn.classList.toggle('pause');
  
}

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

async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 

  console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
}
const getRandomNum=(min, max, mode)=>{

  min = Math.ceil(min);
  max = Math.floor(max);
  if (mode === 'slider')
    randomNum = (Math.floor(Math.random() * (max - min + 1)) + min);
  else
    return (Math.floor(Math.random() * (max - min + 1)) + min);
  
}

async function getQuotes() {  
  const quotes = 'http://localhost:5500/src/assets/data.json';//'https://github.com/UlianaMakarova/momentum/blob/main/data.json';
  const res = await fetch(quotes);
  const data = await res.json(); 
  const numRandom = getRandomNum(0, 2,'quote');
  quote.textContent = data[numRandom].text;
  author.textContent = data[numRandom].author;
  
}
reload.addEventListener('click', getQuotes);

getQuotes();
function setCity(event) {
  if (event.code === 'Enter') {
    getWeather();
    city.blur();
  }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);


const getTimeOfDay=()=>{
  const dayParts = ['morning', 'afternoon', 'evening','night'];
  const date = new Date();
  const hours = date.getHours();
  return dayParts[Math.floor(hours/6)-1];
};

const setBackgroundImage=()=>{
  const timeOfDay = getTimeOfDay();
  console.log(randomNum)
  if (randomNum === 0)
    getRandomNum(1,20,'slider');
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${randomNum.toString().padStart(2,'0')}.jpg`
  console.log(img.src);
  img.onload = () => {   
    const body = document.querySelector('body');
    console.log('load!')
    body.style.backgroundImage = `url('${img.src}')`;   
    }
  }

const getSlideNext=()=>{
  randomNum = randomNum === 20 ? 1 : randomNum + 1;
  setBackgroundImage();
}

const getSlidePrev=()=>{
  randomNum = randomNum === 1 ? 20 : randomNum - 1;
  setBackgroundImage();
}

function setLocalStorage() {
    const name = document.querySelector('.name');
    localStorage.setItem('name', name.value);
  };
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if(localStorage.getItem('name')) {
      const name = document.querySelector('.name');
      name.value = localStorage.getItem('name');
    }
  };
window.addEventListener('onload', getLocalStorage);

const showTime=()=>{
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    const time_block = document.querySelector('.time');
    const date_block = document.querySelector('.date');
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    const currentDate= date.toLocaleDateString('en-US', options);
    time_block.innerHTML = currentTime;
    date_block.innerHTML = currentDate;

    setTimeout(showTime, 1000);
    const greeting_block = document.querySelector('.greeting');
    greeting_block.textContent=showGreeting();
}


const showGreeting=()=>{
    return `Good ${getTimeOfDay()}`;
};
