const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay');

openBtn.addEventListener('click', () => {
    const modal = document.getElementById('modal');
    modal.classList.add('active');
    overlay.classList.add('active');
})

closeBtn.addEventListener('click', () => {
    closeBtn.closest('.modal').classList.remove('active');
    overlay.classList.remove('active');
})

overlay.addEventListener('click', () => {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    overlay.classList.remove('active');
})