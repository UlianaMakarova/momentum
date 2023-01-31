window.onload = function(){
    console.log('Максимальное количество баллов: 100\n');
    console.log('Невыполненные пункты:');
    console.log('');
    addTagsClickHandler();
}

const addTagsClickHandler=()=>{
    let clickedButtons = [];
    document.querySelector('.service_btns').addEventListener('click',(e)=>{

        if(e.target.classList.contains('btn')){
            if (clickedButtons.includes(e.target)){
                clickedButtons.splice(clickedButtons.indexOf(e.target));
                removeSelectedButtons();
                showAllServices();
            }
            else {

                clickedButtons.push(e.target);
            }
            if (clickedButtons.length === 3 || clickedButtons.length === 0)
            {
                removeSelectedButtons();
                showAllServices();
                clickedButtons = [];
            }
            else{
            selectClickedButtons(clickedButtons);
            filterServiceBySelectedButtons(clickedButtons);
            }

           
        }
    
    }) 
}

const removeSelectedButtons=() => {
    let buttons = document.querySelectorAll('.btn_selected');
    buttons.forEach(btn=>{
        btn.classList.remove('btn_selected');
        btn.classList.add('btn_unselected');
    })
}
const selectClickedButtons=(clickedButtons) => {
    clickedButtons.forEach(button =>{
        button.classList.remove('btn_unselected');
        button.classList.add('btn_selected');
    })
}
const filterServiceBySelectedButtons=(clickedButtons) =>{
    let services_items = document.querySelectorAll('.service_item');
    services_items.forEach(item =>{
        let header = item.querySelector('.header');
        item.classList.add('service_item_blur'); 
        clickedButtons.forEach(clickedButton=>{
            if (header.textContent.includes(clickedButton.innerText.slice(0,-1))){
                item.classList.remove('service_item_blur');        
            }
            })
        
    });
}
const showAllServices=() => {
    let services_items = document.querySelectorAll('.service_item_blur');
    console.log(services_items)
    services_items.forEach(item =>{
        item.classList.remove('service_item_blur'); 
        console.log(item.classList)

 
    })

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

