export const getRandomNum=(min, max, mode)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return (mode === 'slider') ? (Math.floor(Math.random() * (max - min + 1)) + min): (Math.floor(Math.random() * (max - min + 1)) + min);;

    
  }
export class Background{
    constructor(timeOfDay){
        this.timeOfDay = timeOfDay;
        this.randomNum = 0;
        this.setBackgroundImage();
    }
    setBackgroundImage=()=>{
        if (this.randomNum === 0)
          this.randomNum=getRandomNum(1,20,'slider');
        const img = new Image();
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${this.timeOfDay.split(' ')[1]}/${this.randomNum.toString().padStart(2,'0')}.jpg`
      
        img.onload = () => {   
          const body = document.querySelector('body');
          body.style.backgroundImage = `url('${img.src}')`;   
          }
        }
      
    getSlideNext=()=>{
        this.randomNum = this.randomNum === 20 ? 1 : this.randomNum + 1;
        this.setBackgroundImage();
      }
      
      getSlidePrev=()=>{
        this.randomNum = this.randomNum === 1 ? 20 : this.randomNum - 1;
        this.setBackgroundImage();
      }
}