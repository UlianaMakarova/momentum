window.onload = function(){
    showTime();
    getLocalStorage();
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
    const dayParts = ['morning', 'afternoon', 'evening','night'];
    const date = new Date();
    const hours = date.getHours();
    const timeOfDay = dayParts[Math.floor(hours/6)];
    return `Good ${timeOfDay}`;
};
