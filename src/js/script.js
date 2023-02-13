window.onload = function(){
    showTime();
}

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

}