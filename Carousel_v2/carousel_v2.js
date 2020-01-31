// Global variables
const slider = document.querySelector('.slider');
const carouselItems = slider.querySelectorAll('.item');
const container = document.querySelector('.container');
const { calc, styler, physics, pointer, transform, value } = window.popmotion;


//Setting initial dynamic style for carousel elements

carouselItems.forEach((item, index) => {
    const hue = (index + 1) * carouselItems.length;
    item.style = `background-color: hsla(${hue}, 90%, 60%, 1); z-index: ${carouselItems.length - index}`;
});

function getTotalItemsWidth(){
    const { left } = carouselItems[0].getBoundingClientRect();
    const { right } = carouselItems[carouselItems.length - 1].getBoundingClientRect();
    return right -left;
}

function carousel(){
    const sliderVisibleWidth = slider.offsetWidth;
    const totalItemsWidth = getTotalItemsWidth();
    const maxXOffset = 0;
    const maxYOffset = - ( totalItemsWidth - sliderVisibleWidth);
    const sliderRenderer = styler(slider);  
    const sliderX = value(0, (x) => sliderRenderer.set('x', x));
    //sliderX.set(-100);

    let action;
    let touchOrigin = {};
// Event listeners for touchpad events


    function stopTouchScroll(){
        document.removeEventListener('touchend', stopTouchScroll);
    }

    function determineDragDirection(e){
         const touch = e.changedTouches[0];
         const touchLocation = {
             x:touch.pageX,
             y:touch.pageY
         };   

         const distance = calc.distance(touchOrigin, touchLocation);

         if(!distance) return;
         document.removeEventListener('touchmove', determineEventListener);

         const angle = calc.angle(touchOrigin, touchLocation);
    }

    function startTouchScroll(event){
        document.addEventListener('touchend', stopTouchScroll);
        if(action) action.stop();
        const touch = e.touches[0];
        touchOrigin = {
            x: touch.pageX,
            y: touch.pageY
        };
    }
    
    slider.addEventListener('touchstart', startTouchScroll, { passive: false });

}



//console.log(getTotalItemsWidth());
//console.log(popmotion);
//console.log(window.popmotion);
carousel();








