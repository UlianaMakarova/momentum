import { Clock } from "./ClockSettings";
import { Quotes } from "./QuotesSettings";

export class Lang{
    constructor(langSetting = 'en-US'){
        this.languages = ['en-US','ru-RU'];
        this.langSetting = langSetting;
        this.container = document.querySelector('.lang');
    }

    change=()=>{
        this.container.textContent = this.languages.indexOf(this.container.textContent) === this.languages.length-1? this.languages[0]: this.languages[this.languages.indexOf(this.container.textContent) +1];
        this.langSetting = this.container.textContent;

     
        //city.value = cityDefaultList[langList.indexOf(langSetting)];

    }
    getCurrentLanguage=()=>{
        return this.langSetting
    }
}