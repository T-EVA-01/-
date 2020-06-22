const annotationBackgroundImg = document.querySelectorAll('.annotation__background-img');

annotationBackgroundImg[2].style.opacity = "1"; 
// annotationBackgroundImg[2].classList.add('annotation__background-img-active');





function AnimaBackground() {
    let i = 0;
    for ( i; i < annotationBackgroundImg.length; i++) {
        annotationBackgroundImg[i].style.opacity = "1";
        annotationBackgroundImg[i].classList.add('annotation__background-img-active');

        setTimeout(function() {
            annotationBackgroundImg[i].style.opacity = '0';
        }, 10000)
        
    }
}


AnimaBackground();