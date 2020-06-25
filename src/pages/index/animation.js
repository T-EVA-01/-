const annotationBackgroundImg = document.querySelectorAll('.annotation__background-img');
const annotationTextGeaderLine = document.querySelectorAll('.annotation-text__header-line');
const annotationTextConpany = document.querySelector('.annotation-text__text-conpany');
const services = document.querySelector('.services');

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
        console.log(elem.top)
        console.log(clientHeight)
        if (elem.top > 0 && elem.top < clientHeight) {
            switch (+(elements[i].dataset.anima)) {
                case 1:
                    elements[i].classList.add('FDP-pioner-active')
            }
        }
    }
}



window.addEventListener('scroll', () => {
    let clientHeight = document.documentElement.clientHeight;

    isVisible(clientHeight)
})