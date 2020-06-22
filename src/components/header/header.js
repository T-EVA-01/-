
// Переменные

const header = document.querySelector('.header');
const burger = document.querySelector('.burger-bottom')
const burgerLine = document.querySelectorAll('.burger__line');
const logo = document.querySelector('.logo');
const MenuLinks = document.querySelector('.menu__links');
const headerLink = document.querySelector('.header-link');
const windowMenuFooter = document.querySelector('.menu-footer')
const windowMenu = document.querySelector('.window-menu');
const menu = document.querySelector('.menu'); 

// Плавное появление header при загрузке страницы

function headerVisible() {
    header.style.opacity = "1";
}

headerVisible();


// Функция развертки бургера при загрузке страницы

function removeAttr() {
    for(let key in burgerLine) {
        burgerLine[key].removeAttribute("style");
    }
}

setTimeout(removeAttr, 1000)


// События и функции, связанные с кнопкой burger

let counter = 0; // Счетчик 

burger.addEventListener('click', () => {

  burger.classList.toggle('burger_active');
  // burger.classList.toggle('burger-hover');

  if (counter === 0) {

    windowMenu.classList.add('window-menu_active-positionY1');
    menu.style.zIndex = "500";
    

    setTimeout(function() {
      MenuLinks.classList.add('menu__links-active');
    }, 150)

    setTimeout(function() {
      headerLink.classList.toggle('header-link__active'); // задерживает появление ссылки личный кабинет
      windowMenuFooter.classList.toggle('menu-footer_active'); // задерживает появление текста menu-footer
    }, 1400)
      
    counter++;

  } else {

    burger.setAttribute("disabled", "true"); // блокирует burger

    headerLink.classList.toggle('header-link__active');
    windowMenuFooter.classList.toggle('menu-footer_active'); // Меняет цвет текста ссылок меню
    MenuLinks.classList.toggle('menu__links-active-color');    
    windowMenu.classList.add('window-menu_active-positionY2');
    windowMenu.classList.add('window-menu_active-positionXY');
      
    // Замедляет изчезновение текста
    setTimeout(function() {
      MenuLinks.classList.remove('menu__links-active');
    }, 300)


    

    setTimeout(function() {

      // Удаляет актывные классы, чтобы вернуть блок в начальное положение до первого нажатия

      windowMenu.classList.remove('window-menu_active-positionY1');
      windowMenu.classList.remove('window-menu_active-positionY2');
      windowMenu.classList.remove('window-menu_active-positionXY');
      MenuLinks.classList.remove('menu__links-active-color');

      burger.removeAttribute("disabled"); // разблокирует кнопку
      
      menu.style.zIndex = "";
    }, 2300)

    counter--;

  }
})
