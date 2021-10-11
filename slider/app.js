const slide = document.querySelectorAll('.slide');
const prev = document.querySelector('.prevBtn');
const next = document.querySelector('.nextBtn');

let position = 0;
slide.forEach((slider, index) => {
  slider.style.left = `${index * 100}%`;
});
prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);
function nextSlide() {
  position++;

  moveSlides();
}
function prevSlide() {
  position--;

  moveSlides();
}
function moveSlides() {
  // if (position === slide.length) {
  //   position = 0;
  // } else if (position < 0) {
  //   position = slide.length - 1;
  // }
  if (position > 0) {
    prev.style.display = 'inline-block';
  } else {
    prev.style.display = 'none';
  }
  if (position >= slide.length - 1) {
    next.style.display = 'none';
  } else {
    next.style.display = 'inline-block';
  }
  slide.forEach((slider) => {
    slider.style.transform = `translateX(-${position * 100}%)`;
  });
}
prev.style.display = 'none';
