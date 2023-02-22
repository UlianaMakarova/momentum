
export class Clock{
    constructor(langSetting = 'en-US', timer){
        this.langSetting = langSetting;  
        this.currentPartOfDay = '';
        this.timer = timer;
        this.currentTime = '';
        this.currentDate = '';

        this.showTime();  

          
    }
    setTimer=()=>{
        setTimeout(this.showTime, this.timer);
    }
    getCurrentData=()=>{
        const options = {weekday: 'long', month: 'long', day: 'numeric'};
        const date = new Date();
        this.currentTime = date.toLocaleTimeString();
        this.currentDate = date.toLocaleDateString(this.langSetting, options);

    }
    showTime=()=>{
      
        const time_block = document.querySelector('.time');
        const date_block = document.querySelector('.date'); 
        this.getCurrentData();       
        time_block.innerHTML = this.currentTime;
        date_block.innerHTML = this.currentDate;
        this.setTimer();
        
        const greeting_block = document.querySelector('.greeting');
        this.currentPartOfDay = this.showGreeting();
        greeting_block.textContent=this.currentPartOfDay;
    }

    getTimeOfDay=()=>{
        const dayParts = {
        'en-US':['morning', 'afternoon', 'evening','night'],
        'ru-RU':['утро','день','вечер','ночь']
        };
        const date = new Date();
        const hours = date.getHours();
        return dayParts[this.langSetting][Math.floor(hours/6)-1];
    };

     showGreeting=()=>{
        const greetingContainer = {
            'en-US': 'Good',
            'ru-RU': 'Добрый'
          };

        return this.getTimeOfDay()==='утро'? 'Доброе утро': `${greetingContainer[this.langSetting]} ${this.getTimeOfDay()}`;
      
  };
}