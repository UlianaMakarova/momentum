import { Lang } from './Language'
import { Clock } from './ClockSettings';
import { Weather } from './cityAndWeatherSettings';
import { Quotes } from './QuotesSettings';
import { getLocalStorage } from './localStorage';
import { getRandomNum, Background } from './Background';
import './player';


const reload = document.querySelector('.change-quote');


window.onload = function(){
  const language = new Lang();
  getLocalStorage();
  
  const clock = new Clock(language.langSetting, 1000);
  const background = new Background(clock.currentPartOfDay);
  const quote = new Quotes(language.langSetting, getRandomNum(0, 2,'quote'));
  const weather = new Weather(language.langSetting);

  const settings = document.querySelector('.settings-icon')
  settings.addEventListener('click',()=>{
    settings.classList.toggle('rotation');
  })

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
  document.querySelector('.slide-next').addEventListener('click', ()=>{
    background.getSlideNext();
  });
  document.querySelector('.slide-prev').addEventListener('click', ()=>{
    background.getSlidePrev();
  }); 
  document.addEventListener('DOMContentLoaded', ()=>{
    weather.getWeather();
   });
  weather.cityContainer.addEventListener('keypress', (event)=>{
        weather.setCity(event);
        });
}