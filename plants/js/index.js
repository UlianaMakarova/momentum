const contact=[
{'City:':'Canandaigua, NY','Phone:':'+1	585	393 0001','Office address:':'151 Charlotte Street'},
{'City:':'New York City','Phone:':'+1	212	456 0002','Office address:':'9 East 91st Street'},
{'City:':'Yonkers, NY','Phone:':'+1	914	678 0003','Office address:':'511 Warburton Ave'},
{'City:':'Sherrill, NY','Phone:':'+1	315	908 0004','Office address:':'14 WEST Noyes BLVD'}
];

window.onload = function(){
    console.log('Максимальное количество баллов: 100\n');
    console.log('Невыполненные пункты:');
    console.log('');
    addPriceButtonHandler();
    addTagsClickHandler();
    addContactSelectHandler();
    addContactCityHandler();
    

}
const addContactSelectHandler=()=>{
    document.querySelector('.arrow_contact').addEventListener('click',(e)=>{
        e = e || window.event;
        var target = e.target ;
        if ( target.classList.contains('arrow_contact')){
            //target.closest('.contact_btn_acc').classList.toggle('_active');
            target.classList.toggle('_active');  
            let list = document.querySelector('.city_list_container');
            target.classList.contains('_active') ? list.style.display = 'flex' : list.style.display = 'none';
            target.classList.contains('_active') ? target.closest('.contact_btn_acc').classList.add('_active') :target.closest('.contact_btn_acc').classList.add('_active'); 
        }

    })
}
const addContactCityHandler=()=>{
    let clicked_city = 'City';
    document.querySelectorAll('.city_list_item').forEach(item =>addEventListener('click',(e)=>{
        e = e || window.event;
        var target = e.target ;
        let arrow =document.querySelector('.arrow_contact');
        if ( target.classList.contains('city_list_item') && target.innerText === item.innerText){
            
            clicked_city = target.innerText;
            let list = document.querySelector('.city_list_container');
            list.style.display = 'none';
            arrow.classList.toggle('_active');
        }
        let text = document.querySelector('.contact_text');
        text.innerHTML = clicked_city;
        if (clicked_city !== 'City'){
            getCityCardInfo(clicked_city);
            let card = document.querySelector('.city_card');
            arrow.classList.contains('_active') ? card.style.display = 'none' : card.style.display = 'block';
        }

    }
    ))
}

const getCityCardInfo=(city='New York City')=>{
    if (city === 'City')
        return;
    let info = contact.filter(card => card['City:']===city)[0]
    let keys = document.querySelectorAll('.city_card_key');
    let values = document.querySelectorAll('.city_card_value')
    keys.forEach((key,index)=> {
        key.innerHTML = Object.keys(info)[index]}
        )
    values.forEach((value,index)=> {
        value.innerHTML = Object.values(info)[index]}
        )
    let phone = 'tel: '+info['Phone:'];
    let button = document.querySelector('.btn_card_call_us');
    button.setAttribute('formaction',phone)
}

const addPriceButtonHandler=()=>{
    let clickedAccButton = '';
    document.querySelectorAll('.btn_acc').forEach(accButton =>accButton.addEventListener('click',(e)=>{
        e = e || window.event;
        var target = e.target || e.srcElement;
        if ( target.classList.contains('arrow')){
            allClosedAccButtons =  document.querySelectorAll('.price_btn_acc_closed');
            allOpenedAccButtons = document.querySelectorAll('.price_btn_acc_opened');
            closeAllOpenedAndOpenAllClosed(allClosedAccButtons,allOpenedAccButtons);
            if ( clickedAccButton.trim() !== target.closest('.btn_acc').innerText.trim()){
                clickedAccButton = target.closest('.btn_acc').innerText;
                openOneAccPrice(target.closest('.btn_acc').innerText);
            }
            else{
                clickedAccButton = '';
            }
           
        }
    })
)}
const closeAllOpenedAndOpenAllClosed=(closed,opened)=>{
    closed.forEach(acc=> acc.style.display='block')
    opened.forEach(acc=> acc.style.display='none')
}

const openOneAccPrice=(clickedAccButton)=>{
    openedAccButtons =  document.querySelectorAll('.price_btn_acc_opened');
    openedAccButtons.forEach(acc =>{
        if (acc.innerText.includes(clickedAccButton)){
            acc.style.display = 'block';            
        }
    });
    allClosedAccButtons = document.querySelectorAll('.price_btn_acc_closed');
    allClosedAccButtons.forEach(acc =>{
        if (acc.innerText.includes(clickedAccButton)){
            acc.style.display = 'none';            
        }
    })
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

