const itemClassName = 'carousel_photo';
const items = document.querySelectorAll('.carousel_photo');
const totalItems = items.length;
let slide = 0;
let moving = true;

//set initial classes

function setInitialClasses(){

    items[totalItems - 1].classList.add('prev');
    items[0].classList.add('active');
    items[1].classList.add('next');
}

// add event listeners

function setEventListeners() {

    const prev = document.querySelector('.carousel_button_prev');
    const next = document.querySelector('.carousel_button_next');

    prev.addEventListener('click', moveNext);
    next.addEventListener('click', movePrev);
}

//previous and next navigation handler functions


function moveNext(){

    if(!moving){
        if(slide === (totalItems - 1)){
            slide = 0;
        }else{
            slide++
        }
    }
    moveCarousel(slide);
}

function movePrev(){
    if(!moving){
        if(slide === 0){
            slide = totalItems - 1;
        }else{
            slide--;
        }
    }
    moveCarousel(slide);
}

// disable intercation when slides rotate

function disableInteraction() {

    moving = true;

    setTimeout(() => {
        moving = false;
    }, 500);
}

// carousel moving function

function moveCarousel(slide){
    
    if(!moving){
        disableInteraction();
    }
    let newPrevious = slide - 1;
    let newNext = slide + 1;
    let oldPrevious = slide - 2;
    let oldNext = slide + 2;

    if((totalItems - 1) > 3) {
        if(newPrevious <= 0){
            oldPrevious = totalItems - 1;
        }else if(newNext >= (totalItems - 1)){
            oldNext = 0;
        }
        if(slide === 0){
            newPrevious = totalItems - 1;
            oldPrevious = totalItems - 2;
            oldNext = slide + 1;
        }else if(slide === (totalItems - 1)){
            newPrevious = slide - 1;
            newNext = 0;
            oldNext = 1;
        }

        items[oldPrevious].className = itemClassName;
        items[oldNext].className = itemClassName;
        
        items[newPrevious].className = itemClassName + ' prev';
        items[slide].className = itemClassName + ' active';
        items[newNext].className = itemClassName + ' next';
    }

}

function initCarousel(){
    
        setInitialClasses();
        setEventListeners();

        moving = false;
}

initCarousel();