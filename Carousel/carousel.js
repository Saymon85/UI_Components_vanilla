const items = document.querySelectorAll('.carousel_photo');
const totalItems = items.length;
let slide = 0;
let moving = true;

//set initial classes

const setInitialClasses = () => {
    items[totalItems - 1].classList.add('prev');
    items[0].classList.add('active');
    items[1].classList.add('next');
}

// add event listeners

const setEventListeners = () => {
    const prev = document.querySelector('carousel_button_prev');
    const next = document.querySelector('carousel_button_next');

    prev.addEventListener('click', moveNext);
    next.addEventListener('click', movePrev);
}

//previous and next navigation handler functions


const moveNext = () => {

    if(!moving){
        if(slide === (totalItems - 1)){
            slide = 0;
        }else{
            slide++
        }
    }
    moveCarousel(slide);
}

const movePrev = () => {
    if(!moving){
        if(slide === 0){
            slide = totalItems - 1;
        }else{
            slide--;
        }
    }
    moveCarousel(sldie);
}

// disable intercation when slides rotate

const disableInteraction = () => {

    moving = true;

    setTimeout(() => {
        moving = false;
    }, 500);
}

