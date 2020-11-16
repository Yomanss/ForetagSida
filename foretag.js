const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slides img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = slideImages[0].clientWidth;

slides.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click',()=>{
    slides.style.transition = "transform 0.4s ease-in-out"
    counter++;
    slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
})