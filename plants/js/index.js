window.onload = function(){
    console.log('Максимальное количество баллов: 100\n');
    console.log('Невыполненные пункты:');
    console.log('');
    addTagsClickHandler();
}

const addTagsClickHandler=()=>{
    let clickedButton = [];
    document.querySelector('.service_btns').addEventListener('click',(e)=>{
        if(e.target.classList.contains('btn')){
            clickedButton.push(e.target);
            if(clickedButton.length === 3){removeSelectedButtons()};
            selectClickedButtons(clickedButton);
        }
    }) 
}

const removeSelectedButtons=() => {
    let buttons = document.querySelectorAll('.btn_selected');
    console.log(buttons)
    buttons.forEach(btn=>{
        console.log();
        btn.classList.remove('btn_selected');
        btn.classList.add('btn_unselected');
    })
}
const selectClickedButtons=(clickedButton) => {
    clickedButton.classList.remove('btn_unselected');
    clickedButton.classList.add('btn_selected');

}


//Меню бургер открыть
const iconMenu = document.querySelector('.hamburger');
const menuBody = document.querySelector('.hamburger-nav');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
const menuLinks = document.querySelectorAll('.hamburger-nav-link');
    // Для каждого элемента меню при клике вызываем ф-ию
    menuLinks.forEach(menuLinks => {
      menuLinks.addEventListener("click", closeOnClick);
    });
    // Закрытие попапа при клике на меню
    function closeOnClick() {
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
    }
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    //Закрытие меню при клике вне меню
    main.addEventListener('click', outsideEvtListener);
    footer.addEventListener('click', outsideEvtListener);
  
    


    function outsideEvtListener(evt) {
    if (evt.target === menuBody || menuBody.contains(evt.target)) {
        // клик внутри
        return;
    }
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
    }

