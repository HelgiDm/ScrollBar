let lbtn = document.querySelector('#left');
let rbtn = document.querySelector('#right');
let slide = document.querySelector('.slide');
let scroll = document.querySelector('#scroll');
let scrollBar = document.querySelector('#scroll-bar');
let centered = document.querySelector('.centered')
// let imgFirst = document.querySelector('#first');
// let imgLast = document.querySelector('#last');


rbtn.addEventListener('click', () => {
    slide.style.left = `${parseInt(slide.style.left.slice(0, slide.style.left.indexOf('%'))) - 20}%`;
});

lbtn.addEventListener('click', () => {
    slide.style.left = `${parseInt(slide.style.left.slice(0, slide.style.left.indexOf('%'))) + 20}%`;
});

let isDragging = false;
let startX;
let coef = slide.clientWidth / scrollBar.clientWidth;

scroll.addEventListener('mousedown', (event) => {
  isDragging = true;
  startX = event.clientX - scroll.offsetLeft;
  scroll.style.cursor = 'grabbing';
});

document.addEventListener('mouseup', (event) => {
  isDragging = false;
  scroll.style.cursor = 'grab';
});

scroll.addEventListener('mousemove', (event) => {
  if (isDragging & scroll.offsetLeft >= 0 & scroll.offsetLeft <= 315) {
        if (event.clientX - startX > 0 & event.clientX - startX < 0.85*scrollBar.clientWidth) {
            scroll.style.left = `${event.clientX - startX}px`;
            if (-(event.clientX - startX) * coef <= (slide.clientWidth - centered.clientWidth)) {
              slide.style.left = `${-((event.clientX - startX) * 0.812 * coef)}px`;
              console.log('proof')
            }
            else {console.log('dddd')}

            
            


        }
    }
});



