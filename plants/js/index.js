window.onload = function(){
console.log('Максимальное количество баллов: 75\n');
console.log('Невыполненные пункты:');
console.log('Не успела к дедлайну выполнить адаптивное меню');
}


function menu_render() {
    var x = document.getElementsByClassName("nav");
    if (x.className === "nav") {
        x.className += " hamburger";
    } else {
        x.className = "nav";
    }
}