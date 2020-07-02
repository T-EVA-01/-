import '../../components/header/header.js';

const annotationBackgroundImg = document.querySelectorAll('.annotation__background-img');
const annotationTextGeaderLine = document.querySelectorAll('.annotation-text__header-line');
const annotationTextConpany = document.querySelector('.annotation-text__text-conpany');
const services = document.querySelector('.services');
const threeActionsButton = document.querySelector('.three-actions-button');
const footerActionsText = document.querySelector('.footer-actions__text');
const actions = document.querySelector('.actions');
const headerWrapper = document.querySelector('.header-wrapper');
const footerWrapper = document.querySelector('.footer-wrapper');
const businessDevelopmentTop = document.querySelector('.business-development-top');
const businessDevelopmentCards = document.querySelector('.business-development-cards');
const body = document.querySelector('body');
const equipment = document.querySelector('.equipment');
const equipmentImg = document.querySelector('.equipment__img')


annotationBackgroundImg[0].classList.add('annotation__background-img-active-opasity');

setTimeout(function() {
    services.classList.add('services-active');
    annotationTextConpany.style.opacity = "1";
}, 1000)

setTimeout(function() {
    annotationTextGeaderLine[0].classList.add('header-line-active');
}, 2300)

setTimeout(function() {
    annotationTextGeaderLine[1].classList.add('header-line-active');
}, 2500)


setTimeout(function(){
    annotationBackgroundImg[0].classList.add('annotation__background-img-active-transmorm');
    setTimeout(function() {
        annotationBackgroundImg[0].classList.remove('annotation__background-img-active-opasity')
        annotationBackgroundImg[1].classList.add('annotation__background-img-active-transmorm');
        annotationBackgroundImg[1].classList.add('annotation__background-img-active-opasity');
        setTimeout(function() {
            annotationBackgroundImg[1].classList.remove('annotation__background-img-active-opasity')
            annotationBackgroundImg[2].classList.add('annotation__background-img-active-transmorm');
            annotationBackgroundImg[2].classList.add('annotation__background-img-active-opasity');
            setTimeout(function() {
                annotationBackgroundImg[0].classList.remove('annotation__background-img-active-transmorm')
                annotationBackgroundImg[1].classList.remove('annotation__background-img-active-transmorm');
                annotationBackgroundImg[2].style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
            }, 10100)
        }, 8000)
    }, 8000)
}, 3800)




// Анимация при прокрутке страницы
let elements = document.querySelectorAll('[data-anima]');


function isVisible(clientHeight) {
    
    for(let i = 0; i < elements.length; i++) {
        
        let elem = elements[i].getBoundingClientRect();

        if (elem.bottom > 0 && elem.bottom < clientHeight) {


            switch (+(elements[i].dataset.anima)) {
                case 1:
                    elements[i].classList.add('is-active-position');
                    break
                case 2:
                    actions.classList.add('action-is-active');
                    setTimeout(function() {
                        headerWrapper.classList.add('header-is-active');
                        footerWrapper.classList.add('footer-is-active');
                    }, 3000)
                    break
                case 3:
                    businessDevelopmentTop.classList.add('bd-top-active');
                    businessDevelopmentCards.classList.add('cards-active');
                    break
                case 4:
                    if (body.clientWidth <= 1000) {
                        equipment.classList.add('equipment-active');
                        setTimeout(function() {
                            equipment.style.backgroundColor = "#ffc107";
                        }, 1100)
                    } else {
                        equipmentImg.style.animation = 'AnimaImg 3s ease-in-out';
                        equipmentImg.style.animationFillMode = 'forwards';
                        setTimeout(function() {
                            equipment.classList.add('equipment-active');
                        }, 3000)
                        setTimeout(function() {
                            equipment.style.backgroundColor = "#ffc107";
                        }, 4100)
                    }
                    break
            }   
        }
    }
}


window.addEventListener('scroll', () => {
    let clientHeight = document.querySelector('body').clientHeight;

    isVisible(clientHeight)
})


// Анимация, меняющая цвет текста по наведению на кнопку

threeActionsButton.addEventListener('mouseover', function() {
    footerActionsText.classList.add('text-is-active');
})

threeActionsButton.addEventListener('mouseout', function() {
    footerActionsText.classList.remove('text-is-active');
})


