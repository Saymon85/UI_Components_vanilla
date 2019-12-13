const items = document.querySelectorAll('.carousel_photo');
const totalItems = items.length;
const slide = 0;
let moving = true;

//set initial classes

const setInitialClasses = () => {
    items[totalItems - 1].classList.add('prev');
    items[0].classList.add('active');
    items[1].classList.add('next');
}

// add event listeners

const setEventListeners = () => {
    const prev = document.querySelector('carousel_button_prev')''
    const next = document.querySelector('carousel_button_next');

    prev.addEventListener('click', moveNext);
    next.addEventListener('click', movePrev);
}

