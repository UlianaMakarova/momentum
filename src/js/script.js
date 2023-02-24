import { Lang } from './Language'
import { Clock } from './ClockSettings';
import { Weather } from './cityAndWeatherSettings';
import { Quotes } from './QuotesSettings';
import { getLocalStorage } from './localStorage';
import './player';

let randomNum = 0;
const reload = document.querySelector('.change-quote');


window.onload = function(){
  const language = new Lang();
  getLocalStorage();
  const clock = new Clock(language.langSetting,1000);
  const quote = new Quotes(language.langSetting, getRandomNum(0, 2,'quote'));
  const weather = new Weather(language.langSetting);

  language.container.addEventListener('click', (event)=>{
      language.change(); 
      clock.langSetting = language.langSetting;  
      quote.langSetting = language.langSetting;   
      quote.getQuotes();
      weather.langSetting = language.langSetting;
      weather.getWeather();
    }
  )
  reload.addEventListener('click', ( (event) => {
    new Quotes(language.langSetting, getRandomNum(0, 2,'quote'));
  }));
 
 // weather.getLocalStorage();
  setBackgroundImage(clock.currentPartOfDay);
  document.querySelector('.slide-next').addEventListener('click', getSlideNext);
  document.querySelector('.slide-prev').addEventListener('click', getSlidePrev); 
  document.addEventListener('DOMContentLoaded', ()=>{
        weather.getWeather();
        });
  weather.cityContainer.addEventListener('keypress', (event)=>{
        weather.setCity(event);
        });
}


const getRandomNum=(min, max, mode)=>{
  min = Math.ceil(min);
  max = Math.floor(max);
  if (mode === 'slider')
    randomNum = (Math.floor(Math.random() * (max - min + 1)) + min);
  else
    return (Math.floor(Math.random() * (max - min + 1)) + min);
  
}


const setBackgroundImage=(timeOfDay)=>{
  //const timeOfDay = getTimeOfDay(langSetting);
  console.log(timeOfDay);
  if (randomNum === 0)
    getRandomNum(1,20,'slider');
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay.split(' ')[1]}/${randomNum.toString().padStart(2,'0')}.jpg`

  img.onload = () => {   
    const body = document.querySelector('body');
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