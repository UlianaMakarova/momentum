(()=>{"use strict";(()=>{function t(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class e{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en-US";t(this,"change",(()=>{this.container.textContent=this.languages.indexOf(this.container.textContent)===this.languages.length-1?this.languages[0]:this.languages[this.languages.indexOf(this.container.textContent)+1],this.langSetting=this.container.textContent})),t(this,"getCurrentLanguage",(()=>this.langSetting)),this.languages=["en-US","ru-RU"],this.langSetting=e,this.container=document.querySelector(".lang")}}function n(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class i{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en-US",e=arguments.length>1?arguments[1]:void 0;n(this,"setTimer",(()=>{setTimeout(this.showTime,this.timer)})),n(this,"getCurrentData",(()=>{const t=new Date;this.currentTime=t.toLocaleTimeString(),this.currentDate=t.toLocaleDateString(this.langSetting,{weekday:"long",month:"long",day:"numeric"})})),n(this,"showTime",(()=>{const t=document.querySelector(".time"),e=document.querySelector(".date");this.getCurrentData(),t.innerHTML=this.currentTime,e.innerHTML=this.currentDate,this.setTimer();const n=document.querySelector(".greeting");this.currentPartOfDay=this.showGreeting(),n.textContent=this.currentPartOfDay})),n(this,"getTimeOfDay",(()=>{const t=(new Date).getHours();return{"en-US":["morning","afternoon","evening","night"],"ru-RU":["утро","день","вечер","ночь"]}[this.langSetting][Math.floor(t/6)-1]})),n(this,"showGreeting",(()=>"утро"===this.getTimeOfDay()?"Доброе утро":`${{"en-US":"Good","ru-RU":"Добрый"}[this.langSetting]} ${this.getTimeOfDay()}`)),this.langSetting=t,this.currentPartOfDay="",this.timer=e,this.currentTime="",this.currentDate="",this.showTime()}}const r=document.querySelector(".weather-icon"),o=document.querySelector(".weather-description"),a=document.querySelector(".temperature");class s{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en-US",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Minsk";var n,i,r;n=this,r=t=>{"Enter"===t.code&&(this.getWeather(),this.cityContainer.blur())},(i=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(i="setCity"))in n?Object.defineProperty(n,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[i]=r,this.langSetting=t,this.city=e,this.cityContainer=document.querySelector(".city"),this.getWeather()}async getWeather(){const t=`https://api.openweathermap.org/data/2.5/weather?q=${this.cityContainer.value}&lang=${this.langSetting.split("-")[0]}&appid=08f2a575dda978b9c539199e54df03b0&units=metric`,e=await fetch(t),n=await e.json();200!==n.cod?(this.cityContainer.value="",r.className="",a.textContent="Type correct city name, please",o.textContent=""):(this.cityContainer.value=n.name,r.className="weather-icon owf",r.classList.add(`owf-${n.weather[0].id}`),a.textContent=`${n.main.temp}°C`,o.textContent=n.weather[0].description)}}class c{constructor(t,e){this.langSetting=t,this.number=e,this.quote=document.querySelector(".quote"),this.author=document.querySelector(".author"),this.getQuotes()}async getQuotes(){const t=await fetch("src/assets/data.json"),e=await t.json();this.quote.textContent=e[this.number][this.langSetting].text,this.author.textContent=e[this.number][this.langSetting].author}}const u=document.querySelector(".city"),l=document.querySelector(".name");function g(){localStorage.getItem("name")&&(l.value=localStorage.getItem("name")),localStorage.getItem("city")&&(u.value=localStorage.getItem("city"))}function h(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}window.addEventListener("beforeunload",(()=>{localStorage.setItem("city",u.value),localStorage.setItem("name",l.value)})),window.addEventListener("onload",g);const m=(t,e,n)=>(t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t);class d{constructor(t){h(this,"setBackgroundImage",(()=>{0===this.randomNum&&(this.randomNum=m(1,20));const t=new Image;t.src=`https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${this.timeOfDay.split(" ")[1]}/${this.randomNum.toString().padStart(2,"0")}.jpg`,t.onload=()=>{document.querySelector("body").style.backgroundImage=`url('${t.src}')`}})),h(this,"getSlideNext",(()=>{this.randomNum=20===this.randomNum?1:this.randomNum+1,this.setBackgroundImage()})),h(this,"getSlidePrev",(()=>{this.randomNum=1===this.randomNum?20:this.randomNum-1,this.setBackgroundImage()})),this.timeOfDay=t,this.randomNum=0,this.setBackgroundImage()}}const y=[{title:"Aqua Caelestis",src:"src/assets/sounds/Aqua Caelestis.mp3",duration:"00:58"},{title:"River Flows In You",src:"src/assets/sounds/River Flows In You.mp3",duration:"03:50"},{title:"Ennio Morricone",src:"src/assets/sounds/Ennio Morricone.mp3",duration:"01:37"}];let S=!1,f=0;const v=document.querySelector(".play"),p=document.querySelector(".play-next"),w=document.querySelector(".play-prev"),b=document.querySelector(".play-list"),q=new Audio;function C(){S=!0,q.src=y[f].src,y.forEach(((t,e)=>{b.children[e].classList.remove("item-active")})),b.children[f].classList.add("item-active"),q.currentTime=0,q.play()}function L(){f=f===y.length-1?0:f+1,C()}v.addEventListener("click",(function(){S?(q.pause(),S=!1):C(),v.classList.toggle("pause")})),q.addEventListener("ended",L),y.forEach((t=>{const e=document.createElement("li");e.classList.add("play-item"),e.textContent=t.title,b.append(e)})),p.addEventListener("click",L),w.addEventListener("click",(function(){f=0===f?y.length-1:f-1,C()}));const E=document.querySelector(".change-quote");window.onload=function(){const t=new e;g();const n=new i(t.langSetting,1e3),r=new d(n.currentPartOfDay),o=new c(t.langSetting,m(0,2)),a=new s(t.langSetting),u=document.querySelector(".settings-icon");u.addEventListener("click",(()=>{u.classList.toggle("rotation")})),t.container.addEventListener("click",(e=>{t.change(),n.langSetting=t.langSetting,o.langSetting=t.langSetting,o.getQuotes(),a.langSetting=t.langSetting,a.getWeather()})),E.addEventListener("click",(e=>{new c(t.langSetting,m(0,2))})),document.querySelector(".slide-next").addEventListener("click",(()=>{r.getSlideNext()})),document.querySelector(".slide-prev").addEventListener("click",(()=>{r.getSlidePrev()})),document.addEventListener("DOMContentLoaded",(()=>{a.getWeather()})),a.cityContainer.addEventListener("keypress",(t=>{a.setCity(t)}))}})()})();