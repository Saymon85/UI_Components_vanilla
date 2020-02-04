const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay');
const modal = document.getElementById('modal');

openBtn.addEventListener('click', () => {
    modal.classList.add('active');
    overlay.classList.add('active');
})

closeBtn.addEventListener('click', () => {
    closeBtn.closest('.modal').classList.remove('active');
    overlay.classList.remove('active');
})

overlay.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
})