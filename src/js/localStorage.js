const cityContainer = document.querySelector('.city');
const nameContainer = document.querySelector('.name');
const setLocalStorage=()=> {
    localStorage.setItem('city', cityContainer.value);
    localStorage.setItem('name', nameContainer.value);
  };
  window.addEventListener('beforeunload', ()=>{
    setLocalStorage();
  });

  export function getLocalStorage(){
    if(localStorage.getItem('name')) {
      nameContainer.value = localStorage.getItem('name');
    }
    if(localStorage.getItem('city')) {
     cityContainer.value = localStorage.getItem('city');
    }
  };
  window.addEventListener('onload', getLocalStorage);
  