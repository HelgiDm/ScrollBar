let lbtn = document.querySelector('#left');
let rbtn = document.querySelector('#right');
let slide = document.querySelector('.slide');
let scroll = document.querySelector('#scroll');
let scrollBar = document.querySelector('#scroll-bar');
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
  if (isDragging & 
    scroll.style.left.slice(0, scroll.style.left.indexOf('p')) >= 0 &
    scroll.style.left.slice(0, scroll.style.left.indexOf('p')) <= 315) {
        if (event.clientX - startX > 0 & event.clientX - startX < 315) {
            scroll.style.left = `${event.clientX - startX}px`;
            if ((event.clientX - startX) <= scroll.style.left.slice(0, scroll.style.left.indexOf('p'))) {
              slide.style.left = `${(event.clientX - startX) * coef}px`
            }
            else {
              slide.style.right = `${(event.clientX - startX) * coef}px`;
              slide.style.left = '0px'
          }
        }
    }
});



