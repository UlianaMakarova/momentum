console.log('Максимальное количество баллов: 100\n');
console.log('Невыполненные пункты:');
console.log('два списка ul > li > a (панель навигации, ссылки на соцсети) -3\n  для построения сетки используются флексы или гриды -2\nпри уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону -2\nфоновый цвет тянется на всю ширину страницы -2\n');
console.log('Итого: 91')

function menu_render() {
    var x = document.getElementsByClassName("nav");
    if (x.className === "nav") {
        x.className += " hamburger";
    } else {
        x.className = "nav";
    }
}