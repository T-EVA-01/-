const header = document.querySelector('.header');
const burger = document.querySelector('.burger-button')
const burgerLine = document.querySelectorAll('.burger__line');
const logo = document.querySelector('.logo-conteiner');
const MenuLinks = document.querySelector('.menu-links');
const headerLink = document.querySelector('.header-link');
const windowMenuFooter = document.querySelector('.menu-footer')
const windowMenu = document.querySelector('.windows-menu');
const menu = document.querySelector('.menu');
const threeActions = document.querySelector('.three-actions');
const body = document.querySelector('body');


// Плавное появление header при загрузке страницы

setTimeout(function() {
  header.style.opacity = "1";
  header.style.transform = "translateY(0)"
}, 1000)

// setTimeout(function() {
//   logo.classList.add('logo-is-active')
// }, 2000)



// Функция развертки бургера при загрузке страницы

function removeAttr() {
    for(let key in burgerLine) {
        burgerLine[key].removeAttribute("style");
    }
}

setTimeout(removeAttr, 2200)


// События и функции, связанные с кнопкой burger

let counter = 0; // Счетчик 

burger.addEventListener('click', () => {

  // Анимация логотипа при клики на бургер 
  let clientHeight = document.querySelector('body').clientHeight;
  let clientWidth = document.querySelector('body').clientWidth;
  let elem = threeActions.getBoundingClientRect();
  if (logo.classList.contains('logo-is-active') && counter == 0 && clientWidth >= 1200) {
    logo.classList.toggle('logo-is-active-remove');
    logo.classList.toggle('logo-is-active');
  } else if (counter == 1 && elem.top < 0 && elem.top < clientHeight && clientWidth >= 1200) {
      setTimeout(function() {
        logo.classList.toggle('logo-is-active');
        logo.classList.toggle('logo-is-active-remove');
      }, 2000)
  }

  if (counter === 0) {
    document.documentElement.style.overflowY = "hidden"
  } else {
    document.documentElement.style.overflowY = "scroll"
  }
  

  burger.classList.toggle('burger_active');
  // burger.classList.toggle('burger-hover');

  if (counter === 0) {

    windowMenu.classList.add('windows-menu_active-positionY1');
    menu.style.zIndex = "500";
    

    setTimeout(function() {
      MenuLinks.classList.add('menu-links-active');
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
    MenuLinks.classList.toggle('menu-links-active-color');    
    windowMenu.classList.add('windows-menu_active-positionY2');
    windowMenu.classList.add('windows-menu_active-positionXY');
      
    // Замедляет изчезновение текста
    setTimeout(function() {
      MenuLinks.classList.remove('menu-links-active');
    }, 300)


    

    setTimeout(function() {

      // Удаляет актывные классы, чтобы вернуть блок в начальное положение до первого нажатия

      windowMenu.classList.remove('windows-menu_active-positionY1');
      windowMenu.classList.remove('windows-menu_active-positionY2');
      windowMenu.classList.remove('windows-menu_active-positionXY');
      MenuLinks.classList.remove('menu-links-active-color');

      burger.removeAttribute("disabled"); // разблокирует кнопку
      
      menu.style.zIndex = "";
    }, 2300)

    counter--;

  }
})


// Анимация логотипа

function logoActive(clientHeight) {     
  let elem = threeActions.getBoundingClientRect();

  if (elem.top < 0 && elem.top < clientHeight) {
    logo.classList.remove('logo-is-active-remove');
    logo.classList.add('logo-is-active');
  } else if (elem.top > 0 && elem.top < clientHeight && logo.classList.contains('logo-is-active')) {
    logo.classList.add('logo-is-active-remove');
    logo.classList.remove('logo-is-active');
  }
}



window.addEventListener('scroll', () => {
  let clientHeight = document.querySelector('body').clientHeight;
  let clientWidth = document.querySelector('body').clientWidth;

  if (clientWidth >= 1200 ) {
    logoActive(clientHeight)
  } else {
    logo.classList.remove('logo-is-active');
    logo.classList.remove('logo-is-active-remove');
  }
  
})