const overLay = document.querySelector('.modal-overlay');
const openBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener('click', function () {
  overLay.classList.add('open-modal');
});
closeBtn.addEventListener('click', function () {
  overLay.classList.remove('open-modal');
});
