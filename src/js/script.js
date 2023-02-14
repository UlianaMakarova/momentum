let randomNum = 0;
window.onload = function(){
    showTime();
    getLocalStorage();
    setBackgroundImage();
    document.querySelector('.slide-next').addEventListener('click', getSlideNext);
    document.querySelector('.slide-prev').addEventListener('click', getSlidePrev);
}

const getRandomNum=(min, max)=>{
  min = Math.ceil(min);
  max = Math.floor(max);
  randomNum = (Math.floor(Math.random() * (max - min + 1)) + min);
  return
}
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
    getRandomNum(1,20);
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
