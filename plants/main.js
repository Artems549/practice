(function () {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuClose = document.querySelector('.header__nav-close');
    burger.addEventListener('click', () => {
        console.log()
        menu.classList.add('header__nav-active')
    });
    menuClose.addEventListener('click', () => {
        menu.classList.remove('header__nav-active')
    });
}());
