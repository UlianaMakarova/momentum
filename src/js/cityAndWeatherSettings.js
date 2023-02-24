let cityDefaultList = ['Minsk','Минск'];
let citySetting = cityDefaultList[0];
const weatherIcon = document.querySelector('.weather-icon');
const weatherDescription = document.querySelector('.weather-description');
const temperature = document.querySelector('.temperature');
export class Weather{
  constructor(langSetting='en-US', city='Minsk'){
    this.langSetting = langSetting;
    this.city = city;
    this.cityContainer = document.querySelector('.city');
    this.getWeather();
  }
  setCity=(event)=> {
    if (event.code === 'Enter') {
      this.getWeather();
      this.cityContainer.blur();
    }
  }
  async getWeather(){  
    console.log('weather:'+this.cityContainer.value);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityContainer.value}&lang=${this.langSetting.split('-')[0]}&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    console.log(data)
    if (data.cod !== 200){
        this.cityContainer.value = '';
        weatherIcon.className = '';
        temperature.textContent = 'Type correct city name, please';
        weatherDescription.textContent  = '';

    }
    else{  
        this.cityContainer.value = data.name;
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${data.main.temp}°C`;
        weatherDescription.textContent = data.weather[0].description;
    }

  }
}











  